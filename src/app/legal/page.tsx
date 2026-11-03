import { redirect } from "next/navigation";

// The old combined /legal page was split into four standalone pages.
export default function Legal() {
  redirect("/terms");
}
