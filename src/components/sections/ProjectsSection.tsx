import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { projects } from '@/lib/data';
import SectionTitle from '@/components/shared/SectionTitle';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <SectionTitle title="Featured Projects" subtitle="A selection of my recent work and personal projects." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
              <CardHeader className="p-0">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-48"
                  data-ai-hint={project.dataAiHint || "tech project"}
                />
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <CardTitle className="mb-2">
                  <h3 className="!text-xl font-semibold !text-primary">{project.title}</h3>
                </CardTitle>
                <CardDescription className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </CardDescription>
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-foreground mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs bg-accent/20 text-accent-foreground hover:bg-accent/30">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 border-t border-border/40">
                <div className="flex space-x-3">
                  {project.liveDemoUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> View Code
                      </a>
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;