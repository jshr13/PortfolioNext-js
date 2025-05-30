import type { DeveloperInfo, Project, Experience, Skill, EducationItem, Certification } from './types';
import { Briefcase, Code, Cpu, Dribbble, Github, GraduationCap, Linkedin, Mail, MapPin, Palette, Phone, Server, Settings, Smartphone, Star, Zap } from 'lucide-react';

export const developerInfo: DeveloperInfo = {
  name: 'Alex Johnson',
  title: 'Senior Full Stack Developer',
  intro: "Highly skilled and motivated Full Stack Developer with 8+ years of experience in designing, developing, and deploying scalable web applications. Passionate about creating elegant solutions to complex problems and continuously learning new technologies. Proven ability to lead projects and collaborate effectively in agile environments.",
  headshotUrl: 'https://placehold.co/300x300.png',
  email: 'alex.johnson.dev@example.com',
  socialLinks: {
    linkedin: 'https://linkedin.com/in/alexjohnsondev',
    github: 'https://github.com/alexjohnsondev',
    twitter: 'https://twitter.com/alexjohnsondev',
  },
  cvUrl: '/placeholder-cv.pdf', // Link to a placeholder CV
};

export const projects: Project[] = [
  {
    id: 'proj1',
    title: 'EcoTrack: Sustainability Platform',
    description: 'A comprehensive platform for businesses to track and report their environmental impact. Features include data visualization, goal setting, and automated reporting.',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Chart.js', 'Tailwind CSS'],
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'sustainability dashboard',
    liveDemoUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'proj2',
    title: 'ConnectSphere: Social Networking App',
    description: 'A mobile-first social networking application focused on local community engagement. Implemented real-time chat, event management, and content sharing features.',
    technologies: ['React Native', 'Firebase', 'Redux', 'Node.js', 'MongoDB'],
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'social media app',
    liveDemoUrl: '#',
  },
  {
    id: 'proj3',
    title: 'AI-Powered Code Review Assistant',
    description: 'A tool that integrates with Git repositories to provide AI-driven suggestions for code improvements, bug detection, and style consistency.',
    technologies: ['Python', 'Flask', 'Docker', 'OpenAI API', 'React'],
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'ai coding tool',
    githubUrl: '#',
  },
];

export const experiences: Experience[] = [
  {
    id: 'exp1',
    role: 'Senior Full Stack Developer',
    company: 'Innovatech Solutions Inc.',
    period: 'Jan 2020 - Present',
    responsibilities: [
      'Led the development of key product features, from conception to deployment.',
      'Mentored junior developers and conducted code reviews to ensure code quality.',
      'Collaborated with product managers and designers to define project requirements.',
      'Optimized application performance, reducing load times by 20%.',
    ],
    achievements: ['Successfully launched 3 major product versions.', 'Implemented a new microservices architecture.'],
    logoUrl: 'https://placehold.co/50x50.png',
  },
  {
    id: 'exp2',
    role: 'Software Engineer',
    company: 'Tech Startup Co.',
    period: 'Jun 2017 - Dec 2019',
    responsibilities: [
      'Developed and maintained scalable web applications using React and Node.js.',
      'Contributed to the design and implementation of RESTful APIs.',
      'Participated in agile development cycles, including sprint planning and retrospectives.',
    ],
    achievements: ['Key contributor to a platform that acquired 10,000+ users in its first year.'],
    logoUrl: 'https://placehold.co/50x50.png',
  },
];

export const skills: Skill[] = [
  { id: 'skill1', name: 'JavaScript', proficiency: 95, category: 'Languages', icon: Code },
  { id: 'skill2', name: 'TypeScript', proficiency: 90, category: 'Languages', icon: Code },
  { id: 'skill3', name: 'React / Next.js', proficiency: 95, category: 'Frontend', icon: Palette },
  { id: 'skill4', name: 'Node.js / Express', proficiency: 90, category: 'Backend', icon: Server },
  { id: 'skill5', name: 'Python / Django', proficiency: 80, category: 'Backend', icon: Server },
  { id: 'skill6', name: 'SQL (PostgreSQL, MySQL)', proficiency: 85, category: 'Backend', icon: Server },
  { id: 'skill7', name: 'NoSQL (MongoDB, Firebase)', proficiency: 80, category: 'Backend', icon: Server },
  { id: 'skill8', name: 'Docker & Kubernetes', proficiency: 75, category: 'DevOps', icon: Settings },
  { id: 'skill9', name: 'AWS / GCP', proficiency: 70, category: 'DevOps', icon: Zap },
  { id: 'skill10', name: 'Git & CI/CD', proficiency: 90, category: 'Tools', icon: Github },
];

export const education: EducationItem[] = [
  {
    id: 'edu1',
    degree: 'M.S. in Computer Science',
    institution: 'Stanford University',
    period: '2015 - 2017',
    description: 'Specialized in Artificial Intelligence and Software Systems.',
  },
  {
    id: 'edu2',
    degree: 'B.S. in Software Engineering',
    institution: 'University of California, Berkeley',
    period: '2011 - 2015',
    description: 'Graduated with Honors.',
  },
];

export const certifications: Certification[] = [
  {
    id: 'cert1',
    name: 'AWS Certified Solutions Architect - Associate',
    issuingOrganization: 'Amazon Web Services',
    date: 'Issued: Jun 2021',
    credentialUrl: '#',
  },
  {
    id: 'cert2',
    name: 'Certified Kubernetes Application Developer (CKAD)',
    issuingOrganization: 'The Linux Foundation',
    date: 'Issued: Mar 2022',
    credentialUrl: '#',
  },
];