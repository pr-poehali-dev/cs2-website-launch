import HeroSection from "@/components/HeroSection";
import GameInfo from "@/components/GameInfo";
import Gallery from "@/components/Gallery";
import SystemRequirements from "@/components/SystemRequirements";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <HeroSection />
      <GameInfo />
      <Gallery />
      <SystemRequirements />
    </div>
  );
};

export default Index;
