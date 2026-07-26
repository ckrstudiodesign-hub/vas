import React from 'react';

interface HeroProps {
  title: string;
  bgImage?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export default function Hero({ title, bgImage, className = 'about-hero-simple', style, children }: HeroProps) {
  const bgStyle: React.CSSProperties = bgImage
    ? {
        background: `url('${bgImage}') center/cover no-repeat`,
        position: 'relative',
        padding: '120px 0 80px',
        textAlign: 'center',
        ...style,
      }
    : {
        position: 'relative',
        padding: '120px 0 80px',
        textAlign: 'center',
        backgroundColor: 'var(--color-navy, #0a1128)',
        ...style,
      };

  return (
    <section className={className} style={bgStyle}>
      {bgImage && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.6)',
          }}
        ></div>
      )}
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h1 className="hero-headline serif-font" style={{ color: 'white', fontSize: '4rem', margin: 0 }}>
          {title}
        </h1>
        {children}
      </div>
    </section>
  );
}
