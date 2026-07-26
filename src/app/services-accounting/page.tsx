import React from 'react';
import ContactSection from '@/components/sections/ContactSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accounting, Bookkeeping & Tax | VAS Consultants Dubai',
  description: 'In-house accountancy, bookkeeping, VAT registration, VAT returns, and UAE Corporate Tax compliance services.',
};

export default function ServicesAccountingPage() {
  return (
    <>
      <section className="about-hero-simple" style={{ background: "url('/images/about_office.png') center/cover no-repeat", position: 'relative', padding: '120px 0 80px', textAlign: 'center' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="hero-headline serif-font" style={{ color: 'white', fontSize: '4rem', margin: 0 }}>
            Accounting / Tax
          </h1>
        </div>
      </section>

      <section className="section-padding bg-white" style={{ paddingTop: '80px' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="serif-font" style={{ fontSize: '2.5rem', marginBottom: '24px' }}>
              Accounting / Tax
            </h2>

            <h3 className="serif-font" style={{ fontSize: '1.8rem', marginBottom: '16px' }}>
              Accounting & Book Keeping:
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '48px' }}>
              Updating and recording your financial transactions is a key requirement of any business. Our inhouse accountancy services can provide you the service of maintaining your books, reconciliation, financial reporting, payroll, VAT reports and audit support for your business. Having a full time accounting team would not be cost effective, when the same can be done efficiently and at a lower cost.
            </p>

            <h3 className="serif-font" style={{ fontSize: '1.8rem', marginBottom: '16px' }}>
              VAT Registration and VAT payments/Returns:
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '24px' }}>
              Value Added Tax (VAT) was introduced in the UAE since January 1 2018. An effective 5% is charged on most goods and services.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '24px' }}>
              We will ensure that you are registered for VAT with the FTA, while ensuring to check your eligibilities, exemptions. We shall complete the registration process and provide you with a TRN (Tax Registration Number) Certificate.<br />
              We shall help you create an online account in the FTA portal and assist in filing quarterly VAT returns and making VAT payments. Refunds, wherever applicable, can be organised too.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '48px' }}>
              We act as your link to ensure that you meet the regulatory requirements of the country seamlessly and effortlessly.
            </p>

            <h3 className="serif-font" style={{ fontSize: '1.8rem', marginBottom: '16px' }}>
              Corporate Tax:
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '24px' }}>
              Corporate Tax, as the name suggest, is levied on the net profit of the business which are resident in the country. This came into effect from June 2023 and companies are liable for tax from 1st January 2024.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '24px' }}>
              We will ensure you are registered for Corporate Tax with the FTA and assist you in payment of your tax obligations and filing necessary returns when applicable.
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
