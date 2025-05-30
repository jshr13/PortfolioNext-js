import { skills } from '@/lib/data';
import SectionTitle from '@/components/shared/SectionTitle';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cpu } from 'lucide-react'; // Default icon

const SkillsSection: React.FC = () => {
  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section id="skills" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <SectionTitle title="Technical Skills" subtitle="A snapshot of my technical proficiencies and tools I work with." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map(category => (
            <Card key={category} className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Cpu className="h-6 w-6 mr-2 text-accent" /> {/* Generic icon, can be customized per category if needed */}
                  <h3 className="!text-xl font-semibold !text-primary">{category}</h3>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.filter(skill => skill.category === category).map(skill => (
                  <div key={skill.id}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-foreground flex items-center">
                        {skill.icon && <skill.icon className="h-4 w-4 mr-2 text-muted-foreground" />}
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground">{skill.proficiency}%</span>
                    </div>
                    <Progress value={skill.proficiency} aria-label={`${skill.name} proficiency ${skill.proficiency}%`} className="h-2 [&>div]:bg-accent" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;