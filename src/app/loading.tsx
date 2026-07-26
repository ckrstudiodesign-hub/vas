import React from 'react';

export default function Loading() {
  return (
    <div className="loading-container" aria-label="Loading page content" role="status">
      <div className="loading-spinner"></div>
      <p style={{ color: 'var(--color-navy, #0a1128)', fontWeight: 500, opacity: 0.8, letterSpacing: '0.5px' }}>
        Loading VAS Corporate Services...
      </p>
    </div>
  );
}
