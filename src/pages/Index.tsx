import HeroSection from "@/components/HeroSection";
import GameInfo from "@/components/GameInfo";
import Gallery from "@/components/Gallery";
import SystemRequirements from "@/components/SystemRequirements";
import Donation from "@/components/Donation";
import SkinChanger from "@/components/SkinChanger";
import ServerRules from "@/components/ServerRules";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <HeroSection />
      <GameInfo />
      <Gallery />
      <SystemRequirements />
      <Donation />
      <SkinChanger />
      <ServerRules />
    </div>
  );
};

export default Index;
