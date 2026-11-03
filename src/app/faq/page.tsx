import type { Metadata } from "next";
import { FaqPage } from "@/components/epdp/simple-pages";

export const metadata: Metadata = {
  title: "كيف تعمل — الأسئلة الشائعة | Comment ça marche — FAQ",
  description:
    "كيف تعمل منصة EPDP خطوة بخطوة، وإجابات موثقة عن أكثر الأسئلة تكراراً حول الوثائق والإجراءات الإدارية في المغرب. How EPDP works plus verified answers about administrative procedures in Morocco.",
  alternates: { canonical: "/faq" },
};

export default function Faq() {
  return <FaqPage />;
}
