export interface Personal {
  name: string
  role: string
  tagline: string
  intro: string
  about: string
  highlights: string[]
  email: string
  phone: string
  location: string
  availability: string
  avatar: string
  resumeUrl: string
  metaDescription: string
  twitterHandle: string
  initials: string
  stats: Stat[]
}

export interface Stat {
  label: string
  value: number
  suffix: string
  prefix: string
}

export interface Experience {
  id: string
  role: string
  company: string
  location: string
  duration: string
  current: boolean
  summary: string
  responsibilities: string[]
  achievements: string[]
  technologies: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  image: string
  tech: string[]
  github: string
  demo: string
  featured: boolean
  metrics: { label: string; value: string }[]
}

export interface SkillCategory {
  category: string
  icon: string
  skills: { name: string; level: number }[]
}

export interface TechItem {
  name: string
  category: string
}

export interface Education {
  id: string
  degree: string
  field: string
  institution: string
  location: string
  duration: string
  grade: string
  description: string
}

export interface Certification {
  id: string
  title: string
  issuer: string
  year: string
  credentialId: string
}

export interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  year: string
}

export interface SocialLink {
  id: string
  label: string
  href: string
  icon: string
}
