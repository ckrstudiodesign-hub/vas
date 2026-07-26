import React from 'react';
import ContactSection from '@/components/sections/ContactSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mainland Structures & Setup Process | VAS Consultants Dubai',
  description: 'Learn about UAE mainland legal structures including LLC, Branch of a Foreign Company, and Sole Proprietorship, plus our seamless 7-step setup process.',
};

export default function MainlandStructuresPage() {
  return (
    <>
      <section className="about-hero-simple" style={{ background: "url('/images/navbar/LLC%20Company%20Formation.jpg') center/cover no-repeat", position: 'relative', padding: '120px 0 80px', textAlign: 'center' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="hero-headline serif-font" style={{ color: 'white', fontSize: '4rem', margin: 0 }}>
            Mainland Structures
          </h1>
        </div>
      </section>

      <section className="section-padding bg-white" style={{ paddingTop: '80px' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="serif-font" style={{ fontSize: '2.5rem', marginBottom: '24px' }}>
              Strategic Business Structuring
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '32px' }}>
              We can organise the appropriate licence with the required activity in the right structure of your choice. The various structures are:
            </p>

            <div style={{ marginBottom: '48px' }}>
              <div id="llc" style={{ marginBottom: '24px' }}>
                <h4 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>Limited Liability Company (LLC)</h4>
                <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--color-dark-grey)', margin: 0 }}>
                  LLC is the most predominant type of business setup in the UAE Mainland. The minimum number of shareholders required to form an LLC is 2 while the maximum is 50. The company can now be wholly owned by foreign owner. No local sponsorship is required. Majority of the companies registered in the UAE are LLC companies.
                </p>
              </div>

              <div id="branch-company" style={{ marginBottom: '24px' }}>
                <h4 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>Branch of a Foreign Company</h4>
                <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--color-dark-grey)', margin: 0 }}>
                  If you wish to retain the ownership of the company as a branch of your existing company anywhere in the world, the same is permissible. The foreign company, in this case, would be the shareholder of the UAE company. This will enable you to retain the brand and the ownership under the parent company.
                </p>
              </div>

              <div id="sole-proprietorship" style={{ marginBottom: '24px' }}>
                <h4 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>Sole Proprietorship Company</h4>
                <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--color-dark-grey)', margin: 0 }}>
                  These are single owner companies which is owned by a single individual. Primarily used by single owner professional, service industry and consultant.
                </p>
              </div>
            </div>

            <h2 className="serif-font" style={{ fontSize: '2.5rem', marginBottom: '24px' }}>
              The process is simple.
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '24px' }}>
              Once you have identified your business activity, we manage the entire setup for you:
            </p>
            <ul style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '48px', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '12px' }}><strong>Strategic Structuring:</strong> We determine the optimal legal structure for your entity.</li>
              <li style={{ marginBottom: '12px' }}><strong>Documentation &amp; Drafting:</strong> We draft and finalize your Memorandum and Articles of Association, alongside all required corporate documentation.</li>
              <li style={{ marginBottom: '12px' }}><strong>Regulatory Approvals:</strong> We secure all necessary approvals from the relevant authorities.</li>
              <li style={{ marginBottom: '12px' }}><strong>Location Sourcing:</strong> We assist in finding the ideal office, retail, or warehouse space.</li>
              <li style={{ marginBottom: '12px' }}><strong>Corporate Banking:</strong> We guide you through onboarding with the right banking partners for your operational needs.</li>
              <li style={{ marginBottom: '12px' }}><strong>Visa Processing:</strong> We manage comprehensive visa services for you, your family, and your employees.</li>
              <li style={{ marginBottom: '12px' }}><strong>Tax Registration:</strong> We handle your full registration for VAT and Corporate Tax.</li>
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
