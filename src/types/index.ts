export interface Portfolio {
  id: string
  title: string
  category: "python" | "web" | "rails"
  description: string
  role: string
  technologies: string[]
  thumbnail: string
  images: string[]
  github_url?: string
  demo_url?: string
  featured?: boolean
}

export interface Profile {
  bio: string
  skills: {
    category: string
    items: string[]
  }[]
  experience: string[]
  social: {
    x?: string
    qiita?: string
    github?: string
  }
}