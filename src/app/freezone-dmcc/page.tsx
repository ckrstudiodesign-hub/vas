import React from 'react';
import ContactSection from '@/components/sections/ContactSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DMCC Company Formation | VAS Consultants Dubai',
  description: 'Setup your company in DMCC (Dubai Multi Commodities Centre) with 100% foreign ownership, zero tax, and cost-effective packages.',
};

export default function FreezoneDmccPage() {
  return (
    <>
      <section className="about-hero-simple" style={{ background: "url('/images/navbar/DMCC%20Dubai.png') center/cover no-repeat", position: 'relative', padding: '120px 0 80px', textAlign: 'center' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="hero-headline serif-font" style={{ color: 'white', fontSize: '4rem', margin: 0 }}>
            DMCC - Dubai Multi Commodities Center
          </h1>
        </div>
      </section>

      <section className="section-padding bg-white" style={{ paddingTop: '80px' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h3 id="dmcc" className="serif-font" style={{ fontSize: '1.8rem', marginBottom: '16px' }}>
              DMCC (Dubai Multi Commodities Centre)
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '24px' }}>
              Headquartered in Dubai, DMCC is the world&apos;s leading business hub and an international centre for trade, commerce and innovation. Won the Local Free Zone of the Year and No 1 Trade Hub in a row for 9 years.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '24px' }}>
              Established in 2002 to establish Dubai as a commodity trading and enterprise gateway to the Middle East and beyond, DMCC has since grown to become one of its most important economic drivers, today accounting for over 11% of all foreign direct investment in the emirate. DMCC is also one of the city&apos;s most dynamic and exciting destinations, home to world-class mixed-use developments Jumeirah Lakes Towers and Uptown Dubai, which together accommodate more than 100,000 working professionals, residents and visitors.
            </p>
            <ul style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '48px', paddingLeft: '20px' }}>
              <li>Allows 100% foreign ownership.</li>
              <li>Absence of income tax.</li>
              <li>No physical presence in the UAE is required to incorporate your company.</li>
              <li>Cost-effective Business Setup Packages</li>
              <li>Fast &amp; easy Freezone company incorporation</li>
              <li>Offers Customized Office Setup Solutions including Flexi Desk, Executive Office</li>
              <li>Consultancy, Service and Trading options</li>
              <li>Full repatriation of company profits and capital</li>
              <li>Ability to incorporate holding companies</li>
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
