export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'devops' | 'tools';
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

export interface TimelineEntry {
  year: string;
  title: string;
  company: string;
  description: string;
}

export interface Social {
  label: string;
  href: string;
  icon: string; // SVG path or identifier
}
