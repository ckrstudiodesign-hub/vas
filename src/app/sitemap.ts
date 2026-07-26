import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/services',
    '/mainland',
    '/mainland-introduction',
    '/mainland-activities',
    '/mainland-structures',
    '/freezone',
    '/freezone-introduction',
    '/freezone-process',
    '/freezone-ifza',
    '/freezone-dmcc',
    '/freezone-jafza',
    '/freezone-shams',
    '/freezone-rakez',
    '/offshore',
    '/mortgages',
    '/residential-mortgage',
    '/commercial-mortgage',
    '/non-resident-mortgage',
    '/balance-transfer-refinance',
    '/business-finance',
    '/services-business-licence',
    '/services-visa',
    '/services-bank-account',
    '/services-accounting',
    '/services-merchant',
    '/privacy',
    '/terms',
    '/faq',
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route.includes('introduction') || route === '/about' ? 0.8 : 0.7,
  }));
}
