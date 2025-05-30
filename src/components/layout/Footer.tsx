import { developerInfo } from '@/lib/data';
import SocialLinks from '@/components/shared/SocialLinks';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 bg-secondary">
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="flex justify-center mb-4">
          <SocialLinks links={developerInfo.socialLinks} email={developerInfo.email} />
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} {developerInfo.name}. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;