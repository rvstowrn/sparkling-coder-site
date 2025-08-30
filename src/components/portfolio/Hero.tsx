import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 pointer-events-none" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Rishabh Verma
          </h1>
          
          <div className="text-xl md:text-2xl text-white/90 mb-4">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Software Developer
            </span>
          </div>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Frontend-focused developer specializing in Angular and React, 
            with experience in full-stack development using Node.js and Django
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={() => scrollToSection("about")}
              size="lg"
              className="bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
            >
              Learn More
            </Button>
            
            <Button 
              onClick={() => scrollToSection("contact")}
              variant="outline"
              size="lg"
              className="bg-transparent text-white border-white/30 hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex justify-center gap-6">
            <a 
              href="https://www.linkedin.com/in/rishabhverma4488/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors p-2 hover:scale-110 transform duration-200"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:rishabhverma4488@gmail.com"
              className="text-white/70 hover:text-white transition-colors p-2 hover:scale-110 transform duration-200"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection("about")}
          className="text-white/70 hover:text-white transition-colors"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;