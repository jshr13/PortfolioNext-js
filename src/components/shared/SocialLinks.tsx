import type React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { DeveloperInfo } from '@/lib/types';

interface SocialLinksProps {
  links: DeveloperInfo['socialLinks'];
  email: string;
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links, email, className }) => {
  return (
    <div className={`flex space-x-3 ${className}`}>
      {links.github && (
        <Button variant="outline" size="icon" asChild className="hover:bg-accent hover:text-accent-foreground transition-colors duration-300">
          <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </a>
        </Button>
      )}
      {links.linkedin && (
        <Button variant="outline" size="icon" asChild className="hover:bg-accent hover:text-accent-foreground transition-colors duration-300">
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
        </Button>
      )}
      {links.twitter && (
        <Button variant="outline" size="icon" asChild className="hover:bg-accent hover:text-accent-foreground transition-colors duration-300">
          <a href={links.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Twitter className="h-5 w-5" />
          </a>
        </Button>
      )}
      {email && (
         <Button variant="outline" size="icon" asChild className="hover:bg-accent hover:text-accent-foreground transition-colors duration-300">
          <a href={`mailto:${email}`} aria-label="Email">
            <Mail className="h-5 w-5" />
          </a>
        </Button>
      )}
    </div>
  );
};

export default SocialLinks;