'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CONTACT_PHONE, CONTACT_EMAIL, CONTACT_LOCATION } from '@/lib/constants';

export default function Footer() {
  const [activeCols, setActiveCols] = useState<Record<string, boolean>>({});

  const toggleCol = (colId: string) => {
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      setActiveCols((prev) => ({ ...prev, [colId]: !prev[colId] }));
    }
  };

  return (
    <footer className="light-footer">
      <div className="container footer-top-grid">
        <div className="footer-col brand-col">
          <div className="footer-logo-stacked" style={{ marginBottom: '32px', display: 'flex', alignItems: 'center' }}>
            <img src="/images/logo.png" alt="VAS Consultants" className="remove-bg-white" style={{ height: '72px', opacity: 0.8 }} loading="lazy" />
            <div className="logo-text">
              <span style={{ opacity: 0.8 }}>Corporate</span>
              <span style={{ opacity: 0.8 }}>Services</span>
            </div>
          </div>
          <p style={{ marginTop: '24px', color: 'var(--color-light-grey)', opacity: 0.8, fontSize: '1rem', lineHeight: 1.7, maxWidth: '300px' }}>
            Your trusted partner for business setup and corporate services across the UAE.
          </p>
        </div>

        <div className={`footer-col links-col ${activeCols['quick-links'] ? 'active' : ''}`}>
          <h4 onClick={() => toggleCol('quick-links')} style={{ cursor: 'pointer' }}>
            Quick links
          </h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/#contact">Contact us</Link></li>
          </ul>
        </div>

        <div className={`footer-col links-col ${activeCols['our-services'] ? 'active' : ''}`}>
          <h4 onClick={() => toggleCol('our-services')} style={{ cursor: 'pointer' }}>
            Our services
          </h4>
          <ul>
            <li><Link href="/mainland">UAE Mainland</Link></li>
            <li><Link href="/freezone">UAE Freezone</Link></li>
            <li><Link href="/offshore">UAE Offshore</Link></li>
            <li><Link href="/services">Other Services</Link></li>
          </ul>
        </div>

        <div className={`footer-col contact-col ${activeCols['contact-us'] ? 'active' : ''}`}>
          <h4 onClick={() => toggleCol('contact-us')} style={{ cursor: 'pointer' }}>
            Contact us
          </h4>
          <ul style={{ color: 'var(--color-light-grey)', opacity: 0.8 }}>
            <li>
              <i className="ph-fill ph-phone" style={{ color: 'var(--color-gold)' }}></i> {CONTACT_PHONE}
            </li>
            <li>
              <i className="ph-fill ph-envelope-simple" style={{ color: 'var(--color-gold)' }}></i> {CONTACT_EMAIL}
            </li>
            <li>
              <i className="ph-fill ph-map-pin" style={{ color: 'var(--color-gold)' }}></i> {CONTACT_LOCATION}
            </li>
          </ul>
          <div className="social-icons" style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
            <a href="https://www.facebook.com/login/" target="_blank" style={{ color: 'var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'opacity 0.3s', textDecoration: 'none' }} rel="noopener noreferrer" aria-label="Visit our Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="currentColor" d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"/></svg>
            </a>
            <a href="https://www.instagram.com/accounts/login/" target="_blank" style={{ color: 'var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'opacity 0.3s', textDecoration: 'none' }} rel="noopener noreferrer" aria-label="Visit our Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="currentColor" d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"/></svg>
            </a>
            <a href="https://www.linkedin.com/login" target="_blank" style={{ color: 'var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'opacity 0.3s', textDecoration: 'none' }} rel="noopener noreferrer" aria-label="Visit our LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="currentColor" d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm-8,176H176V148a20,20,0,0,0-40,0v52H104V112h32v15.61A39.81,39.81,0,0,1,176,108a40,40,0,0,1,40,40ZM88,200H56V112H88ZM72,96A16,16,0,1,1,88,80,16,16,0,0,1,72,96Z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar border-top-dark" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', marginTop: '40px' }}>
        <div className="container bottom-flex" style={{ padding: '32px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <p style={{ opacity: 0.6, margin: 0 }}>&copy; {new Date().getFullYear()} Corporate Services. All Rights Reserved.</p>
          <div className="bottom-links" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <Link href="/privacy" style={{ color: 'var(--color-white)', opacity: 0.6, textDecoration: 'none' }}>Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
