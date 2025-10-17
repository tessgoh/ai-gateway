export interface MenuItem {
  label: string;
  href: string;
  external: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  content: string;
  avatar?: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon?: string;
}
