import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TechStack from "@/components/TechStack";
import ProcessFlow from "@/components/ProcessFlow";
import Challenges from "@/components/Challenges";
import Outcome from "@/components/Outcome";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <TechStack />
      <ProcessFlow />
      <Challenges />
      <Outcome />
      <Footer />
    </div>
  );
};

export default Index;
