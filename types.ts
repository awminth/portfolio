export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface SocialLink {
  platform: 'Phone' | 'Facebook' | 'Instagram' | 'Telegram' | 'Viber' | 'LinkedIn';
  url: string;
  displayText?: string;
}