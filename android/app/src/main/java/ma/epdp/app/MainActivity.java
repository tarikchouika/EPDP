package ma.epdp.app;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.app.DownloadManager;
import android.content.ContentValues;
import android.content.Context;
import android.content.Intent;
import android.graphics.Color;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Environment;
import android.print.PrintAttributes;
import android.print.PrintDocumentAdapter;
import android.print.PrintManager;
import android.provider.MediaStore;
import android.util.Base64;
import android.view.View;
import android.view.Window;
import android.view.WindowInsets;
import android.view.WindowInsetsController;
import android.webkit.JavascriptInterface;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.FrameLayout;
import android.widget.LinearLayout;
import android.widget.Button;
import android.widget.Toast;
import androidx.core.view.WindowCompat;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.WindowInsetsControllerCompat;
import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStream;
import java.util.Locale;

/**
 * EPDP — كاتبك الرقمي · Android shell.
 *
 * Full-bleed immersive WebView around the live platform (https://epdp.pages.dev):
 *  • Fills the whole screen; system bars hidden, revealed transiently on swipe.
 *  • Branded splash (petrol gradient + EPDP wordmark) until first page paint.
 *  • Bundled offline fallback page (assets/offline.html).
 *  • External links & downloads handed to the system browser.
 *  • Back key walks WebView history.
 *  • JS bridge (window.EPDPNative): real file exports — .docx bytes are saved
 *    through MediaStore/Downloads (blob: URLs cannot go through DownloadManager),
 *    and “Save as PDF” runs the platform print area through PrintManager.
 */
public class MainActivity extends Activity {

    private static final String HOME_URL = "https://epdp.pages.dev/";
    private static final String HOST = "epdp.pages.dev";

    private WebView web;
    private LinearLayout splash;
    private boolean splashGone = false;

    @SuppressLint("SetJavaScriptEnabled")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        web = findViewById(R.id.webview);
        splash = findViewById(R.id.splash);

        applyImmersiveFullscreen();
        configureWebView();

        if (savedInstanceState != null) {
            web.restoreState(savedInstanceState);
        } else {
            web.loadUrl(HOME_URL);
        }

        // Retry button on the offline page (bundled asset uses a known id).
        // Handled via JS bridge-free URL interception: offline page links to epdp://retry
    }

    /** Fill the screen; hide status + navigation bars; transient reveal on swipe. */
    private void applyImmersiveFullscreen() {
        Window w = getWindow();
        WindowCompat.setDecorFitsSystemWindows(w, false);
        if (Build.VERSION.SDK_INT >= 28) {
            w.getAttributes().layoutInDisplayCutoutMode =
                android.view.WindowManager.LayoutParams.LAYOUT_IN_DISPLAY_CUTOUT_MODE_SHORT_EDGES;
        }
        hideSystemBars();
    }

    private void hideSystemBars() {
        WindowInsetsControllerCompat c =
            WindowCompat.getInsetsController(getWindow(), getWindow().getDecorView());
        c.setSystemBarsBehavior(
            WindowInsetsControllerCompat.BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE);
        c.hide(WindowInsetsCompat.Type.systemBars());
    }

    @Override
    public void onWindowFocusChanged(boolean hasFocus) {
        super.onWindowFocusChanged(hasFocus);
        if (hasFocus) hideSystemBars();
    }

    @SuppressLint("SetJavaScriptEnabled")
    private void configureWebView() {
        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setDatabaseEnabled(true);
        s.setSupportZoom(false);
        s.setBuiltInZoomControls(false);
        s.setTextZoom(100);
        s.setLoadWithOverviewMode(true);
        s.setUseWideViewPort(true);
        s.setCacheMode(WebSettings.LOAD_DEFAULT);
        s.setMediaPlaybackRequiresUserGesture(true);
        web.setBackgroundColor(Color.parseColor("#122e3c"));

        web.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest req) {
                Uri u = req.getUrl();
                String host = u.getHost() == null ? "" : u.getHost();
                if (HOST.equals(host) || host.endsWith("." + HOST)) {
                    return false; // stay in app
                }
                if ("epdp".equals(u.getScheme()) && "retry".equals(u.getHost())) {
                    view.loadUrl(HOME_URL); // retry from offline page
                    return true;
                }
                try { // external site / mail / tel → system
                    startActivity(new Intent(Intent.ACTION_VIEW, u));
                } catch (Exception ignored) {
                }
                return true;
            }

            @Override
            public void onPageFinished(WebView view, String url) {
                super.onPageFinished(view, url);
                dismissSplash();
            }

            @SuppressWarnings("deprecation")
            @Override
            public void onReceivedError(WebView view, int errorCode,
                                        String description, String failingUrl) {
                if (failingUrl != null && failingUrl.startsWith("http") && !isOfflineShown()) {
                    view.loadUrl("file:///android_asset/offline.html");
                }
            }
        });

        web.setWebChromeClient(new WebChromeClient());

        // Native bridge for in-page exports (.docx bytes, print-to-PDF).
        web.addJavascriptInterface(new NativeBridge(), "EPDPNative");

        // APK / file downloads → system DownloadManager
        web.setDownloadListener((url, userAgent, contentDisposition, mimeType, size) -> {
            try {
                DownloadManager.Request r = new DownloadManager.Request(Uri.parse(url));
                r.setNotificationVisibility(DownloadManager.Request.VISIBILITY_VISIBLE_NOTIFY_COMPLETED);
                android.app.DownloadManager dm =
                    (android.app.DownloadManager) getSystemService(Context.DOWNLOAD_SERVICE);
                if (dm != null) dm.enqueue(r);
            } catch (Exception e) {
                try {
                    startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse(url)));
                } catch (Exception ignored) {
                }
            }
        });
    }

    /**
     * Exposed to JS as window.EPDPNative.
     * saveFile(name, base64, mime): write bytes to the public Downloads folder
     *   (MediaStore on API 29+, direct file write on 24–28).
     * print(): print the current page (platform print CSS shows only the
     *   document) — the system dialog offers “Save as PDF”.
     */
    private class NativeBridge {

        @JavascriptInterface
        public void saveFile(final String name, final String base64, final String mime) {
            new Thread(() -> {
                final String result = writeDownloads(name, Base64.decode(base64, Base64.DEFAULT), mime);
                runOnUiThread(() ->
                    Toast.makeText(MainActivity.this, result, Toast.LENGTH_LONG).show());
            }, "epdp-save").start();
        }

        @JavascriptInterface
        public void print() {
            runOnUiThread(() -> printCurrentPage());
        }

        private String writeDownloads(String name, byte[] bytes, String mime) {
            String safe = name == null || name.trim().isEmpty() ? "EPDP.docx" : name.trim();
            try {
                if (Build.VERSION.SDK_INT >= 29) {
                    ContentValues cv = new ContentValues();
                    cv.put(MediaStore.Downloads.DISPLAY_NAME, safe);
                    cv.put(MediaStore.Downloads.MIME_TYPE,
                            mime == null ? "application/octet-stream" : mime);
                    Uri uri = getContentResolver().insert(
                            MediaStore.Downloads.EXTERNAL_CONTENT_URI, cv);
                    if (uri == null) throw new IllegalStateException("MediaStore insert failed");
                    try (OutputStream os = getContentResolver().openOutputStream(uri)) {
                        if (os == null) throw new IllegalStateException("stream null");
                        os.write(bytes);
                        os.flush();
                    }
                } else {
                    File dir = Environment.getExternalStoragePublicDirectory(
                            Environment.DIRECTORY_DOWNLOADS);
                    if (!dir.exists() && !dir.mkdirs())
                        throw new IllegalStateException("mkdirs failed");
                    File out = new File(dir, safe);
                    try (FileOutputStream fos = new FileOutputStream(out)) {
                        fos.write(bytes);
                        fos.flush();
                    }
                }
                return String.format(Locale.US, "✓ %s → Downloads", safe);
            } catch (Exception e) {
                // Last resort: app-specific dir (always writable, no permission).
                try {
                    File dir = getExternalFilesDir(Environment.DIRECTORY_DOWNLOADS);
                    if (dir == null) dir = getFilesDir();
                    File out = new File(dir, safe);
                    try (FileOutputStream fos = new FileOutputStream(out)) {
                        fos.write(bytes);
                        fos.flush();
                    }
                    return String.format(Locale.US, "✓ %s → %s", safe, dir.getName());
                } catch (Exception e2) {
                    return "✗ " + safe;
                }
            }
        }
    }

    /** Print the current WebView content (honours the platform @media print CSS). */
    private void printCurrentPage() {
        try {
            PrintManager pm = (PrintManager) getSystemService(Context.PRINT_SERVICE);
            if (pm == null) return;
            PrintDocumentAdapter adapter = web.createPrintDocumentAdapter("EPDP");
            pm.print("EPDP — كاتبك الرقمي", adapter,
                    new PrintAttributes.Builder().build());
        } catch (Exception ignored) {
        }
    }

    private boolean isOfflineShown() {
        return web.getUrl() != null && web.getUrl().contains("offline.html");
    }

    private void dismissSplash() {
        if (splashGone || splash == null) return;
        splashGone = true;
        splash.animate().alpha(0f).setDuration(350).withEndAction(() ->
            splash.setVisibility(View.GONE)).start();
    }

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        super.onSaveInstanceState(outState);
        web.saveState(outState);
    }

    @Override
    public void onBackPressed() {
        if (web.canGoBack()) {
            web.goBack();
        } else {
            super.onBackPressed();
        }
    }
}
