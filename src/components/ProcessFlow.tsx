import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    step: "01",
    title: "Cron Trigger",
    description: "n8n workflow starts on schedule, calling Gemini API to fetch trending AI-related topics",
  },
  {
    step: "02",
    title: "Content Generation",
    description: "Second AI node generates detailed captions and image prompts based on trending topics",
  },
  {
    step: "03",
    title: "Human Review",
    description: "Posts saved to Google Sheets with 'Pending' status for quality verification",
  },
  {
    step: "04",
    title: "Image Creation",
    description: "Approved posts trigger DALL·E to generate contextually relevant visuals",
  },
  {
    step: "05",
    title: "Publishing",
    description: "Merged content posted to X (Twitter) with status updated to 'Posted' for full transparency",
  },
];

const ProcessStep = ({ item, index, isLast }: { item: typeof steps[0]; index: number; isLast: boolean }) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
      }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <Card className="p-6 bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-2xl font-bold shadow-glow text-primary-foreground group-hover:scale-110 transition-transform duration-300">
            {item.step}
          </div>
          
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
              {item.title}
            </h3>
            <p className="text-muted-foreground">
              {item.description}
            </p>
          </div>

          {!isLast && (
            <ArrowRight className="hidden sm:block w-6 h-6 text-primary/50 group-hover:text-primary group-hover:translate-x-1 transition-all" />
          )}
        </div>
      </Card>
    </div>
  );
};

interface ProcessFlowProps {
  id?: string;
}

const ProcessFlow = ({ id }: ProcessFlowProps) => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section id={id} className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A seamless five-step process from topic discovery to publication
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {steps.map((item, index) => (
            <ProcessStep 
              key={index} 
              item={item} 
              index={index} 
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
