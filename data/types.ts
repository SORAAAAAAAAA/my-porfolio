// Experience interface
export interface Experience {
  title: string
  company: string
  period: string
  current: boolean
}

// Project interface
export interface Project {
  title: string
  description: string
  url: string
}

// Certification interface
export interface Certification {
  title: string
  issuer: string
}

// Tech stack interface
export interface TechStack {
  languages: string[]
  frontend: string[]
  backend: string[]
  databasesAndTools: string[]
  aiAndAutomation: string[]
}
