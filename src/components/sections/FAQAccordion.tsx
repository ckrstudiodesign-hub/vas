'use client';

import React, { useState } from 'react';
import { FAQItem } from '@/types';

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
}

export default function FAQAccordion({ items, title = 'Frequently Asked Questions', subtitle = 'Everything you need to know about setting up your business in Dubai.' }: FAQAccordionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="faq-section section-padding" style={{ backgroundColor: 'var(--color-off-white, #f9f9f9)' }}>
      <div className="container">
        {title && (
          <div className="section-header text-center" style={{ marginBottom: '48px' }}>
            <h2 className="serif-font" style={{ fontSize: '2.5rem', marginBottom: '16px' }}>
              {title}
            </h2>
            {subtitle && <p style={{ color: 'var(--color-dark-grey)', opacity: 0.8, maxWidth: '600px', margin: '0 auto' }}>{subtitle}</p>}
          </div>
        )}

        <div className="faq-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          {items.map((item, idx) => {
            const isOpen = openIdx === idx;
            const id = `faq-item-${idx}`;
            const answerId = `faq-answer-${idx}`;

            return (
              <div key={idx} className={`faq-item ${isOpen ? 'active' : ''}`} style={{ marginBottom: '16px', borderRadius: '12px', background: '#fff', border: '1px solid rgba(0,0,0,0.06)', overflow: 'hidden' }}>
                <button
                  id={id}
                  className={`faq-question ${isOpen ? 'active' : ''}`}
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '24px',
                    background: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontSize: '1.15rem',
                    fontWeight: 600,
                    color: isOpen ? 'var(--color-gold, #c5a46d)' : 'var(--color-navy, #0a1128)',
                  }}
                >
                  <span>{item.question}</span>
                  <i className={`ph ph-caret-down`} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}></i>
                </button>

                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={id}
                  style={{
                    maxHeight: isOpen ? '1000px' : '0',
                    opacity: isOpen ? 1 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease, opacity 0.3s ease',
                    padding: isOpen ? '0 24px 24px' : '0 24px',
                  }}
                >
                  <p style={{ margin: 0, color: 'var(--color-dark-grey)', lineHeight: 1.7, opacity: 0.85 }}>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
