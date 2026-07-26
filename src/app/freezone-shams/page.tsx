import React from 'react';
import ContactSection from '@/components/sections/ContactSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SHAMS Company Formation | VAS Consultants Dubai',
  description: 'Setup your company in SHAMS (Sharjah Media City) with highly competitive setup fees, 100% ownership, and specialized media & creative benefits.',
};

export default function FreezoneShamsPage() {
  return (
    <>
      <section className="about-hero-simple" style={{ background: "url('/images/navbar/SHAMS – Sharjah Media City Authority.jpg') center/cover no-repeat", position: 'relative', padding: '120px 0 80px', textAlign: 'center' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="hero-headline serif-font" style={{ color: 'white', fontSize: '4rem', margin: 0 }}>
            SHAMS – Sharjah Media City Authority
          </h1>
        </div>
      </section>

      <section className="section-padding bg-white" style={{ paddingTop: '80px' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h3 id="shams" className="serif-font" style={{ fontSize: '1.8rem', marginBottom: '16px' }}>
              SHAMS (Sharjah Media City)
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '24px' }}>
              Established in 2017, is located just five minutes from Sharjah International Airport and 15 minutes from Dubai International Airport. It is formed to assist and facilitate the growth of the Media and Creative business. Sharjah Media City issues licences for consultancy, trading, service and manufacturing sector. It is home to over 300 business activities, covering everything all segment of business.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '12px' }}><strong>Why Shams:</strong></p>
            <ul style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '48px', paddingLeft: '20px' }}>
              <li>100% ownership allowed.</li>
              <li>Highly competitive company set up fees.</li>
              <li>100% repatriation of capital/profits.</li>
              <li>Specialised benefits for Media and Creativity businesses.</li>
              <li>Easy set up process</li>
              <li>Flexi offices and desk space available.</li>
              <li>Range of business activities covered.</li>
              <li>Ideal location – located between Sharjah and Dubai airport.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="cta-section" style={{ background: 'linear-gradient(135deg, var(--color-charcoal) 0%, #2a2a2a 100%)', padding: '60px 0' }}>
        <div className="container cta-container">
          <div className="glass-card-hover" style={{ padding: '40px', borderRadius: '16px', textAlign: 'center', maxWidth: '600px', margin: '0 auto', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <h2 className="serif-font" style={{ color: 'white', fontSize: '1.8rem', marginBottom: '12px' }}>
              Ready to Start Your Business Journey?
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1rem', marginBottom: '24px' }}>Let&apos;s build your future together.</p>
            <div className="cta-buttons" style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
              <a href="https://wa.me/971505645663" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ color: 'var(--color-white)', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.3)' }}>
                Talk To Advisor
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
