import React from 'react';
import ContactSection from '@/components/sections/ContactSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Zone Setup Process | VAS Consultants Dubai',
  description: 'Understand the simple step-by-step process of setting up FZE, FZC, FZLLC, or Branch offices in UAE Free Zones.',
};

export default function FreezoneProcessPage() {
  return (
    <>
      <section className="about-hero-simple" style={{ background: "url('/images/navbar/Meydan%20Free%20Zone.jpeg') center/cover no-repeat", position: 'relative', padding: '120px 0 80px', textAlign: 'center' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="hero-headline serif-font" style={{ color: 'white', fontSize: '4rem', margin: 0 }}>
            Free Zone Process
          </h1>
        </div>
      </section>

      <section className="section-padding bg-white" style={{ paddingTop: '80px' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="serif-font" style={{ fontSize: '2.5rem', marginBottom: '24px' }}>
              Process
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '24px' }}>
              Once you have identified the activity and the Free Zone you wish to establish your business, you can leave the rest to us.
            </p>
            <div style={{ marginBottom: '48px' }}>
              <div style={{ marginBottom: '24px', padding: '24px', background: 'var(--color-light-grey)', borderRadius: '12px', borderLeft: '4px solid var(--color-gold)' }}>
                <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--color-dark-grey)', margin: 0 }}>
                  If the company is owned by a single shareholder/company, you can register your company as a <strong>FZE</strong>, i.e. Free Zone Establishment.
                </p>
              </div>
              <div style={{ marginBottom: '24px', padding: '24px', background: 'var(--color-light-grey)', borderRadius: '12px', borderLeft: '4px solid var(--color-gold)' }}>
                <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--color-dark-grey)', margin: 0 }}>
                  If the company has more than one individual shareholders/companies, you can register your company as a <strong>FZC or FZLLC</strong> i.e. Free Zone company or Free Zone Limited Liability Company.
                </p>
              </div>
              <div style={{ marginBottom: '24px', padding: '24px', background: 'var(--color-light-grey)', borderRadius: '12px', borderLeft: '4px solid var(--color-gold)' }}>
                <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--color-dark-grey)', margin: 0 }}>
                  If you wish to open a branch or subsidiary of your company based outside the UAE, rather than incorporating a new company, the same can be organised.
                </p>
              </div>
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
