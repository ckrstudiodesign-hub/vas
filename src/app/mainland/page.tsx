import React from 'react';
import ContactSection from '@/components/sections/ContactSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mainland Company Formation in Dubai | VAS Consultants',
  description: 'Setup your Dubai Economic Department (DED) mainland company with 100% foreign ownership, zero trade restrictions, and full regulatory support.',
};

export default function MainlandPage() {
  return (
    <>
      <section className="about-hero-simple" style={{ background: "url('/images/navbar/Mainland%20Company%20Formation.png') center/cover no-repeat", position: 'relative', padding: '120px 0 80px', textAlign: 'center' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="hero-headline serif-font" style={{ color: 'white', fontSize: '4rem', margin: 0 }}>
            Mainland Company Formation
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

            <h2 className="serif-font" style={{ fontSize: '2.5rem', marginBottom: '24px' }}>
              The activities our Mainland licences covers
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '24px' }}>
              You have the benefit of choosing from over 2500 business activities. Whether you are setting up a gym or a grocery store, or you need to start a major import-export company with offices across the globe, they are fully covered under a Dubai Economic Department (DED) Licence. You also have the advantage of bundling different related activities in the same licence, to avoid multiple trade licences. Certain activities would need approval from the relevant authorities/government bodies. We will make all arrangements to assist you to obtain these approvals too. We would be with you from start until completion.
            </p>

            <h3 className="serif-font" style={{ fontSize: '1.8rem', marginBottom: '16px' }}>
              Some of the popular activities covered are:
            </h3>
            <ul style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '48px', paddingLeft: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <li>Trading</li>
              <li>Commodity Trading</li>
              <li>E-Commerce</li>
              <li>Import/Export</li>
              <li>Digital Marketing</li>
              <li>Hospitality</li>
              <li>Manufacturing</li>
              <li>Event Management</li>
              <li>Real Estate Brokerage and Agencies</li>
              <li>Real Estate Development</li>
              <li>Consultancies</li>
              <li>Restaurants, Salons and more...</li>
            </ul>

            <h2 className="serif-font" style={{ fontSize: '2.5rem', marginBottom: '24px' }}>
              Types of Licences
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '32px' }}>
              Whatever is your activity and how you would like to structure your company, the Department of Economic Development has the right type of licence for you.
            </p>

            <div style={{ marginBottom: '48px' }} className="licence-cards-container">
              <div id="professional-licence" className="licence-card">
                <div className="licence-card-header">
                  <h4>Professional Licence</h4>
                  <i className="ph ph-caret-down"></i>
                </div>
                <div className="licence-card-content">
                  <p>A Professional Licence is essential for service-oriented ventures. It covers a broad spectrum of services and strategic consultancies. Whether your focus is financial advisory, digital marketing, IT solutions, or management consulting, this licence empowers you to deliver your professional expertise seamlessly across the region.</p>
                </div>
              </div>

              <div id="commercial-licence" className="licence-card">
                <div className="licence-card-header">
                  <h4>Commercial Licence</h4>
                  <i className="ph ph-caret-down"></i>
                </div>
                <div className="licence-card-content">
                  <p>A Commercial Licence is mandatory for all trading enterprises, facilitating both domestic commerce and international import/export operations. The DED framework covers an exhaustive array of commercial activities, enabling the trade of commodities ranging from precious metals and foodstuff to industrial chemicals and beyond.</p>
                </div>
              </div>

              <div id="industrial-licence" className="licence-card">
                <div className="licence-card-header">
                  <h4>Industrial Licence</h4>
                  <i className="ph ph-caret-down"></i>
                </div>
                <div className="licence-card-content">
                  <p>An Industrial Licence is required for large-scale manufacturing and industrial production. Whether establishing a high-capacity facility for garments or an advanced food processing plant, this licence provides the regulatory foundation necessary to operate substantial manufacturing units within the UAE.</p>
                </div>
              </div>
            </div>

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
