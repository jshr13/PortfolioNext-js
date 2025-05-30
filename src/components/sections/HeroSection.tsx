import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { developerInfo } from '@/lib/data';
import SocialLinks from '@/components/shared/SocialLinks';
import { Download, ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Image
              src={developerInfo.headshotUrl}
              alt={developerInfo.name}
              width={200}
              height={200}
              className="rounded-full mb-6 shadow-lg border-4 border-primary"
              data-ai-hint="professional headshot"
              priority
            />
            <h1 className="!text-4xl md:!text-5xl font-bold mb-2 !text-primary">
              {developerInfo.name}
            </h1>
            <p className="text-xl text-accent font-medium mb-4">{developerInfo.title}</p>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0">{developerInfo.intro}</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href="#contact">
                  Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              {developerInfo.cvUrl && (
                <Button variant="outline" size="lg" asChild>
                  <a href={developerInfo.cvUrl} target="_blank" rel="noopener noreferrer">
                    Download CV <Download className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              )}
            </div>
            <SocialLinks links={developerInfo.socialLinks} email={developerInfo.email} className="justify-center md:justify-start"/>
          </div>
          <div className="hidden md:block relative group">
             <Image
              src="https://placehold.co/600x450.png"
              alt="Abstract representation of code or technology"
              width={600}
              height={450}
              className="rounded-lg shadow-xl object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              data-ai-hint="abstract technology"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-lg opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;