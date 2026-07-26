import React from 'react';
import Link from 'next/link';
import ContactSection from '@/components/sections/ContactSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgages & Business Finance | VAS Consultants Dubai',
  description: 'Specialised mortgage financing and business working capital solutions across Dubai and the UAE.',
};

export default function ServicesMortgagesPage() {
  return (
    <>
      <section className="about-hero-simple" style={{ background: "url('/images/about_office.png') center/cover no-repeat", position: 'relative', padding: '120px 0 80px', textAlign: 'center' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="hero-headline serif-font" style={{ color: 'white', fontSize: '4rem', margin: 0 }}>
            Mortgages &amp; Business Finance
          </h1>
        </div>
      </section>

      <section className="section-padding bg-white" style={{ paddingTop: '80px' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="serif-font" style={{ fontSize: '2.5rem', marginBottom: '24px' }}>
              Mortgages &amp; Business Finance
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '32px' }}>
              Whether you are buying an apartment/villa for your dream home or investing in an office or a factory/warehouse, we specialise in providing tailored solutions to help you secure the appropriate finance.
            </p>

            <div className="licence-cards-container" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px', marginBottom: '48px' }}>
              <Link href="/residential-mortgage" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="licence-card" style={{ padding: '24px', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '12px', transition: 'transform 0.3s ease' }}>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '8px', color: 'var(--color-charcoal)' }}>Residential Mortgage</h4>
                  <p style={{ fontSize: '1rem', color: 'var(--color-dark-grey)', margin: 0 }}>Tailored solutions to help you secure the financing you need for your dream home in the UAE.</p>
                </div>
              </Link>

              <Link href="/commercial-mortgage" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="licence-card" style={{ padding: '24px', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '12px', transition: 'transform 0.3s ease' }}>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '8px', color: 'var(--color-charcoal)' }}>Commercial Mortgage</h4>
                  <p style={{ fontSize: '1rem', color: 'var(--color-dark-grey)', margin: 0 }}>Expert guidance for purchasing office space, retail outlets, or industrial properties.</p>
                </div>
              </Link>

              <Link href="/non-resident-mortgage" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="licence-card" style={{ padding: '24px', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '12px', transition: 'transform 0.3s ease' }}>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '8px', color: 'var(--color-charcoal)' }}>Non-Resident Mortgage</h4>
                  <p style={{ fontSize: '1rem', color: 'var(--color-dark-grey)', margin: 0 }}>Seamless and stress-free financing options tailored specifically for non-residents.</p>
                </div>
              </Link>

              <Link href="/balance-transfer-refinance" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="licence-card" style={{ padding: '24px', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '12px', transition: 'transform 0.3s ease' }}>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '8px', color: 'var(--color-charcoal)' }}>Balance Transfer / Refinance</h4>
                  <p style={{ fontSize: '1rem', color: 'var(--color-dark-grey)', margin: 0 }}>Guidance to transfer your mortgage to maximize resources and reduce your cost outlay.</p>
                </div>
              </Link>

              <Link href="/business-finance" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="licence-card" style={{ padding: '24px', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '12px', transition: 'transform 0.3s ease' }}>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '8px', color: 'var(--color-charcoal)' }}>Business Finance</h4>
                  <p style={{ fontSize: '1rem', color: 'var(--color-dark-grey)', margin: 0 }}>Working capital and short-term funding solutions to support your growing business.</p>
                </div>
              </Link>
            </div>
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
