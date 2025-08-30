import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Code, Award } from "lucide-react";

const Contributions = () => {
  const contributions = [
    {
      title: "SpotDraft Core Features",
      type: "Product Development",
      icon: Code,
      achievements: [
        "Template System",
        "SFDC Native Integration", 
        "Global Data Manager"
      ],
      description: "Led development of key platform features that enhanced document management and integration capabilities for enterprise clients.",
      category: "Professional"
    },
    {
      title: "Moonshot Hackathon Winner",
      type: "3rd Prize + Crowd Favorite",
      icon: Trophy,
      achievements: [
        "Smart Templatizer for SpotDraft"
      ],
      description: "Developed an intelligent template generation system that won both 3rd prize and crowd favorite award for innovation in document automation.",
      category: "Hackathon"
    },
    {
      title: "HealthRx Hackathon Winner",
      type: "3rd Prize",
      icon: Award,
      achievements: [
        "Healthcare Solution"
      ],
      description: "Created innovative healthcare technology solution at Bajaj Finserv's HealthRx hackathon, securing 3rd place among competitive participants.",
      category: "Hackathon"
    }
  ];

  return (
    <section id="contributions" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent">
            Key Contributions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Notable achievements in product development and competitive programming.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
            {contributions.map((contribution, index) => {
              const IconComponent = contribution.icon;
              return (
                <Card 
                  key={contribution.title}
                  className="group hover:shadow-elegant hover:bg-card-hover transition-all duration-300 border-0 shadow-sm animate-fade-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold">{contribution.title}</h3>
                          <Badge variant="outline" className="text-xs">
                            {contribution.category}
                          </Badge>
                        </div>
                        
                        <div className="text-primary font-medium mb-4">
                          {contribution.type}
                        </div>
                        
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {contribution.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {contribution.achievements.map((achievement) => (
                            <Badge 
                              key={achievement}
                              variant="secondary"
                              className="bg-primary/10 text-primary border-primary/20 hover:scale-105 transition-transform duration-200"
                            >
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contributions;