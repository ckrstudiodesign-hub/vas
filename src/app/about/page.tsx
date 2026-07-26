import React from 'react';
import Link from 'next/link';
import ContactSection from '@/components/sections/ContactSection';
import AutoSlider from '@/components/sections/AutoSlider';
import StatsCounter from '@/components/sections/StatsCounter';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | VAS Consultants Dubai',
  description: 'Learn about VAS Consultants, premier corporate advisory firm empowering global investors and entrepreneurs to establish and scale across the UAE.',
};

export default function AboutPage() {
  return (
    <>
      {/* 1. Simple Hero */}
      <section className="about-hero-simple" style={{ background: "url('/images/about_office.png') center/cover no-repeat", position: 'relative', padding: '120px 0 80px', textAlign: 'center' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="hero-headline serif-font" style={{ color: 'white', fontSize: '4rem', margin: 0 }}>
            About us
          </h1>
        </div>
      </section>

      {/* 2. Intro Grid & Features */}
      <section className="section-padding bg-white" style={{ paddingTop: '100px' }}>
        <div className="container">
          <div className="about-intro-grid">
            <div>
              <span className="about-intro-eyebrow">
                <span className="dot"></span>
                VAS CONSULTANTS
                <span className="dot"></span>
              </span>
              <h2 className="serif-font about-intro-heading">
                <span className="highlight">Premium</span> Business Setup<br />in Dubai
              </h2>
            </div>
            <div className="about-intro-paragraphs">
              <p>As a leading corporate advisory firm, VAS Consultants empowers global investors and entrepreneurs to seamlessly establish and scale their operations across the UAE.</p>
              <p>By leveraging deep market insights, extensive regulatory expertise, and an elite network of strategic partners, we provide tailored structuring, licensing, and business continuity solutions that turn ambitious visions into thriving realities.</p>
            </div>
          </div>

          <div className="about-content-split">
            <div className="about-feature-list">
              <div className="feature-pill-card">
                <div className="feature-icon-circle" style={{ background: 'var(--color-gold)', color: 'white' }}>
                  <i className="ph-fill ph-handshake"></i>
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 4px', color: 'var(--color-charcoal)' }}>Strategic Advisory</h4>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--color-dark-grey)' }}>Precision-driven guidance to identify the optimal jurisdiction and corporate structure.</p>
                </div>
              </div>

              <div className="feature-pill-card">
                <div className="feature-icon-circle" style={{ background: 'var(--color-charcoal)', color: 'white' }}>
                  <i className="ph-fill ph-wrench"></i>
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 4px', color: 'var(--color-charcoal)' }}>Comprehensive Solutions</h4>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--color-dark-grey)' }}>Turnkey setup services encompassing licensing, banking, and elite visa procurement.</p>
                </div>
              </div>

              <div className="feature-pill-card">
                <div className="feature-icon-circle" style={{ background: 'var(--color-gold)', color: 'white' }}>
                  <i className="ph-fill ph-users"></i>
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 4px', color: 'var(--color-charcoal)' }}>Unwavering Support</h4>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--color-dark-grey)' }}>A dedicated partner navigating the complexities of business establishment on your behalf.</p>
                </div>
              </div>

              <div className="feature-pill-card">
                <div className="feature-icon-circle" style={{ background: 'var(--color-charcoal)', color: 'white' }}>
                  <i className="ph-fill ph-shield-check"></i>
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 4px', color: 'var(--color-charcoal)' }}>Governance & Compliance</h4>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--color-dark-grey)' }}>Stringent adherence to UAE regulatory frameworks, safeguarding your corporate integrity.</p>
                </div>
              </div>
            </div>

            <div className="about-collage-container small-collage">
              <div className="collage-main-wrapper">
                <video autoPlay loop muted playsInline className="collage-main-img" style={{ objectFit: 'cover' }}>
                  <source src="/videos/about2.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="collage-float-wrapper">
                <video autoPlay loop muted playsInline className="collage-float-img" style={{ objectFit: 'cover' }}>
                  <source src="/videos/about%20video.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission */}
      <section className="vision-mission section-padding">
        <div className="container">
          <div className="vm-grid">
            <div className="vm-card glass-card-hover">
              <div className="vm-icon">
                <i className="ph-light ph-eye"></i>
              </div>
              <h3 className="serif-font">Vision</h3>
              <p>Empowering entrepreneurs and businesses with seamless company formation and long-term business growth across the UAE.</p>
            </div>
            <div className="vm-card glass-card-hover">
              <div className="vm-icon">
                <i className="ph-light ph-target"></i>
              </div>
              <h3 className="serif-font">Mission</h3>
              <p>Deliver transparent processes, expert guidance and reliable corporate services that simplify business setup for every client.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Journey */}
      <section className="journey section-padding bg-light">
        <div className="container">
          <h2 className="section-title text-center serif-font">Our Journey</h2>
          <div className="horizontal-timeline">
            <div className="h-timeline-item">
              <div className="h-timeline-icon">
                <i className="ph-light ph-flag"></i>
              </div>
              <div className="h-timeline-content">
                <h4>Founded</h4>
                <p>Established in Dubai with a core mission to simplify corporate services.</p>
              </div>
            </div>
            <div className="h-timeline-item">
              <div className="h-timeline-icon">
                <i className="ph-light ph-arrows-out"></i>
              </div>
              <div className="h-timeline-content">
                <h4>Business Expansion</h4>
                <p>Expanded services to cover all major UAE Free Zones and Offshore setups.</p>
              </div>
            </div>

            <div className="h-timeline-item">
              <div className="h-timeline-icon">
                <i className="ph-light ph-handshake"></i>
              </div>
              <div className="h-timeline-content">
                <h4>Trusted Consultancy</h4>
                <p>Recognized as a premier government liaison and corporate partner.</p>
              </div>
            </div>
            <div className="h-timeline-item">
              <div className="h-timeline-icon">
                <i className="ph-light ph-trend-up"></i>
              </div>
              <div className="h-timeline-content">
                <h4>Future Growth</h4>
                <p>Continuing to innovate digital business setup and global expansion strategies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Core Values */}
      <section className="core-values section-padding">
        <div className="container">
          <h2 className="section-title text-center serif-font">Core Values</h2>
          <div className="values-grid">
            <div className="value-card glass-card-hover">
              <i className="ph-light ph-shield-check"></i>
              <h4>Integrity</h4>
              <p>Upholding the highest ethical standards in all corporate dealings.</p>
            </div>
            <div className="value-card glass-card-hover">
              <i className="ph-light ph-magnifying-glass"></i>
              <h4>Transparency</h4>
              <p>Clear communication and absolutely zero hidden costs.</p>
            </div>
            <div className="value-card glass-card-hover">
              <i className="ph-light ph-lightbulb"></i>
              <h4>Innovation</h4>
              <p>Modern solutions for efficient and digital business setup.</p>
            </div>
            <div className="value-card glass-card-hover">
              <i className="ph-light ph-handshake"></i>
              <h4>Commitment</h4>
              <p>Dedicated to supporting your business from day one and beyond.</p>
            </div>
            <div className="value-card glass-card-hover">
              <i className="ph-light ph-chart-line-up"></i>
              <h4>Client Success</h4>
              <p>Your growth and operational success is our ultimate metric.</p>
            </div>
            <div className="value-card glass-card-hover">
              <i className="ph-light ph-star"></i>
              <h4>Excellence</h4>
              <p>Delivering premium, world-class corporate advisory services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why Businesses Choose Us Editorial */}
      <section className="why-choose-us-editorial section-padding bg-light">
        <div className="container">
          <div className="split-layout reverse-layout">
            <div className="split-content">
              <h2 className="section-title serif-font">Why Businesses Choose Us</h2>
              <ul className="editorial-list">
                <li>
                  <i className="ph-light ph-user-circle-gear"></i>
                  <div>
                    <h4>Business Consultants</h4>
                    <p>Deep expertise in UAE corporate law.</p>
                  </div>
                </li>
                <li>
                  <i className="ph-light ph-bank"></i>
                  <div>
                    <h4>Business Banking Guidance</h4>
                    <p>High success rate in account opening.</p>
                  </div>
                </li>
                <li>
                  <i className="ph-light ph-lightning"></i>
                  <div>
                    <h4>Fast Processing</h4>
                    <p>Streamlined government approvals.</p>
                  </div>
                </li>
                <li>
                  <i className="ph-light ph-currency-dollar"></i>
                  <div>
                    <h4>Transparent Pricing</h4>
                    <p>No hidden fees, ever.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="split-image-container">
              <div className="image-wrapper">
                <img src="/images/blog_3.png" alt="Luxury Meeting Room" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Numbers That Matter */}
      <StatsCounter
        stats={[
          { value: 30, suffix: '+', label: 'Years Experience' },
          { value: 100, suffix: '%', label: 'Client Satisfaction' },
        ]}
      />

      {/* 8. Leadership Section */}
      <section className="corporate-leadership section-padding light-theme" style={{ overflow: 'hidden', background: '#fff' }}>
        <div className="container">
          <div className="team-header">
            <span className="section-eyebrow">MEET OUR TEAM</span>
            <h2 className="leadership-title">
              The Experts Behind <span className="highlight-italic">the Brand</span>
            </h2>
          </div>
          <div className="staggered-team-wrapper">
            <div className="staggered-card staggered-card-left">
              <div className="sc-white-part">
                <div className="sc-image-container">
                  <img src="/images/Lionel%20Lobo.png" alt="Lionel Lobo" loading="lazy" />
                </div>
                <div className="sc-title-container">
                  <span className="sc-company">VAS CONSULTANTS</span>
                  <span className="sc-title">Chief Business Officer</span>
                  <h3 className="sc-name">Lionel Lobo</h3>
                </div>
              </div>
              <div className="sc-dark-part">
                <h2 className="serif-font" style={{ color: 'var(--color-gold)', fontSize: '2.2rem', marginTop: 0, marginBottom: '24px', lineHeight: 1.2 }}>
                  Lionel Lobo
                </h2>
                <p>
                  Lionel Lobo is a trusted Dubai corporate strategist and visionary leader who champions premium business setup advisory and corporate investment optimization. Operating from the UAE since 1992, he has been involved in financing both residential and commercial properties since 2004. He has been involved in managing working capital requirements of growing companies here in the UAE.
                </p>
                <p>
                  He has a deep understanding of different corporate structures, liaising with Free Zones/Mainland authorities and assisting in onboarding the company with the appropriate structure, trade licence, bank account and visa options.
                </p>
                <p>
                  VAS Consultants guides business formation across Dubai&apos;s most exclusive jurisdictions—through strategic partnership with top-tier free zones and mainland authorities. Founded on discretion and data-driven intelligence, we deliver unparalleled business setup solutions, secure Golden Visa residency through corporate investment, and protect long-term business continuity for our elite global clientele.
                </p>
                <div className="sc-stats">
                  <div className="sc-stat-item">
                    <span className="sc-stat-label">INDUSTRY EXPERIENCE</span>
                    <span className="sc-stat-value">30+ Years</span>
                  </div>
                  <div className="sc-stat-item">
                    <span className="sc-stat-label">GLOBAL NETWORK</span>
                    <span className="sc-stat-value">Extensive Reach</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="staggered-card staggered-card-right">
              <div className="sc-dark-part">
                <h2 className="serif-font" style={{ color: 'var(--color-gold)', fontSize: '2.2rem', marginTop: 0, marginBottom: '24px', lineHeight: 1.2 }}>
                  Aryan Kudav
                </h2>
                <p>
                  Aryan Kudav is a trusted <span className="highlight-gold">Corporate Strategy & Mortgage Advisor</span> with over 5 years of <span className="highlight-gold">international banking and financial services</span> experience across Canada and the UAE. Recognized for delivering strategic, client-focused solutions, he advises entrepreneurs, investors, and businesses on <span className="highlight-gold">company formation</span>, <span className="highlight-gold">corporate banking</span>, and <span className="highlight-gold">mortgage financing</span>.
                </p>
                <p>
                  Combining <span className="highlight-gold">global financial expertise</span> with a strong understanding of the <span className="highlight-gold">UAE&apos;s corporate landscape</span>, Aryan provides <span className="highlight-gold">end-to-end guidance</span>—from selecting the right business structure and facilitating banking relationships to securing <span className="highlight-gold">tailored financing solutions</span> that support sustainable growth.
                </p>
                <p>
                  His commitment to <span className="highlight-gold">excellence, integrity, and long-term partnerships</span> has positioned him as a <span className="highlight-gold">trusted advisor</span> for clients seeking to establish, finance, and expand their business presence in Dubai.
                </p>
              </div>
              <div className="sc-white-part">
                <div className="sc-image-container">
                  <img src="/images/Aryan.jpg" alt="Aryan Kudav" loading="lazy" />
                </div>
                <div className="sc-title-container">
                  <span className="sc-company">VAS CONSULTANTS</span>
                  <span className="sc-title">Corporate Strategy & Mortgage Advisor</span>
                  <h3 className="sc-name">Aryan Kudav</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Industries We Support */}
      <section className="industries section-padding">
        <div className="container">
          <h2 className="section-title text-center serif-font">Industries We Support</h2>
          <div className="industries-grid">
            <div className="industry-card">
              <i className="ph-light ph-desktop"></i> Technology
            </div>
            <div className="industry-card">
              <i className="ph-light ph-heartbeat"></i> Healthcare
            </div>
            <div className="industry-card">
              <i className="ph-light ph-shopping-bag"></i> Retail
            </div>
            <div className="industry-card">
              <i className="ph-light ph-swap"></i> Trading
            </div>
            <div className="industry-card">
              <i className="ph-light ph-factory"></i> Manufacturing
            </div>
            <div className="industry-card">
              <i className="ph-light ph-fork-knife"></i> Hospitality
            </div>
            <div className="industry-card">
              <i className="ph-light ph-buildings"></i> Real Estate
            </div>
            <div className="industry-card">
              <i className="ph-light ph-briefcase"></i> Consultancy
            </div>
          </div>
        </div>
      </section>

      {/* 10. Business Setup Process */}
      <section className="process section-padding bg-light">
        <div className="container">
          <h2 className="section-title text-center serif-font">Business Setup Process</h2>
          <div className="timeline">
            <div className="timeline-step glass-card-hover">
              <div className="step-number">
                <i className="ph-light ph-briefcase"></i>
              </div>
              <h4 style={{ color: 'var(--color-charcoal)' }}>Strategic Structuring</h4>
            </div>
            <div className="timeline-step glass-card-hover">
              <div className="step-number">
                <i className="ph-light ph-file-text"></i>
              </div>
              <h4 style={{ color: 'var(--color-charcoal)' }}>Documentation & Drafting</h4>
            </div>
            <div className="timeline-step glass-card-hover">
              <div className="step-number">
                <i className="ph-light ph-certificate"></i>
              </div>
              <h4 style={{ color: 'var(--color-charcoal)' }}>Regulatory Approvals</h4>
            </div>
            <div className="timeline-step glass-card-hover">
              <div className="step-number">
                <i className="ph-light ph-map-pin"></i>
              </div>
              <h4 style={{ color: 'var(--color-charcoal)' }}>Office Location Assistance</h4>
            </div>
            <div className="timeline-step glass-card-hover">
              <div className="step-number">
                <i className="ph-light ph-bank"></i>
              </div>
              <h4 style={{ color: 'var(--color-charcoal)' }}>Corporate Banking Support</h4>
            </div>
            <div className="timeline-step glass-card-hover">
              <div className="step-number">
                <i className="ph-light ph-passport"></i>
              </div>
              <h4 style={{ color: 'var(--color-charcoal)' }}>Visa Processing</h4>
            </div>
            <div className="timeline-step glass-card-hover">
              <div className="step-number">
                <i className="ph-light ph-receipt"></i>
              </div>
              <h4 style={{ color: 'var(--color-charcoal)' }}>VAT Registration</h4>
            </div>
            <div className="timeline-step glass-card-hover">
              <div className="step-number">
                <i className="ph-light ph-calculator"></i>
              </div>
              <h4 style={{ color: 'var(--color-charcoal)' }}>Corporate Tax Registration</h4>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Testimonials */}
      <section className="testimonials section-padding">
        <div className="container">
          <h2 className="section-title text-center serif-font">Client Success Stories</h2>
          <div className="infinite-carousel" style={{ padding: '20px 0' }}>
            <AutoSlider intervalMs={5000} className="carousel-track testimonials-track" style={{ display: 'flex', gap: '30px', overflowX: 'auto', paddingBottom: '20px' }}>
              <div className="testimonial-card review-card glass-card-hover" style={{ display: 'inline-block', whiteSpace: 'normal', verticalAlign: 'top', width: '350px', margin: '0 15px', textAlign: 'left' }}>
                <div className="play-btn-mini">
                  <i className="ph-fill ph-play-circle"></i>
                </div>
                <div className="stars">
                  <i className="ph-fill ph-star"></i>
                  <i className="ph-fill ph-star"></i>
                  <i className="ph-fill ph-star"></i>
                  <i className="ph-fill ph-star"></i>
                  <i className="ph-fill ph-star"></i>
                </div>
                <p>&quot;VAS Consultants simplified the entire mainland setup process. Highly recommended.&quot;</p>
                <div className="client-info">
                  <strong>James</strong>
                  <span>Founder</span>
                </div>
              </div>

              <div className="testimonial-card review-card glass-card-hover" style={{ display: 'inline-block', whiteSpace: 'normal', verticalAlign: 'top', width: '350px', margin: '0 15px', textAlign: 'left' }}>
                <div className="play-btn-mini">
                  <i className="ph-fill ph-play-circle"></i>
                </div>
                <div className="stars">
                  <i className="ph-fill ph-star"></i>
                  <i className="ph-fill ph-star"></i>
                  <i className="ph-fill ph-star"></i>
                  <i className="ph-fill ph-star"></i>
                  <i className="ph-fill ph-star"></i>
                </div>
                <p>&quot;Incredible support with our free zone license and corporate bank account.&quot;</p>
                <div className="client-info">
                  <strong>Sarah</strong>
                  <span>Startup Owner</span>
                </div>
              </div>

              <div className="testimonial-card review-card glass-card-hover" style={{ display: 'inline-block', whiteSpace: 'normal', verticalAlign: 'top', width: '350px', margin: '0 15px', textAlign: 'left' }}>
                <div className="play-btn-mini">
                  <i className="ph-fill ph-play-circle"></i>
                </div>
                <div className="stars">
                  <i className="ph-fill ph-star"></i>
                  <i className="ph-fill ph-star"></i>
                  <i className="ph-fill ph-star"></i>
                  <i className="ph-fill ph-star"></i>
                  <i className="ph-fill ph-star"></i>
                </div>
                <p>&quot;A truly premium service that exceeded all expectations. They handled everything perfectly.&quot;</p>
                <div className="client-info">
                  <strong>Elena</strong>
                  <span>Tech Founder</span>
                </div>
              </div>
            </AutoSlider>
          </div>
        </div>
      </section>

      {/* 12. Network Partners */}
      <section className="network section-padding bg-light">
        <div className="container">
          <div className="logo-carousel-wrapper">
            <div className="logo-carousel">
              <img src="/images/Partners/JAFZA_Logo.png" alt="JAFZA" loading="lazy" />
              <img src="/images/Partners/Meydan_Free_Zone_Logo.png" alt="Meydan" loading="lazy" />
              <img src="/images/Partners/RAKEZ_Logo.png" alt="RAKEZ" loading="lazy" />
              <img src="/images/Partners/dmcc.png" alt="DMCC" loading="lazy" />
              <img src="/images/Partners/ifza-logo.png" alt="IFZA" loading="lazy" />
              <img src="/images/Partners/spc.png" alt="SPC" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* 13. CTA & Contact Section */}
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
