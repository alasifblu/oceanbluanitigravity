import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AgitationGrid from "@/components/AgitationGrid";
import BluBoxShowcase from "@/components/BluBoxShowcase";
import SectorSuites from "@/components/SectorSuites";
import StrategicRnD from "@/components/StrategicRnD";
import VentureFlywheel from "@/components/VentureFlywheel";
import SecurityCompliance from "@/components/SecurityCompliance";
import ExecutiveTerminal from "@/components/ExecutiveTerminal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05070E] text-white selection:bg-[#0066FF] selection:text-white">
      <Navbar />
      <Hero />
      <AgitationGrid />
      <BluBoxShowcase />
      <SectorSuites />
      <StrategicRnD />
      <VentureFlywheel />
      <SecurityCompliance />
      <ExecutiveTerminal />
      <Footer />
    </main>
  );
}