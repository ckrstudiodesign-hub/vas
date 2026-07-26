import React from 'react';
import ContactSection from '@/components/sections/ContactSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mainland Activities & Licences | VAS Consultants Dubai',
  description: 'Explore over 2,500 business activities covered under Dubai Economic Department (DED) licences, including professional, commercial, and industrial licences.',
};

export default function MainlandActivitiesPage() {
  return (
    <>
      <section className="about-hero-simple" style={{ background: "url('/images/navbar/LLC%20Company%20Formation.jpg') center/cover no-repeat", position: 'relative', padding: '120px 0 80px', textAlign: 'center' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="hero-headline serif-font" style={{ color: 'white', fontSize: '4rem', margin: 0 }}>
            Mainland Activities &amp; Licences
          </h1>
        </div>
      </section>

      <section className="section-padding bg-white" style={{ paddingTop: '80px' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
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
