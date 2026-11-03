#!/usr/bin/env python3
"""Verify the APK Signature Scheme v2/v3 certificate DN directly.
Usage: python3 scripts/verify-apk-sig.py <apk>"""
import struct
import sys
import subprocess
import tempfile
import os

MAGIC = b"APK Sig Block 42"
V2_ID = 0x7109871A
V3_ID = 0xF05368C0


def u32(b, o):
    return struct.unpack_from("<I", b, o)[0]


def u64(b, o):
    return struct.unpack_from("<Q", b, o)[0]


def find_eocd(data):
    for i in range(len(data) - 22, max(0, len(data) - 22 - 65536), -1):
        if data[i:i + 4] == b"PK\x05\x06":
            return i
    raise SystemExit("EOCD not found")


def main(path):
    data = open(path, "rb").read()
    eocd = find_eocd(data)
    cd_offset = u32(data, eocd + 16)
    if data[cd_offset - 16:cd_offset] != MAGIC:
        raise SystemExit("APK Signing Block not found (unsigned APK?)")
    size2 = u64(data, cd_offset - 24)
    start = cd_offset - size2 - 8
    size1 = u64(data, start)
    if size1 != size2:
        raise SystemExit("corrupt signing block sizes")
    o = start + 8
    end = cd_offset - 24
    certs = []
    while o < end:
        plen = u64(data, o)
        pid = u32(data, o + 8)
        val = data[o + 12:o + 8 + plen]
        if pid in (V2_ID, V3_ID):
            # value → len-prefixed sequence of len-prefixed signers
            so = 0
            seq_len = u32(val, so); so += 4
            signer_len = u32(val, so); so += 4
            # signer → signed_data (lp), signatures (lp), pubkey (lp)
            sd_len = u32(val, so); so += 4
            sd = val[so:so + sd_len]
            # signed_data → digests (lp), certificates (lp), attributes (lp)
            d = 0
            digests_len = u32(sd, d); d += 4 + digests_len
            certs_len = u32(sd, d); d += 4
            certs_end = d + certs_len
            c = d
            while c < certs_end:
                cert_len = u32(sd, c); c += 4
                certs.append(sd[c:c + cert_len])
                c += cert_len
        o += 8 + plen
    if not certs:
        raise SystemExit("no v2/v3 certificates found")
    with tempfile.NamedTemporaryFile(suffix=".der", delete=False) as f:
        f.write(certs[0])
        tmp = f.name
    out = subprocess.run(
        ["openssl", "x509", "-inform", "DER", "-in", tmp, "-noout", "-subject", "-enddate", "-nameopt", "sep_multiline"],
        capture_output=True, text=True)
    os.unlink(tmp)
    print(f"APK: {path}")
    print(f"signer certificates found: {len(certs)}")
    print(out.stdout.strip())


if __name__ == "__main__":
    main(sys.argv[1])
