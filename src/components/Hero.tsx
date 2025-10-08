import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzhjMzFmZiIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjIiLz48L2c+PC9zdmc+')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-primary/20 border border-primary/50 text-sm font-medium text-primary-glow">
                AI-Powered Automation
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-foreground via-primary-glow to-accent bg-clip-text text-transparent">
                Social Media Content Pipeline
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl">
              An end-to-end automation that discovers trending topics, generates engaging captions and images, 
              and schedules posts—all powered by AI and human oversight.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="accent" className="group">
                View Demo
                <Play className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="group">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div>
                <div className="text-3xl font-bold text-primary-glow">100%</div>
                <div className="text-sm text-muted-foreground">Automated</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">3 APIs</div>
                <div className="text-sm text-muted-foreground">Integrated</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-glow">AI-First</div>
                <div className="text-sm text-muted-foreground">Approach</div>
              </div>
            </div>
          </div>

          {/* Right content - Hero image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={heroImage} 
                alt="AI Content Pipeline Visualization" 
                className="w-full h-auto animate-glow"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
