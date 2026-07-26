import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="section-padding text-center" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '100px 20px' }}>
      <div className="container">
        <span className="section-tag" style={{ color: 'var(--color-gold, #c5a46d)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>
          404 Error
        </span>
        <h1 className="serif-font" style={{ fontSize: '4rem', margin: '16px 0 24px', color: 'var(--color-navy, #0a1128)' }}>
          Page Not Found
        </h1>
        <p style={{ maxWidth: '500px', margin: '0 auto 40px', fontSize: '1.1rem', color: 'var(--color-dark-grey)', lineHeight: 1.7, opacity: 0.85 }}>
          We could not find the page you were looking for. It may have been moved, deleted, or you might have typed the URL incorrectly.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn btn-primary" style={{ padding: '14px 28px', textDecoration: 'none' }}>
            Return Home <i className="ph-bold ph-house" style={{ marginLeft: '8px' }}></i>
          </Link>
          <Link href="/#contact" className="btn btn-secondary" style={{ padding: '14px 28px', textDecoration: 'none', border: '1px solid var(--color-navy)', color: 'var(--color-navy)' }}>
            Contact Support <i className="ph-bold ph-headset" style={{ marginLeft: '8px' }}></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
