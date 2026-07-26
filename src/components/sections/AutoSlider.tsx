'use client';

import React, { useEffect, useRef } from 'react';

interface AutoSliderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  intervalMs?: number;
}

export default function AutoSlider({ children, className = 'auto-slider', intervalMs = 5000, ...rest }: AutoSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const timer = setInterval(() => {
      let scrollAmount = slider.clientWidth * 0.85;
      if (slider.firstElementChild) {
        const firstChild = slider.firstElementChild as HTMLElement;
        const gap = 30;
        scrollAmount = firstChild.offsetWidth + gap;
      }

      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 20) {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }, intervalMs);

    return () => clearInterval(timer);
  }, [intervalMs]);

  return (
    <div ref={sliderRef} className={className} {...rest}>
      {children}
    </div>
  );
}
