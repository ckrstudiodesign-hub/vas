'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.error('Unhandled UI Error:', error);
    }
  }, [error]);

  return (
    <div className="section-padding text-center" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '100px 20px' }}>
      <div className="container error-boundary-box">
        <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#fdeded', color: '#5f2120', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: '2rem' }}>
          <i className="ph-bold ph-warning"></i>
        </div>
        <h2 className="serif-font" style={{ fontSize: '2.2rem', marginBottom: '16px', color: 'var(--color-navy, #0a1128)' }}>
          Something went wrong
        </h2>
        <p style={{ maxWidth: '480px', margin: '0 auto 32px', color: 'var(--color-dark-grey)', lineHeight: 1.7, opacity: 0.85 }}>
          We apologize for the inconvenience. An unexpected error occurred while processing this page.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => reset()}
            className="btn btn-primary"
            style={{ padding: '12px 24px', cursor: 'pointer', border: 'none' }}
          >
            Try Again <i className="ph-bold ph-arrow-clockwise" style={{ marginLeft: '8px' }}></i>
          </button>
          <Link href="/" className="btn btn-secondary" style={{ padding: '12px 24px', textDecoration: 'none', border: '1px solid var(--color-navy)', color: 'var(--color-navy)' }}>
            Go Home <i className="ph-bold ph-house" style={{ marginLeft: '8px' }}></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
