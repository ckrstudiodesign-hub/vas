import React from 'react';
import ContactSection from '@/components/sections/ContactSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JAFZA Company Formation | VAS Consultants Dubai',
  description: 'Setup your company in JAFZA (Jebel Ali Free Zone Authority) with 100% ownership, zero corporate tax for 50 years, and world-class logistics facilities.',
};

export default function FreezoneJafzaPage() {
  return (
    <>
      <section className="about-hero-simple" style={{ background: "url('/images/navbar/JAFZA%20(Jebel%20Ali).jpeg') center/cover no-repeat", position: 'relative', padding: '120px 0 80px', textAlign: 'center' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="hero-headline serif-font" style={{ color: 'white', fontSize: '4rem', margin: 0 }}>
            JAFZA – Jebel Ali Free Zone Authority
          </h1>
        </div>
      </section>

      <section className="section-padding bg-white" style={{ paddingTop: '80px' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h3 id="jafza" className="serif-font" style={{ fontSize: '1.8rem', marginBottom: '16px' }}>
              JAFZA (Jebel Ali Free Zone Authority)
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '24px' }}>
              Jebel Ali Free Zone (Jafza) is the flagship free zone of DP World. The free zone has evolved into a trade catalyst and a smart business community that offers unprecedented growth opportunities and market access.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '24px' }}>
              It started in 1985 with just 19 companies and grew to over 10,000 companies which include more than 100 Fortune Global 500 companies. It is proud to have a dynamic base for thousands of businesses from 150+ countries, providing 130,000+ jobs and attracting 23.9% of Dubai&apos;s foreign direct investments.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '12px' }}><strong>Why JAFZA:</strong></p>
            <ul style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '48px', paddingLeft: '20px' }}>
              <li>100% ownership.</li>
              <li>0% corporate tax for 50 years with renewal concession.</li>
              <li>No restrictions on capital repatriation.</li>
              <li>Centrally located.</li>
              <li>0% import or re-export restrictions.</li>
              <li>No restriction on foreign employees.</li>
              <li>0% personal income tax.</li>
              <li>Ability to mortgage premises.</li>
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
