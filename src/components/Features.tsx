import { Card } from "@/components/ui/card";
import { Search, Sparkles, CheckCircle2, Image, Calendar } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Automated Topic Discovery",
    description: "AI proactively finds trending topics, ensuring all social posts are timely and relevant to the latest industry discussions.",
  },
  {
    icon: Sparkles,
    title: "Multi-Stage AI Content Generation",
    description: "Two-phase AI process: first identifying trending themes, then generating tweet-ready captions and image prompts.",
  },
  {
    icon: CheckCircle2,
    title: "Human-in-the-Loop Verification",
    description: "Each AI-generated post is stored in Google Sheets with 'Pending' status, allowing human review and approval.",
  },
  {
    icon: Image,
    title: "Automated Visual Creation",
    description: "Integration with DALL·E API produces contextually relevant visuals for every post—beyond generic stock imagery.",
  },
  {
    icon: Calendar,
    title: "Scheduled & Auditable Publishing",
    description: "Scheduler checks verified posts, publishes automatically to X (Twitter), and maintains a transparent audit log.",
  },
];

const Features = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-glow to-accent bg-clip-text text-transparent">
              Key Features
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive automation system that handles every aspect of social media content creation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Icon className="w-6 h-6 text-primary-glow" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
