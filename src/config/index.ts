import { NavItem } from '@/types';

export interface SiteConfig {
  name: string;
  companyName: string;
  description: string;
  url: string;
  gaMeasurementId: string;
  contact: {
    phone: string;
    email: string;
    location: string;
    whatsappUrl: string;
  };
}

export const siteConfig: SiteConfig = {
  name: 'VAS Corporate Services',
  companyName: 'VAS Consultants',
  description:
    'VAS Corporate Services is your trusted partner for business setup, mainland licensing, freezone formation, offshore companies, and corporate advisory across the UAE.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vasconsultants.ae',
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '',
  contact: {
    phone: '+971 52 104 6611',
    email: 'info@vasconsultants.ae',
    location: 'Dubai, UAE',
    whatsappUrl:
      'https://wa.me/971505645663?text=Hello%20!%20Planning%20to%20start%20a%20business%20in%20Dubai%20%3F',
  },
};

export const SECURITY_CONFIG = {
  csp: [
    "default-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com https://fonts.gstatic.com https://unpkg.com https://cdn.jsdelivr.net https://cdnjs.cloudflare.com https://www.googletagmanager.com https://www.google-analytics.com;",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://unpkg.com https://cdn.jsdelivr.net https://cdnjs.cloudflare.com https://www.googletagmanager.com https://www.google-analytics.com;",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://unpkg.com https://cdn.jsdelivr.net https://cdnjs.cloudflare.com;",
    "font-src 'self' data: https://fonts.gstatic.com https://unpkg.com https://cdn.jsdelivr.net https://cdnjs.cloudflare.com;",
    "img-src 'self' data: https: blob:;",
    "connect-src 'self' https://api.web3forms.com https://unpkg.com https://cdn.jsdelivr.net https://www.google-analytics.com https://region1.google-analytics.com;",
  ].join(' '),
  hsts: 'max-age=31536000; includeSubDomains; preload',
  frameOptions: 'DENY',
  contentTypeOptions: 'nosniff',
  referrerPolicy: 'strict-origin-when-cross-origin',
  permissionsPolicy: 'camera=(), microphone=(), geolocation=()',
  dnsPrefetchControl: 'on',
};
