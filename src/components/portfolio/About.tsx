import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Server } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate software developer with a strong focus on frontend development. 
            I love creating beautiful, responsive user interfaces and bringing designs to life with clean, efficient code.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="group hover:shadow-card hover:bg-card-hover transition-all duration-300 border-0 shadow-sm">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Palette className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
              <p className="text-muted-foreground leading-relaxed">
                Specialized in building modern, responsive web applications using Angular and React. 
                Passionate about user experience and clean, maintainable code.
              </p>
            </CardContent>
          </Card>
          
          <Card className="group hover:shadow-card hover:bg-card-hover transition-all duration-300 border-0 shadow-sm">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Code className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Full Stack Skills</h3>
              <p className="text-muted-foreground leading-relaxed">
                Experience with both frontend and backend technologies. Proficient in TypeScript, 
                database design, and API development for complete web solutions.
              </p>
            </CardContent>
          </Card>
          
          <Card className="group hover:shadow-card hover:bg-card-hover transition-all duration-300 border-0 shadow-sm">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Server className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Backend & Mobile</h3>
              <p className="text-muted-foreground leading-relaxed">
                Backend development experience with Node.js and Django. 
                Also explore mobile development with Flutter and cloud technologies.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;