import { education, certifications } from '@/lib/data';
import SectionTitle from '@/components/shared/SectionTitle';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionTitle title="Education & Certifications" subtitle="My academic background and professional qualifications." />
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center">
              <GraduationCap className="h-7 w-7 mr-3 text-accent" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu) => (
                <Card key={edu.id} className="shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg">
                  <CardHeader>
                    <CardTitle className="!text-lg font-semibold !text-primary">{edu.degree}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      {edu.institution} &bull; {edu.period}
                    </CardDescription>
                  </CardHeader>
                  {edu.description && (
                    <CardContent>
                      <p className="text-sm text-foreground">{edu.description}</p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center">
              <Award className="h-7 w-7 mr-3 text-accent" />
              Certifications
            </h3>
            <div className="space-y-6">
              {certifications.map((cert) => (
                <Card key={cert.id} className="shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg">
                  <CardHeader>
                    <CardTitle className="!text-lg font-semibold !text-primary">{cert.name}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      {cert.issuingOrganization} &bull; {cert.date}
                    </CardDescription>
                  </CardHeader>
                  {cert.credentialUrl && cert.credentialUrl !== '#' && (
                     <CardContent>
                       <Button variant="link" asChild className="p-0 h-auto text-accent hover:text-accent/80">
                         <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                           View Credential <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                         </a>
                       </Button>
                     </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;