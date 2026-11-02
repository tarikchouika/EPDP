import { Header } from "@/components/epdp/header";
import { Hero, Stats } from "@/components/epdp/hero";
import { Services } from "@/components/epdp/services";
import { OfficialLinks } from "@/components/epdp/official-links";
import { HowItWorks, Faq } from "@/components/epdp/sections";
import { About, Legal } from "@/components/epdp/about-legal";
import { Footer } from "@/components/epdp/footer";
import { Chatbot } from "@/components/epdp/chatbot";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Services />
        <OfficialLinks />
        <HowItWorks />
        <Faq />
        <About />
        <Legal />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
