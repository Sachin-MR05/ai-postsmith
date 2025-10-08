const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-glow to-accent bg-clip-text text-transparent">
            AI Content Pipeline
          </h3>
          <p className="text-muted-foreground">
            Automating social media content creation with AI
          </p>
          <div className="pt-4 text-sm text-muted-foreground">
            © 2025 All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
