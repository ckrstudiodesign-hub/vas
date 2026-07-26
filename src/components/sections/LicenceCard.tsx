'use client';

import React, { useState } from 'react';
import { LicenceCardItem } from '@/types';
import { WHATSAPP_URL } from '@/lib/constants';

interface LicenceCardProps {
  item: LicenceCardItem;
  defaultActive?: boolean;
}

export default function LicenceCard({ item, defaultActive = false }: LicenceCardProps) {
  const [active, setActive] = useState(defaultActive);

  const toggleCard = () => {
    if (typeof window !== 'undefined' && window.innerWidth <= 991) {
      setActive(!active);
    }
  };

  return (
    <div className={`licence-card ${active ? 'active' : ''} ${item.isPopular ? 'popular' : ''}`}>
      <div className="licence-card-header" onClick={toggleCard} style={{ cursor: 'pointer' }}>
        {item.isPopular && <span className="popular-badge">Most Popular</span>}
        <h3 className="serif-font" style={{ fontSize: '1.5rem', marginBottom: '8px' }}>
          {item.title}
        </h3>
        {item.subtitle && <p style={{ opacity: 0.8, margin: 0 }}>{item.subtitle}</p>}
        {item.price && (
          <div className="price-tag" style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-gold, #c5a46d)', marginTop: '16px' }}>
            {item.price}
          </div>
        )}
      </div>

      <div className="licence-card-body">
        <ul className="feature-list" style={{ listStyle: 'none', padding: 0, margin: '24px 0' }}>
          {item.features.map((feat, idx) => (
            <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <i className="ph-bold ph-check" style={{ color: '#2e7d32' }}></i>
              <span>{feat}</span>
            </li>
          ))}
        </ul>

        <a
          href={item.ctaHref || WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn ${item.isPopular ? 'btn-primary' : 'btn-secondary'}`}
          style={{ width: '100%', textAlign: 'center', display: 'block', padding: '14px' }}
        >
          {item.ctaText || 'Get Started Now'}
        </a>
      </div>
    </div>
  );
}
