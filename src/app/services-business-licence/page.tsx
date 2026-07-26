import React from 'react';
import ContactSection from '@/components/sections/ContactSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business Trade Licence | VAS Consultants Dubai',
  description: 'Expert guidance on UAE new trade licences, renewals, modifications, and cancellations across Mainland DED and Free Zones.',
};

export default function ServicesBusinessLicencePage() {
  return (
    <>
      <section className="about-hero-simple" style={{ background: "url('/images/about_office.png') center/cover no-repeat", position: 'relative', padding: '120px 0 80px', textAlign: 'center' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="hero-headline serif-font" style={{ color: 'white', fontSize: '4rem', margin: 0 }}>
            Business Trade Licence
          </h1>
        </div>
      </section>

      <section className="section-padding bg-white" style={{ paddingTop: '80px' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="serif-font" style={{ fontSize: '2.5rem', marginBottom: '24px' }}>
              Business Trade Licence
            </h2>

            <h3 className="serif-font" style={{ fontSize: '1.8rem', marginBottom: '16px' }}>
              New Trade Licence:
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '24px' }}>
              We will not stop at incorporating your company, we will ensure that we assist you in all approvals/permissions required to obtain a trading licence, which is a requirement to commence business here in the UAE.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '48px' }}>
              Whether it is a Dubai Economic Department (DED) licence or a licence in any of the Free Zones here in the UAE, you can be rest assured that you are in safe hands. We shall help you onboard your business by incorporating the company and obtaining a valid trade licence.
            </p>

            <h3 className="serif-font" style={{ fontSize: '1.8rem', marginBottom: '16px' }}>
              Renewal of Trade Licence.
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '48px' }}>
              A valid licence at all times is very important for seamless conduct of your business.<br />
              We shall actively track the expiries of your trade licence and ensure they are renewed after obtained all relevant approvals/permissions required for the renewal of the licence.
            </p>

            <h3 className="serif-font" style={{ fontSize: '1.8rem', marginBottom: '16px' }}>
              Modification &amp; Cancellation of Trade License
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '24px' }}>
              We are here to support your business as it evolves. Whether you need to amend activities, change sponsors, update your address, or make any other license modifications, we handle all authority approvals seamlessly. Should you need to cancel your license or liquidate your company, we ensure a smooth, hassle-free exit by managing every legal and regulatory requirement from start to finish.
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
