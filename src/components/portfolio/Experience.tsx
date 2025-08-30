import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "SpotDraft",
      role: "Senior Software Engineer",
      duration: "Oct 2024 - Present • 11 mos",
      description: "Leading software development initiatives and mentoring junior developers. Working on scalable web applications and implementing best practices for code quality and performance.",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB", "AWS"],
      type: "Full-time",
      location: "Bangalore Urban, Karnataka, India",
      roles: [
        {
          title: "Senior Software Engineer",
          period: "Oct 2024 - Present • 11 mos"
        },
        {
          title: "Software Engineer", 
          period: "Jun 2022 - Present • 3 yrs 3 mos"
        },
        {
          title: "Junior Software Engineer",
          period: "May 2021 - Jun 2022 • 1 yr 2 mos"
        }
      ]
    },
    {
      company: "GMETRIxr",
      role: "React Developer Intern",
      duration: "Internship",
      description: "Worked on developing interactive web applications using React. Gained hands-on experience in component-based architecture and modern frontend development practices.",
      technologies: ["React", "JavaScript", "CSS3", "HTML5"],
      type: "Frontend Development"
    },
    {
      company: "Shoopy",
      role: "Flutter Developer Intern", 
      duration: "Internship",
      description: "Developed mobile applications using Flutter framework. Learned cross-platform development and mobile app architecture patterns.",
      technologies: ["Flutter", "Dart", "Android", "Mobile Development"],
      type: "Mobile Development"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey in software development through internships and hands-on projects.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={exp.company}
                className="group hover:shadow-elegant hover:bg-card-hover transition-all duration-300 border-0 shadow-sm animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Building className="w-5 h-5 text-primary" />
                        <h3 className="text-xl font-semibold">{exp.company}</h3>
                        <Badge variant="outline" className="text-xs">
                          {exp.type}
                        </Badge>
                      </div>
                      
                      {exp.roles ? (
                        <div className="mb-4">
                          {exp.location && (
                            <div className="text-sm text-muted-foreground mb-3">
                              {exp.location}
                            </div>
                          )}
                          <div className="space-y-2">
                            {exp.roles.map((role, roleIndex) => (
                              <div key={roleIndex} className="flex items-center gap-2 text-muted-foreground">
                                <Calendar className="w-4 h-4" />
                                <span className="text-sm">{role.title} • {role.period}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{exp.role} • {exp.duration}</span>
                        </div>
                      )}
                      
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {exp.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge 
                            key={tech}
                            variant="secondary"
                            className="bg-primary/10 text-primary border-primary/20 hover:scale-105 transition-transform duration-200"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;