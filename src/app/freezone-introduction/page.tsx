import React from 'react';
import ContactSection from '@/components/sections/ContactSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Zone Introduction | VAS Consultants Dubai',
  description: 'Introduction to UAE Free Trade Zones, offering 100% foreign ownership, zero tax, and seamless business setup.',
};

export default function FreezoneIntroductionPage() {
  return (
    <>
      <section className="about-hero-simple" style={{ background: "url('/images/navbar/Meydan%20Free%20Zone.jpeg') center/cover no-repeat", position: 'relative', padding: '120px 0 80px', textAlign: 'center' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="hero-headline serif-font" style={{ color: 'white', fontSize: '4rem', margin: 0 }}>
            Free Zone Introduction
          </h1>
        </div>
      </section>

      <section className="section-padding bg-white" style={{ paddingTop: '80px' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="serif-font" style={{ fontSize: '2.5rem', marginBottom: '24px' }}>
              Introduction
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '24px' }}>
              Free Zones are specialized economic designated areas located across every emirate in the UAE. Many are tailored to specific industries—such as media, tech, aviation, or commodities—offering dedicated facilities and services. With over 50 Free Zones available, the UAE provides an ideal ecosystem for international investors.
            </p>

            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '24px' }}>
              These Free Trade Zones offer a variety of advantages. Prominent among them are:
            </p>
            <ul style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '48px', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '12px' }}>100% Foreign Ownership. You retain full ownership.</li>
              <li style={{ marginBottom: '12px' }}>Repatriation of Capital and Profits without any restrictions.</li>
              <li style={{ marginBottom: '12px' }}>Name the activity, the same is covered under Free Zone regulations.</li>
              <li style={{ marginBottom: '12px' }}>Professional set up.</li>
              <li style={{ marginBottom: '12px' }}>Logistic facilties.</li>
              <li style={{ marginBottom: '12px' }}>Provision of offices, factories, warehouses, as per your requirements.</li>
              <li style={{ marginBottom: '12px' }}>Provision of Flexi desk for start ups - No requirement of physical office.</li>
              <li style={{ marginBottom: '12px' }}>Flexibility to operate outside the Free Zone premises.</li>
              <li style={{ marginBottom: '12px' }}>No restrictions on currencies.</li>
              <li style={{ marginBottom: '12px' }}>Corporate and Personal Tax exemptions.</li>
              <li style={{ marginBottom: '12px' }}>Specialised Free Zones for certain businesses.</li>
              <li style={{ marginBottom: '12px' }}>Efficient labour and immigration requirements.</li>
              <li style={{ marginBottom: '12px' }}>A one-stop-shop approach for all your legal and regulatory requirements, including Trade Licences, Approvals, Labour, Immigration, Taxation, and more.</li>
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
