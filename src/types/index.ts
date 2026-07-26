export interface NavLinkItem {
  label: string;
  href: string;
}

export interface NavColumn {
  title?: string;
  links: NavLinkItem[];
}

export interface NavDropdown {
  label: string;
  columns: NavColumn[];
  minWidth?: string;
}

export type NavItem = NavLinkItem | NavDropdown;

export interface FAQItem {
  question: string;
  answer: string;
}

export interface StatItem {
  value: number;
  suffix?: string;
  label: string;
}

export interface ServiceCardItem {
  title: string;
  description: string;
  href: string;
  iconClass?: string;
  badge?: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service?: string;
  message: string;
  _honey?: string;
  botcheck?: boolean;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
}

export interface LicenceCardItem {
  title: string;
  subtitle?: string;
  features: string[];
  price?: string;
  ctaText?: string;
  ctaHref?: string;
  isPopular?: boolean;
}
