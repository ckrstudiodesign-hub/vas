import React from 'react';
import ContactSection from '@/components/sections/ContactSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Offshore Company Formation in UAE | VAS Consultants',
  description: 'Setup a UAE Offshore company without a trading licence. Ideal for holding equity, profits, real estate assets, and 100% tax-free capital repatriation.',
};

export default function OffshorePage() {
  return (
    <>
      <section className="about-hero-simple" style={{ background: "url('/images/navbar/JAFZA%20Offshore.png') center/cover no-repeat", position: 'relative', padding: '120px 0 80px', textAlign: 'center' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="hero-headline serif-font" style={{ color: 'white', fontSize: '4rem', margin: 0 }}>
            Offshore Companies
          </h1>
        </div>
      </section>

      <section className="section-padding bg-white" style={{ paddingTop: '80px' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="serif-font" style={{ fontSize: '2.5rem', marginBottom: '24px' }}>
              Overview
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '24px' }}>
              Did you know that you can register a company here in the UAE without obtaining a trading licence. Yes. That&apos;s the Offshore company you can register.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '24px' }}>
              UAE is an ideal and lucrative business hub, attracting businesses from across the globe. If you wish to settle down here and invest in the country, you can incorporate an offshore company in any of the Free Zones here in the UAE.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '24px' }}>
              Offshore companies are primarily used as Holding companies, which holds equity and profits of subsidiary trading and manufacturing companies in the Group. This structure is also used by investors for holding real estate assets in the country and overseas. Ideally used by Real estate developers to buy land in an offshore company and develop a project.
            </p>

            <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', margin: '48px 0' }} />

            <h2 className="serif-font" style={{ fontSize: '2.5rem', marginBottom: '24px' }}>
              Why Offshore Company in the UAE
            </h2>

            <ul style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '48px', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '12px' }}><strong>Tax benefits:</strong> The company can avail of all the current tax benefits the country has to offer.</li>
              <li style={{ marginBottom: '12px' }}><strong>Holding/Parent company:</strong> Used to hold assets in the form of companies, real estate, etc.</li>
              <li style={{ marginBottom: '12px' }}><strong>Low start up cost:</strong> Easy and cost effective solution.</li>
              <li style={{ marginBottom: '12px' }}><strong>No need to obtain trade licence</strong> and other approvals/permissions.</li>
              <li style={{ marginBottom: '12px' }}><strong>100% tax free</strong></li>
              <li style={{ marginBottom: '12px' }}><strong>100% repartiation of capital and profits.</strong></li>
              <li style={{ marginBottom: '12px' }}><strong>Widely used</strong> across different business sectors.</li>
              <li style={{ marginBottom: '12px' }}><strong>Bank accounts can be opened</strong> for these companies in the UAE.</li>
            </ul>

            <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', margin: '48px 0' }} />

            <h2 className="serif-font" style={{ fontSize: '2.5rem', marginBottom: '24px' }}>
              All you need to open an Offshore company:
            </h2>

            <ul style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '24px', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '12px' }}>Your Profile</li>
              <li style={{ marginBottom: '12px' }}>Your Business Plan</li>
              <li style={{ marginBottom: '12px' }}>Your Passports and Proof of address.</li>
            </ul>

            <div style={{ marginBottom: '48px', padding: '24px', background: 'var(--color-light-grey)', borderRadius: '12px', borderLeft: '4px solid var(--color-gold)' }}>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--color-dark-grey)', margin: 0 }}>
                And you are ready to go. We could register your Offshore company in <strong>JAFZA Free Zone, Ajman Free Zone or Ras Al Khaimah Free Zone</strong> and assist you with other formalities like a bank account in the bank of your choice.
              </p>
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
