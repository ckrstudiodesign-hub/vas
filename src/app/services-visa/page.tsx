import React from 'react';
import ContactSection from '@/components/sections/ContactSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Visa Services & Golden Visa | VAS Consultants Dubai',
  description: 'Comprehensive residence visas, employee visas, and 10-year UAE Golden Visa procurement and processing services.',
};

export default function ServicesVisaPage() {
  return (
    <>
      <section className="about-hero-simple" style={{ background: "url('/images/about_office.png') center/cover no-repeat", position: 'relative', padding: '120px 0 80px', textAlign: 'center' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="hero-headline serif-font" style={{ color: 'white', fontSize: '4rem', margin: 0 }}>
            Visa Services
          </h1>
        </div>
      </section>

      <section className="section-padding bg-white" style={{ paddingTop: '80px' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="serif-font" style={{ fontSize: '2.5rem', marginBottom: '24px' }}>
              Visa Services
            </h2>

            <h3 className="serif-font" style={{ fontSize: '1.8rem', marginBottom: '16px' }}>
              Residence Visa:
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '48px' }}>
              We organise residence visa for yourself and your dependents. Every expatriate living here in the UAE needs to have a residence visa. We can organise an Investor visa after incorporating your company and obtaining a trade licence. After which, we can assist with residence visas for your dependents.
            </p>

            <h3 className="serif-font" style={{ fontSize: '1.8rem', marginBottom: '16px' }}>
              Employee Visas:
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '48px' }}>
              You may need to employ workforce to manage and run your business. We can organise and process visas for them under your company sponsorship. All regulatory proceses, including obtaining visa, medical, and obtaining Emirates IDs for each of them can be organised.
            </p>

            <h3 className="serif-font" style={{ fontSize: '1.8rem', marginBottom: '16px' }}>
              Golden Visa:
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '24px' }}>
              The UAE&apos;s &apos;Golden visa&apos; is a long-term residence visa which enables foreign talents to live, work or study in the UAE while enjoying exclusive benefits which include:
            </p>
            <ul style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '24px', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '12px' }}>A long-term, renewable residence visa valid for 5 or 10 years</li>
              <li style={{ marginBottom: '12px' }}>The privilege of not needing a sponsor</li>
              <li style={{ marginBottom: '12px' }}>The ability to stay outside the UAE for more than the usual period of six months in order to keep their residence visa valid</li>
              <li style={{ marginBottom: '12px' }}>The ability to sponsor their family members, including spouses and children regardless of their ages</li>
              <li style={{ marginBottom: '12px' }}>The ability to sponsor unlimited number of domestic helpers</li>
              <li style={{ marginBottom: '12px' }}>The permit for family members to stay in the UAE until the end of their permit duration, if the primary holder of the Golden visa passes away.</li>
            </ul>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '24px' }}>
              We can assist you to obtain your Golden Visa, which is a special privilege provided by the Government of UAE.
            </p>
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
