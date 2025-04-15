import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import MissionSection from "@/components/sections/MissionSection";
import RouteSection from "@/components/sections/RouteSection";
import CrewSection from "@/components/sections/CrewSection";
import UpdatesSection from "@/components/sections/UpdatesSection";
import SponsorsSection from "@/components/sections/SponsorsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <MissionSection />
      <RouteSection />
      <CrewSection />
      <UpdatesSection />
      <SponsorsSection />
      <Footer />
    </main>
  );
}
