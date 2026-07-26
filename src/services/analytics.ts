import { siteConfig } from '@/config';

type GTagEvent = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
  [key: string]: unknown;
};

export const analyticsService = {
  pageview(url: string): void {
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: unknown }).gtag && siteConfig.gaMeasurementId) {
      (window as unknown as { gtag: (command: string, id: string, config: unknown) => void }).gtag(
        'config',
        siteConfig.gaMeasurementId,
        {
          page_path: url,
        }
      );
    }
  },

  event({ action, category, label, value, ...rest }: GTagEvent): void {
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: unknown }).gtag) {
      (window as unknown as { gtag: (command: string, action: string, config: unknown) => void }).gtag(
        'event',
        action,
        {
          event_category: category,
          event_label: label,
          value: value,
          ...rest,
        }
      );
    }
  },
};
