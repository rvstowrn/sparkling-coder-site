import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Feel free to reach out if you'd like to collaborate!
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="group hover:shadow-card hover:bg-card-hover transition-all duration-300 border-0 shadow-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Linkedin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">LinkedIn</h3>
                <p className="text-muted-foreground mb-6">
                  Connect with me on LinkedIn for professional networking
                </p>
                <Button asChild className="w-full">
                  <a 
                    href="https://www.linkedin.com/in/rishabhverma4488/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    View Profile
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-card hover:bg-card-hover transition-all duration-300 border-0 shadow-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Email</h3>
                <p className="text-muted-foreground mb-6">
                  Send me an email for project inquiries or collaborations
                </p>
                <Button asChild variant="outline" className="w-full">
                  <a 
                    href="mailto:rishabhverma4488@gmail.com"
                    className="flex items-center gap-2"
                  >
                    Send Email
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-border to-transparent mx-auto mb-8" />
            <p className="text-muted-foreground">
              © 2024 Rishabh Verma. Built with React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;