import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MissionBento from "@/components/MissionBento";
import SectorSuites from "@/components/SectorSuites";
import ExecutiveTerminal from "@/components/ExecutiveTerminal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05070E] text-white selection:bg-[#0066FF] selection:text-white">
      <Navbar />
      <Hero />
      <MissionBento />
      <SectorSuites />
      <ExecutiveTerminal />
      <Footer />
    </main>
  );
}