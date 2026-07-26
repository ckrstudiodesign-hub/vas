import React from 'react';
import ContactSection from '@/components/sections/ContactSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mainland Introduction & DED Licence | VAS Consultants Dubai',
  description: 'Learn about the advantages of a Dubai Economic Department (DED) licence, including 100% foreign ownership and zero trade restrictions.',
};

export default function MainlandIntroductionPage() {
  return (
    <>
      <section className="about-hero-simple" style={{ background: "url('/images/navbar/Mainland%20Company%20Formation.png') center/cover no-repeat", position: 'relative', padding: '120px 0 80px', textAlign: 'center' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="hero-headline serif-font" style={{ color: 'white', fontSize: '4rem', margin: 0 }}>
            Mainland Introduction
          </h1>
        </div>
      </section>

      <section className="section-padding bg-white" style={{ paddingTop: '80px' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="serif-font" style={{ fontSize: '2.5rem', marginBottom: '24px' }}>
              What is a Dubai Economic Department (DED) Licence?
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '48px' }}>
              A mainland company is authorized by the Dubai Economic Department (DED) and permits business operations across mainland Dubai and the broader UAE. The UAE consists of seven emirates including Abu Dhabi, Dubai, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah and Fujairah. Each emirate maintains its own Department of Economic Development. You benefit from the flexibility of obtaining a DED licence in any of these jurisdictions.
            </p>

            <h2 className="serif-font" style={{ fontSize: '2.5rem', marginBottom: '24px' }}>
              Why would you obtain a DED Licence?
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '24px' }}>
              Amongst the many benefits of obtaining a DED licence, the most important one is the ability to have 100% foreign ownership, which was recently introduced by the Government.
            </p>
            <ul style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '48px', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '12px' }}>Choice of location of your office and no trade restrictions.</li>
              <li style={{ marginBottom: '12px' }}>No minimum or fixed share capital required.</li>
              <li style={{ marginBottom: '12px' }}>Advantage of access to government contracts and business.</li>
              <li style={{ marginBottom: '12px' }}>Advantage to obtain and bid government projects.</li>
              <li style={{ marginBottom: '12px' }}>100% ownership for a host of activities.</li>
              <li style={{ marginBottom: '12px' }}>Preferential treatment for opening bank accounts in the UAE.</li>
              <li style={{ marginBottom: '12px' }}>Easy processing of visa for employment.</li>
              <li style={{ marginBottom: '12px' }}>Can trade domestically as well as import/export.</li>
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
