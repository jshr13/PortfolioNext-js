import type React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  id?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, className, id }) => {
  return (
    <div className={`mb-12 text-center ${className}`} id={id}>
      <h2 className="text-3xl md:text-4xl font-bold !text-primary mb-3">{title}</h2>
      {subtitle && <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;