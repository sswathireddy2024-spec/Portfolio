
export interface Experience {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  tech: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Education {
  degree: string;
  school: string;
  date: string;
  location: string;
}

export interface ResumeData {
  name: string;
  title: string;
  email: string;
  linkedIn: string;
  mobile: string;
  location: string;
  summary: string;
  skills: SkillCategory[];
  experience: Experience[];
  education: Education[];
  certifications: string[];
}
