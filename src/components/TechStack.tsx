import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const technologies = [
  "n8n",
  "Google Gemini API",
  "OpenAI DALL·E API",
  "Google Sheets API",
  "X (Twitter) API",
  "JavaScript (Node.js)",
  "JSON",
];

const TechStack = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: badgesRef, isVisible: badgesVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              Technologies Used
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built with cutting-edge tools and APIs for maximum reliability and performance
          </p>
        </div>

        <div
          ref={badgesRef}
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        >
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                badgesVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <Badge
                variant="outline"
                className="px-6 py-3 text-base border-2 border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:shadow-glow cursor-default hover:scale-110"
              >
                {tech}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
