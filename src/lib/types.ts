import type { LucideIcon } from 'lucide-react';

export interface DeveloperInfo {
  name: string;
  title: string;
  intro: string;
  headshotUrl: string;
  email: string;
  socialLinks: {
    linkedin: string;
    github: string;
    twitter?: string;
  };
  cvUrl?: string;
}

export interface Project {
  id: string;
  title:string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveDemoUrl?: string;
  githubUrl?: string;
  dataAiHint?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
  achievements?: string[];
  logoUrl?: string; // Optional company logo
}

export interface Skill {
  id: string;
  name: string;
  proficiency: number; // 0-100
  category: 'Frontend' | 'Backend' | 'DevOps' | 'Tools' | 'Languages' | 'Other';
  icon?: LucideIcon; // Optional: Lucide icon component
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuingOrganization: string;
  date: string;
  credentialUrl?: string;
}