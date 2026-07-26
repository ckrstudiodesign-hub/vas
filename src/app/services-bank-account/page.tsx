import React from 'react';
import ContactSection from '@/components/sections/ContactSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corporate Banking Services | VAS Consultants Dubai',
  description: 'Streamlined corporate and personal bank account opening with leading UAE financial institutions.',
};

export default function ServicesBankAccountPage() {
  return (
    <>
      <section className="about-hero-simple" style={{ background: "url('/images/about_office.png') center/cover no-repeat", position: 'relative', padding: '120px 0 80px', textAlign: 'center' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="hero-headline serif-font" style={{ color: 'white', fontSize: '4rem', margin: 0 }}>
            Corporate Banking Services
          </h1>
        </div>
      </section>

      <section className="section-padding bg-white" style={{ paddingTop: '80px' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="serif-font" style={{ fontSize: '2.5rem', marginBottom: '24px' }}>
              Corporate Banking Services
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '24px' }}>
              Once your company is registered and your trade license is issued, we guide you through opening a bank account with leading UAE financial institutions.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '48px' }}>
              Navigating banking options to find the right fit for your business size and industry can be challenging. We streamline this process, handling the complexities to ensure a seamless onboarding experience with the ideal banking partner. Beyond your corporate accounts, we also assist with securing personal bank accounts for you and your employees.
            </p>

            <h3 className="serif-font" style={{ fontSize: '1.8rem', marginBottom: '16px' }}>
              Our process is simple.
            </h3>
            <ul style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '24px', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '12px' }}>We assess your profile – profile of shareholder, line of business, turnover, suppliers, operating countries, customers, banking requirements, etc. and then advice the right account with the right banking partner.</li>
              <li style={{ marginBottom: '12px' }}>We coordinate with the Bank and ensure the entire process if complete. We can onboard the relationship both in person and online.</li>
              <li style={{ marginBottom: '12px' }}>Provide necessary documentation to the bank. We shall coordinate on your behalf and provide all documents required for opening the account, such as Company Legal documents (Trade Licence, Memorandum and Articles of Association, etc.), Profile of the company and shareholders, Bank statements, etc.</li>
              <li style={{ marginBottom: '12px' }}>We will coordinate with the Bank and ensure seamless onboarding of your business bank account</li>
              <li style={{ marginBottom: '12px' }}>We will ensure opening of your Personal account and the accounts of your employees, wherever required.</li>
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
