
export interface Project {
  id: string;
  title: string;
  problem: string;
  stack: string[];
  role: string;
  outcome: string;
  image?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  isCurrent?: boolean;
}

export interface Skill {
  name: string;
  level: number;
  description: string;
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}

export interface Education {
  degree: string;
  school: string;
}
