import { Badge } from "@/components/ui/badge";

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
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-glow to-accent bg-clip-text text-transparent">
              Technologies Used
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built with cutting-edge tools and APIs for maximum reliability and performance
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto animate-fade-in">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="outline"
              className="px-6 py-3 text-base border-2 border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:shadow-glow cursor-default"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
