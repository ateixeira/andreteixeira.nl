export interface SmallSessionItem {
  icon: string;
  iconType: string;
  value: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  place: string;
  contact: string;
  phone: string;
  period: [string, string?];
  tags: string[];
  value: string;
  icon: string;
}

export interface SkillItem {
  skill: string;
  score: number;
}

export interface EducationItem {
  icon: string;
  iconType?: string;
  title: string;
  description?: string;
  date: string;
}

export interface SeedData {
  aboutme?: string;
  contact?: SmallSessionItem[];
  social?: SmallSessionItem[];
  experience?: ExperienceItem[];
  skills?: SkillItem[];
  education?: EducationItem[];
}
