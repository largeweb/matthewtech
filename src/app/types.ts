export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

export interface Skill {
  id: string;
  name: string;
  level: number;
  icon: string;
}

export interface Testimonial {
  id: string;
  author: string;
  content: string;
  avatar: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ThreeAnimation {
  containerRef: React.RefObject<HTMLDivElement>;
}