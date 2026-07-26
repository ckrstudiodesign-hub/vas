'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { StatItem } from '@/types';

interface StatsCounterProps {
  stats?: StatItem[];
}

const DEFAULT_STATS: StatItem[] = [
  { value: 500, suffix: '+', label: 'Companies Setup Successfully' },
  { value: 15, suffix: '+', label: 'Years of Market Experience' },
  { value: 100, suffix: '%', label: 'Client Satisfaction Rate' },
  { value: 48, suffix: ' Hrs', label: 'Average Setup Time' },
];

export default function StatsCounter({ stats = DEFAULT_STATS }: StatsCounterProps) {
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const animateAll = useCallback(() => {
    const speed = 50; // number of steps
    const duration = 1500; // ms
    const stepTime = Math.max(10, duration / speed);

    stats.forEach((stat, idx) => {
      let current = 0;
      const inc = Math.ceil(stat.value / speed);

      const timer = setInterval(() => {
        current += inc;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(timer);
        }
        setCounts((prev) => {
          const next = [...prev];
          next[idx] = current;
          return next;
        });
      }, stepTime);
    });
  }, [stats]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateAll();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [hasAnimated, animateAll]);

  return (
    <section ref={sectionRef} className="statistics section-padding" style={{ background: 'var(--color-navy, #0a1128)', color: '#fff', padding: '80px 0' }}>
      <div className="container">
        <div
          className="stats-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '40px',
            textAlign: 'center',
          }}
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card" style={{ padding: '20px' }}>
              <div className="stat-number serif-font" style={{ fontSize: '3.5rem', fontWeight: 700, color: 'var(--color-gold, #c5a46d)', marginBottom: '8px' }}>
                <span className="counter" data-target={stat.value}>
                  {counts[idx]}
                </span>
                {stat.suffix && <span>{stat.suffix}</span>}
              </div>
              <div className="stat-label" style={{ fontSize: '1.1rem', opacity: 0.9, fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
