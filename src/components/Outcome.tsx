import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface OutcomeProps {
  id?: string;
}

const Outcome = ({ id }: OutcomeProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id={id} className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <Card className="max-w-4xl mx-auto p-8 sm:p-12 bg-gradient-card border-border shadow-elegant">
            <div className="text-center space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-sm font-medium text-accent">
                  Project Outcome
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold">
                <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
                  Fully Autonomous Content Pipeline
                </span>
              </h2>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The result is a fully autonomous, AI-assisted content pipeline that drastically reduces manual work, 
                maintains consistent posting activity, and integrates human oversight for quality assurance.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 pt-8">
                <div className="p-6 rounded-lg bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-all duration-300 hover:scale-105">
                  <div className="text-3xl font-bold text-primary mb-2">90%</div>
                  <div className="text-sm text-muted-foreground">Time Saved</div>
                </div>
                <div className="p-6 rounded-lg bg-accent/5 border border-accent/20 hover:bg-accent/10 transition-all duration-300 hover:scale-105">
                  <div className="text-3xl font-bold text-accent mb-2">Daily</div>
                  <div className="text-sm text-muted-foreground">Automated Posts</div>
                </div>
                <div className="p-6 rounded-lg bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-all duration-300 hover:scale-105">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Quality Control</div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4 pt-8">
                <Button size="lg" variant="accent" className="group shadow-accent-glow">
                  View on GitHub
                  <Github className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="group">
                  Live Demo
                  <ExternalLink className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Outcome;
