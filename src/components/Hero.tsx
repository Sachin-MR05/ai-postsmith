import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

interface HeroProps {
  id?: string;
}

const Hero = ({ id }: HeroProps) => {
  return (
    <section id={id} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated video-like gradient background */}
      <div className="absolute inset-0 bg-gradient-hero">
        {/* Animated gradient overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: "linear-gradient(-45deg, hsl(263 70% 60%), hsl(189 95% 45%), hsl(263 70% 70%), hsl(189 95% 55%))",
            backgroundSize: "400% 400%",
            animation: "gradient-x 15s ease infinite",
          }}
        ></div>
        
        {/* Floating particles animation */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
              }}
            ></div>
          ))}
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzhjMzFmZiIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 opacity-0 animate-fade-in-left">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-sm font-medium text-primary shadow-sm">
                AI-Powered Automation
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
                Social Media Content Pipeline
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl">
              An end-to-end automation that discovers trending topics, generates engaging captions and images, 
              and schedules posts—all powered by AI and human oversight.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="accent" className="group shadow-accent-glow">
                View Demo
                <Play className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="group">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">100%</div>
                <div className="text-sm text-muted-foreground">Automated</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-accent to-accent-glow bg-clip-text text-transparent">3 APIs</div>
                <div className="text-sm text-muted-foreground">Integrated</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">AI-First</div>
                <div className="text-sm text-muted-foreground">Approach</div>
              </div>
            </div>
          </div>

          {/* Right content - Hero image with animation */}
          <div className="relative opacity-0 animate-fade-in-right" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-elegant border border-border/50">
              <img 
                src={heroImage} 
                alt="AI Content Pipeline Visualization" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
