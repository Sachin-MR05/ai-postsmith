import { Card } from "@/components/ui/card";
import { AlertTriangle, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const challenges = [
  {
    challenge: "Managing different API authentications (API keys vs OAuth2)",
    solution: "Used n8n credentials manager to securely configure and isolate each authentication method per API.",
  },
  {
    challenge: "Cleaning inconsistent AI-generated JSON responses",
    solution: "Added JavaScript-based data sanitization and error handling in n8n Code nodes to ensure structured, reliable JSON outputs.",
  },
  {
    challenge: "Combining text data and binary image data for posting",
    solution: "Utilized n8n's Set and Code nodes to merge JSON and binary streams, forming a valid payload for the final API call.",
  },
];

const ChallengeCard = ({ item, index }: { item: typeof challenges[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-10 rotate-3"
      }`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      <Card className="p-6 bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow h-full">
        <div className="mb-4 flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
            <AlertTriangle className="w-5 h-5 text-destructive" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">Challenge</h3>
            <p className="text-sm text-muted-foreground">{item.challenge}</p>
          </div>
        </div>

        <div className="mt-6 flex items-start gap-3 pt-6 border-t border-border">
          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
            <CheckCircle className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">Solution</h3>
            <p className="text-sm text-muted-foreground">{item.solution}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

interface ChallengesProps {
  id?: string;
}

const Challenges = ({ id }: ChallengesProps) => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section id={id} className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              Challenges & Solutions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real problems solved with thoughtful engineering
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {challenges.map((item, index) => (
            <ChallengeCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenges;
