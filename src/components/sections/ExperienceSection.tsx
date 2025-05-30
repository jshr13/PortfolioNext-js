import { experiences } from '@/lib/data';
import SectionTitle from '@/components/shared/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, CheckCircle } from 'lucide-react';
import Image from 'next/image';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionTitle title="Work Experience" subtitle="My professional journey and key contributions." />
        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-border/70 md:before:mx-auto md:before:ml-0">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative flex items-start md:items-center md:space-x-8 group">
              <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md ring-4 ring-background">
                <Briefcase className="h-5 w-5" />
              </div>
              <Card className={`w-full shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg ${index % 2 === 0 ? 'md:ml-0' : 'md:mr-0 md:text-right'}`}>
                <CardHeader className="pb-3">
                  <div className={`flex items-center gap-3 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                    {exp.logoUrl && (
                       <Image src={exp.logoUrl} alt={`${exp.company} logo`} width={40} height={40} className="rounded-sm" data-ai-hint="company logo"/>
                    )}
                    <div>
                      <CardTitle className="!text-xl font-semibold !text-primary">{exp.role}</CardTitle>
                      <p className="text-sm text-accent">{exp.company} | {exp.period}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className={`space-y-2 text-sm text-muted-foreground ${index % 2 !== 0 ? 'md:text-right' : ''}`}>
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start">
                         {index % 2 === 0 && <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-accent flex-shrink-0" />}
                        <span>{resp}</span>
                        {index % 2 !== 0 && <CheckCircle className="h-4 w-4 ml-2 mt-0.5 text-accent flex-shrink-0" />}
                      </li>
                    ))}
                  </ul>
                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="mt-3">
                      <h4 className="text-xs font-semibold text-foreground mb-1">Key Achievements:</h4>
                      <ul className={`space-y-1 text-sm text-muted-foreground ${index % 2 !== 0 ? 'md:text-right' : ''}`}>
                        {exp.achievements.map((ach, i) => (
                          <li key={i} className="flex items-start">
                            {index % 2 === 0 && <Star className="h-4 w-4 mr-2 mt-0.5 text-yellow-500 flex-shrink-0" />}
                            <span>{ach}</span>
                            {index % 2 !== 0 && <Star className="h-4 w-4 ml-2 mt-0.5 text-yellow-500 flex-shrink-0" />}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;