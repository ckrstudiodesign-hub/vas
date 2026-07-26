import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Script from 'next/script';
import '@/styles/globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppWidget from '@/components/ui/WhatsAppWidget';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Premium Business Setup in Dubai, UAE`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'VAS Corporate Services is your trusted partner for business setup, mainland licensing, freezone formation, offshore companies, and corporate advisory across the UAE.',
  keywords: [
    'business setup dubai',
    'uae company formation',
    'mainland trade licence',
    'free zone setup uae',
    'corporate services dubai',
    'vas consultants',
    'dubai visa services',
    'corporate bank account uae',
  ],
  authors: [{ name: 'VAS Corporate Services' }],
  creator: 'VAS Corporate Services',
  publisher: 'VAS Corporate Services',
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: SITE_URL,
    title: `${SITE_NAME} | Premium Business Setup in Dubai`,
    description:
      'Seamlessly establish and scale your business operations across the UAE with expert structuring, licensing, and corporate solutions.',
    siteName: SITE_NAME,
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} Logo`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Premium Business Setup in Dubai`,
    description:
      'Seamlessly establish and scale your business operations across the UAE with expert structuring, licensing, and corporate solutions.',
    images: ['/images/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/index.css"
        />
        <script src="https://unpkg.com/@phosphor-icons/web@2.1.1"></script>
      </head>
      <body style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}>
        <GoogleAnalytics />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
