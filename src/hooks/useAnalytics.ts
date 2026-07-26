'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { analyticsService } from '@/services/analytics';

export function useGoogleAnalyticsTracker(): void {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname) return;
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
    analyticsService.pageview(url);
  }, [pathname, searchParams]);
}

export function useAnalytics() {
  return {
    trackPageView: (url: string) => analyticsService.pageview(url),
    trackEvent: (action: string, category?: string, label?: string, value?: number) =>
      analyticsService.event({ action, category, label, value }),
  };
}
