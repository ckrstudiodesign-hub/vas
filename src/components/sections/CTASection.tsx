import React from 'react';
import { WHATSAPP_URL } from '@/lib/constants';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTASection({
  title = 'Ready to Start Your Business Journey?',
  subtitle = "Let's build your future together.",
  buttonText = 'Talk To Advisor',
  buttonHref = WHATSAPP_URL,
}: CTASectionProps) {
  return (
    <section id="contact-cta" className="cta-section" style={{ background: 'linear-gradient(135deg, var(--color-charcoal) 0%, #2a2a2a 100%)', padding: '60px 0' }}>
      <div className="container cta-container">
        <div
          className="glass-card-hover"
          style={{
            padding: '40px',
            borderRadius: '16px',
            textAlign: 'center',
            maxWidth: '600px',
            margin: '0 auto',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <h2 className="serif-font" style={{ color: 'white', fontSize: '1.8rem', marginBottom: '12px' }}>
            {title}
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1rem', marginBottom: '24px' }}>{subtitle}</p>
          <div className="cta-buttons" style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
            <a
              href={buttonHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ color: 'var(--color-white)', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.3)' }}
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
