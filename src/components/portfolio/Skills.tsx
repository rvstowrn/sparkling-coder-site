import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["Angular", "React", "TypeScript", "HTML5", "CSS3", "JavaScript"],
      color: "bg-primary/10 text-primary border-primary/20"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Django", "SQL", "MongoDB", "REST APIs"],
      color: "bg-accent/10 text-accent border-accent/20"
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Cloud Services", "Flutter", "Android Development"],
      color: "bg-secondary text-secondary-foreground border-border"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I work with to create amazing digital experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="group hover:shadow-card hover:bg-card-hover transition-all duration-300 border-0 shadow-sm animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 text-center">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-3 justify-center">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill}
                      variant="secondary"
                      className={`${category.color} hover:scale-105 transition-transform duration-200 px-3 py-1 text-sm font-medium`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;