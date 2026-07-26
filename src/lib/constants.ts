import { NavItem } from '@/types';

export const COMPANY_NAME = 'VAS Consultants';
export const SITE_NAME = 'VAS Corporate Services';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vasconsultants.com';
export const CONTACT_PHONE = '+971 52 104 6611';
export const CONTACT_EMAIL = 'info@vasconsultants.ae';
export const CONTACT_LOCATION = 'Dubai, UAE';
export const WHATSAPP_URL = 'https://wa.me/971505645663?text=Hello%20!%20Planning%20to%20start%20a%20business%20in%20Dubai%20%3F';

export const NAVIGATION_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Mainland',
    columns: [
      {
        links: [
          { label: 'Introduction', href: '/mainland-introduction' },
          { label: 'Activities & Licences Type', href: '/mainland-activities' },
          { label: 'Structures', href: '/mainland-structures' },
        ],
      },
    ],
  },
  {
    label: 'Free Zones',
    minWidth: '320px',
    columns: [
      {
        links: [
          { label: 'Introduction', href: '/freezone-introduction' },
          { label: 'Process', href: '/freezone-process' },
        ],
      },
      {
        title: 'Important Free Zones',
        links: [
          { label: 'IFZA – International Free Zone Authority', href: '/freezone-ifza' },
          { label: 'DMCC - Dubai Multi Commodities Center', href: '/freezone-dmcc' },
          { label: 'JAFZA – Jebel Ali Free Zone Authority', href: '/freezone-jafza' },
          { label: 'SHAMS – Sharjah Media City Authority', href: '/freezone-shams' },
          { label: 'RAKEZ – Ras Al Khaimah Economic Zone', href: '/freezone-rakez' },
        ],
      },
    ],
  },
  { label: 'Offshore', href: '/offshore' },
  {
    label: 'Mortgages / Business Finance',
    columns: [
      {
        links: [
          { label: 'Residential Mortgage', href: '/residential-mortgage' },
          { label: 'Commercial Mortgage service', href: '/commercial-mortgage' },
          { label: 'Non-Resident Mortgage', href: '/non-resident-mortgage' },
          { label: 'Balance transfer / Refinance', href: '/balance-transfer-refinance' },
          { label: 'Business Finance', href: '/business-finance' },
        ],
      },
    ],
  },
  {
    label: 'Services',
    columns: [
      {
        links: [
          { label: 'Business Trade Licence', href: '/services-business-licence' },
          { label: 'Visa Services', href: '/services-visa' },
          { label: 'Corporate Bank Account', href: '/services-bank-account' },
          { label: 'Accounting / Tax', href: '/services-accounting' },
          { label: 'Merchant Banking Services', href: '/services-merchant' },
        ],
      },
    ],
  },
];

export const SERVICE_OPTIONS = [
  { value: 'mainland', label: 'Mainland Setup' },
  { value: 'freezone', label: 'Free Zone Setup' },
  { value: 'offshore', label: 'Offshore Setup' },
  { value: 'golden-visa', label: 'Golden Visa' },
  { value: 'mortgage', label: 'Mortgage service' },
  { value: 'business-finance', label: 'Business Finance' },
  { value: 'other', label: 'Other Services' },
];
