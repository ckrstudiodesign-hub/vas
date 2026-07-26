import React from 'react';
import Link from 'next/link';
import FAQAccordion from '@/components/sections/FAQAccordion';
import ContactSection from '@/components/sections/ContactSection';
import AutoSlider from '@/components/sections/AutoSlider';
import { FAQItem } from '@/types';

const HOME_FAQS: FAQItem[] = [
  {
    question: 'What is the difference between Mainland and Free Zone business setup?',
    answer:
      'Mainland companies can trade anywhere within the UAE and internationally, allowing 100% foreign ownership in most commercial activities. Free Zone companies are primarily designed for international trade and are restricted to operating within their specific zone or outside the UAE, offering robust tax incentives and full capital repatriation.',
  },
  {
    question: 'How long does the licensing process take?',
    answer:
      'A Free Zone license can typically be issued within 3 to 7 working days. Mainland licenses may take 1 to 3 weeks due to additional approvals required from various government departments depending on the specific business activity.',
  },
  {
    question: 'What are the requirements for an Investor Visa?',
    answer:
      'To obtain an Investor Visa, you must either establish a new company in the UAE or invest in an existing one. The specific financial threshold and documentation vary between Free Zones and the Mainland Department of Economy and Tourism (DET).',
  },
  {
    question: 'Can you assist with opening a corporate bank account?',
    answer:
      'Yes. We provide strategic introductions and comprehensive assistance with corporate bank account opening. We help you prepare the required compliance documents, business plans, and KYC profiles to ensure a high success rate with UAE banking institutions.',
  },
  {
    question: 'When is Corporate Tax applicable?',
    answer:
      'The UAE introduced a federal Corporate Tax rate of 9% on taxable income exceeding AED 375,000. Free Zone persons may benefit from a 0% rate on Qualifying Income, subject to strict regulatory conditions and audited financial statements.',
  },
  {
    question: 'Which Free Zone is best for my business?',
    answer:
      'The "best" Free Zone depends entirely on your business activity, facility requirements (office, warehouse, land), visa quota needs, and target market. During our consultation, we analyze these factors to recommend the most cost-effective and strategic jurisdiction.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <section id="home" className="hero premium-hero">
        <div className="hero-bg">
          <div className="hero-bg-overlay"></div>
          <video autoPlay loop muted playsInline className="hero-video">
            <source src="/videos/herobg.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="container hero-content premium-grid">
          {/* Left Side (55%) */}
          <div className="hero-left-col hero-fade-up">
            <span className="premium-eyebrow">
              <span className="gold-line"></span> PROFESSIONAL CORPORATE SERVICES
            </span>
            <h1 className="premium-headline">
              Business Setup &<br />
              <span className="gold-text">Business Finance,</span>
              <br />
              Simplified.
            </h1>
            <p className="premium-paragraph hero-fade-up delay-1">
              Turn your business ambitions into reality with expert company formation, licensing, visas, banking assistance, mortgage advisory, and business finance solutions across the UAE.
            </p>

            <div className="premium-cta-row hero-fade-up delay-2">
              <a href="#contact" className="btn premium-primary-btn">
                Book Free Consultation <i className="ph-bold ph-arrow-right slide-arrow"></i>
              </a>
            </div>
          </div>

          {/* Right Side (45%) */}
          <div className="hero-right-col hero-slide-in">
            <div className="premium-glass-container">
              {/* Section 1 */}
              <div className="glass-section">
                <div className="glass-section-header">
                  <i className="ph-light ph-buildings"></i>
                  <h3>Business Setup</h3>
                </div>
                <ul className="premium-list">
                  <li>
                    <i className="ph-light ph-check"></i> Mainland Company Setup
                  </li>
                  <li>
                    <i className="ph-light ph-check"></i> Free Zone Company Setup
                  </li>
                  <li>
                    <i className="ph-light ph-check"></i> Offshore Formation
                  </li>
                  <li>
                    <i className="ph-light ph-check"></i> Branch Office
                  </li>
                  <li>
                    <i className="ph-light ph-check"></i> Licensing & Approvals
                  </li>
                  <li>
                    <i className="ph-light ph-check"></i> Visa & PRO Services
                  </li>
                  <li>
                    <i className="ph-light ph-check"></i> Banking Assistance
                  </li>
                </ul>
              </div>

              <div className="premium-divider"></div>

              {/* Section 2 */}
              <div className="glass-section">
                <div className="glass-section-header">
                  <i className="ph-light ph-house-line"></i>
                  <h3>Mortgage & Business Finance</h3>
                </div>
                <ul className="premium-list">
                  <li>
                    <i className="ph-light ph-check"></i> Residential Mortgage
                  </li>
                  <li>
                    <i className="ph-light ph-check"></i> Commercial Mortgage
                  </li>
                  <li>
                    <i className="ph-light ph-check"></i> Refinance
                  </li>
                  <li>
                    <i className="ph-light ph-check"></i> Business Finance
                  </li>
                  <li>
                    <i className="ph-light ph-check"></i> Non-Resident Mortgage
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Services Marquee */}
      <div className="services-marquee-wrapper">
        <div className="services-marquee">
          <div className="marquee-content">
            <span>
              <i className="ph-fill ph-check-circle" style={{ color: 'var(--color-gold)', marginRight: '10px', fontSize: '1.3rem' }}></i>Mainland Company Formation
            </span>
            <span>
              <i className="ph-fill ph-check-circle" style={{ color: 'var(--color-gold)', marginRight: '10px', fontSize: '1.3rem' }}></i>Free Zone Business Setup
            </span>
            <span>
              <i className="ph-fill ph-check-circle" style={{ color: 'var(--color-gold)', marginRight: '10px', fontSize: '1.3rem' }}></i>Corporate Banking
            </span>
            <span>
              <i className="ph-fill ph-check-circle" style={{ color: 'var(--color-gold)', marginRight: '10px', fontSize: '1.3rem' }}></i>PRO Services
            </span>
            <span>
              <i className="ph-fill ph-check-circle" style={{ color: 'var(--color-gold)', marginRight: '10px', fontSize: '1.3rem' }}></i>Business Licensing
            </span>
            <span>
              <i className="ph-fill ph-check-circle" style={{ color: 'var(--color-gold)', marginRight: '10px', fontSize: '1.3rem' }}></i>Golden Visa Processing
            </span>

            <span>
              <i className="ph-fill ph-check-circle" style={{ color: 'var(--color-gold)', marginRight: '10px', fontSize: '1.3rem' }}></i>Mainland Company Formation
            </span>
            <span>
              <i className="ph-fill ph-check-circle" style={{ color: 'var(--color-gold)', marginRight: '10px', fontSize: '1.3rem' }}></i>Free Zone Business Setup
            </span>
            <span>
              <i className="ph-fill ph-check-circle" style={{ color: 'var(--color-gold)', marginRight: '10px', fontSize: '1.3rem' }}></i>Corporate Banking
            </span>
            <span>
              <i className="ph-fill ph-check-circle" style={{ color: 'var(--color-gold)', marginRight: '10px', fontSize: '1.3rem' }}></i>PRO Services
            </span>
            <span>
              <i className="ph-fill ph-check-circle" style={{ color: 'var(--color-gold)', marginRight: '10px', fontSize: '1.3rem' }}></i>Business Licensing
            </span>
            <span>
              <i className="ph-fill ph-check-circle" style={{ color: 'var(--color-gold)', marginRight: '10px', fontSize: '1.3rem' }}></i>Golden Visa Processing
            </span>
          </div>
        </div>
      </div>

      {/* 3. Home About Section */}
      <section className="home-about-section bg-white" style={{ paddingTop: '35px', paddingBottom: '35px' }}>
        <div className="container">
          <div className="about-intro-grid">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <img src="/images/about%20us%20logo.png" alt="VAS Consultants Logo" style={{ height: '45px', mixBlendMode: 'multiply' }} loading="lazy" />
                <span className="about-intro-eyebrow" style={{ marginBottom: 0 }}>
                  <span className="dot"></span>
                  VAS CONSULTANTS
                  <span className="dot"></span>
                </span>
              </div>
              <h2 className="about-intro-heading" style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>
                <span className="highlight">Premium</span> Business Setup<br />in Dubai
              </h2>
            </div>

            <div className="about-intro-paragraphs" style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>
              <p>As a leading corporate advisory firm, VAS Consultants empowers global investors and entrepreneurs to seamlessly establish and scale their operations across the UAE.</p>
              <p>We are a premier business setup consultancy company based in Dubai, dedicated to simplifying the complexity of setting up a company and it&apos;s procedure in the UAE for local and international investors.</p>
            </div>
          </div>

          <div className="about-content-split" style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>
            <div className="about-feature-list">
              <div className="feature-pill-card">
                <div className="feature-icon-circle" style={{ background: 'var(--color-gold)', color: 'white' }}>
                  <i className="ph-fill ph-handshake"></i>
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 4px', color: 'var(--color-charcoal)' }}>Expert Consultation</h4>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--color-dark-grey)' }}>Tailored advice to find the perfect jurisdiction and structure for your business.</p>
                </div>
              </div>

              <div className="feature-pill-card">
                <div className="feature-icon-circle" style={{ background: 'var(--color-charcoal)', color: 'white' }}>
                  <i className="ph-fill ph-wrench"></i>
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 4px', color: 'var(--color-charcoal)' }}>Corporate Solutions</h4>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--color-dark-grey)' }}>End-to-end services from licensing to golden visas and corporate banking.</p>
                </div>
              </div>

              <div className="feature-pill-card">
                <div className="feature-icon-circle" style={{ background: 'var(--color-gold)', color: 'white' }}>
                  <i className="ph-fill ph-users"></i>
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 4px', color: 'var(--color-charcoal)' }}>Dedicated Support</h4>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--color-dark-grey)' }}>Our team remains by your side through every stage of the process until completion</p>
                </div>
              </div>

              <div className="feature-pill-card">
                <div className="feature-icon-circle" style={{ background: 'var(--color-charcoal)', color: 'white' }}>
                  <i className="ph-fill ph-shield-check"></i>
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 4px', color: 'var(--color-charcoal)' }}>Regulatory Compliance</h4>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--color-dark-grey)' }}>Ensure your business operations are fully compliant with all local UAE laws and regulatory frameworks.</p>
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

      {/* 4. Leadership Section */}
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

      {/* 5. Services Interactive Grid */}
      <section id="services" className="business-solutions section-padding bg-warm-white">
        <div className="container">
          <div className="section-intro text-center animate-fade-up">
            <span className="section-label">OUR SERVICES</span>
            <h2 className="section-title">Complete Business Setup Solutions</h2>
            <p className="section-subtitle text-center">Helping entrepreneurs and businesses establish, manage and grow their companies across the UAE through expert corporate services.</p>
          </div>

          <div className="services-interactive-grid">
            <Link href="/mainland-introduction" className="interactive-service-card">
              <img src="/images/OUR%20SERVICES/01%20Mainland%20Company%20Formation.png" alt="Mainland Company Formation" className="service-bg" loading="lazy" />
              <div className="isc-content">
                <h3 className="isc-title">Mainland Company Formation</h3>
                <div className="isc-desc-wrapper">
                  <p className="isc-desc">Establish your business in the UAE mainland with complete licensing and regulatory support.</p>
                  <span className="isc-explore">
                    Explore <i className="ph-bold ph-arrow-right"></i>
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/freezone-introduction" className="interactive-service-card">
              <img src="/images/OUR%20SERVICES/03%20Free%20Zone%20Business%20Setup.png" alt="Free Zone Business Setup" className="service-bg" loading="lazy" />
              <div className="isc-content">
                <h3 className="isc-title">Free Zone Company Formation</h3>
                <div className="isc-desc-wrapper">
                  <p className="isc-desc">Launch your company with ownership benefits and simplified business registration.</p>
                  <span className="isc-explore">
                    Explore <i className="ph-bold ph-arrow-right"></i>
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/services-bank-account" className="interactive-service-card">
              <img src="/images/OUR%20SERVICES/04%20Corporate%20Bank%20Account%20Assistance.png" alt="Corporate Banking" className="service-bg" loading="lazy" />
              <div className="isc-content">
                <h3 className="isc-title">Corporate Banking</h3>
                <div className="isc-desc-wrapper">
                  <p className="isc-desc">Facilitation of corporate bank accounts with leading financial institutions.</p>
                  <span className="isc-explore">
                    Explore <i className="ph-bold ph-arrow-right"></i>
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/services-visa" className="interactive-service-card">
              <img src="/images/OUR%20SERVICES/06%20PRO%20Services.png" alt="Visa Services" className="service-bg" loading="lazy" />
              <div className="isc-content">
                <h3 className="isc-title">Visa Services</h3>
                <div className="isc-desc-wrapper">
                  <p className="isc-desc">Government liaison, visa processing, and comprehensive ongoing support.</p>
                  <span className="isc-explore">
                    Explore <i className="ph-bold ph-arrow-right"></i>
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/residential-mortgage" className="interactive-service-card">
              <img src="/images/OUR%20SERVICES/Mortgages_Business_Finance.png" alt="Mortgages & Business Finance" className="service-bg" loading="lazy" />
              <div className="isc-content">
                <h3 className="isc-title">Mortgages / Business Finance</h3>
                <div className="isc-desc-wrapper">
                  <p className="isc-desc">Strategic financing solutions for commercial and residential properties to support your business expansion.</p>
                  <span className="isc-explore" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    Explore <i className="ph-bold ph-arrow-right" style={{ marginLeft: '8px' }}></i>
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <div style={{ textAlign: 'center', marginTop: '64px' }}>
            <Link href="/services-business-licence" className="btn btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Why Choose Bento */}
      <section className="why-choose-bento section-padding">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-eyebrow">Trust & Excellence</span>
            <h2 className="hero-headline serif-font" style={{ fontSize: '2.5rem', marginBottom: '12px', color: 'var(--color-charcoal)' }}>
              Why Businesses Trust Us
            </h2>
            <p style={{ fontSize: '1rem', maxWidth: '600px', margin: '0 auto', color: 'var(--color-dark-grey)' }}>Delivering premium corporate services with absolute transparency.</p>
          </div>

          <div className="bento-grid">
            <div className="bento-card">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600" alt="Dedicated Focus" className="bento-bg-img" loading="lazy" />
              <div className="bento-overlay"></div>
              <div className="bento-content">
                <i className="ph-light ph-target bento-icon"></i>
                <h4>Dedicated Focus</h4>
                <p>Personalized business setup experience tailored to your unique goals.</p>
              </div>
            </div>

            <div className="bento-card">
              <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=600" alt="Local Expertise" className="bento-bg-img" loading="lazy" />
              <div className="bento-overlay"></div>
              <div className="bento-content">
                <i className="ph-light ph-map-pin bento-icon"></i>
                <h4>Local Expertise</h4>
                <p>Deep understanding of UAE regulations and compliance for rapid processing.</p>
              </div>
            </div>

            <div className="bento-card">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600" alt="Modern Approach" className="bento-bg-img" loading="lazy" />
              <div className="bento-overlay"></div>
              <div className="bento-content">
                <i className="ph-light ph-rocket bento-icon"></i>
                <h4>Modern Approach</h4>
                <p>Innovative and efficient processes to launch your venture quickly.</p>
              </div>
            </div>

            <div className="bento-card">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Growing Network" className="bento-bg-img" loading="lazy" />
              <div className="bento-overlay"></div>
              <div className="bento-content bento-content-row">
                <i className="ph-light ph-globe-hemisphere-west bento-icon"></i>
                <div className="bento-text">
                  <h4>Growing Network</h4>
                  <p>Expanding partnerships with leading banks and legal advisors.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center" style={{ marginTop: '40px' }}>
            <a href="#contact" className="btn btn-primary" style={{ padding: '12px 32px', fontSize: '1rem', letterSpacing: '1px' }}>
              Get Started <i className="ph-bold ph-arrow-right" style={{ marginLeft: '8px', verticalAlign: 'middle' }}></i>
            </a>
          </div>
        </div>
      </section>

      {/* 7. Free Zone Partners Marquee */}
      <section className="free-zone-network section-padding" style={{ background: 'var(--color-white)' }}>
        <div className="container text-center">
          <h2 className="section-title serif-font">Our Trusted Free Zone Partners</h2>
          <p className="section-subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Working with leading UAE free zones to provide the right business setup solution for every entrepreneur.
          </p>
          <div className="glass-panel partner-carousel-container">
            <div className="infinite-carousel">
              <div className="carousel-track">
                <img src="/images/Partners/JAFZA_Logo.png" alt="JAFZA" loading="lazy" />
                <img src="/images/Partners/Meydan_Free_Zone_Logo.png" alt="Meydan" loading="lazy" />
                <img src="/images/Partners/RAKEZ_Logo.png" alt="RAKEZ" loading="lazy" />
                <img src="/images/Partners/dmcc.png" alt="DMCC" loading="lazy" />
                <img src="/images/Partners/ifza-logo.png" alt="IFZA" loading="lazy" />
                <img src="/images/Partners/spc.png" alt="SPC" loading="lazy" />

                <img src="/images/Partners/JAFZA_Logo.png" alt="JAFZA" loading="lazy" />
                <img src="/images/Partners/Meydan_Free_Zone_Logo.png" alt="Meydan" loading="lazy" />
                <img src="/images/Partners/RAKEZ_Logo.png" alt="RAKEZ" loading="lazy" />
                <img src="/images/Partners/dmcc.png" alt="DMCC" loading="lazy" />
                <img src="/images/Partners/ifza-logo.png" alt="IFZA" loading="lazy" />
                <img src="/images/Partners/spc.png" alt="SPC" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Testimonials Section */}
      <section className="testimonials section-padding" style={{ backgroundColor: '#ffffff', padding: '100px 0' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="section-title" style={{ marginBottom: '16px', fontSize: '2.2rem', color: '#121212' }}>
            Testimonials<br />Client Success Stories
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto 80px auto', color: '#666', fontSize: '1.05rem', maxWidth: '800px', lineHeight: 1.6 }}>
            What our clients say about their business setup journey with VAS Consultants.
          </p>

          <AutoSlider intervalMs={5000} className="testimonial-track" style={{ display: 'flex', gap: '30px', overflowX: 'auto', paddingBottom: '20px' } as any}>
            <div className="test-card" style={{ background: '#EEF2FE', flex: '0 0 320px', borderRadius: '12px', padding: '45px 30px 30px', position: 'relative', textAlign: 'center', marginTop: '40px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150" alt="Ahmed K." style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', position: 'absolute', top: '-40px', left: '50%', transform: 'translateX(-50%)', border: '4px solid #EEF2FE' }} />
              <h4 style={{ color: '#1a233a', fontSize: '1.05rem', fontWeight: 700, marginBottom: '16px' }}>Ahmed K., Real Estate Investor</h4>
              <p style={{ color: '#616b7c', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>&quot;Professional PRO services. They handled my Golden Visa flawlessly while maintaining clear communication throughout the process.&quot;</p>
              <div style={{ color: '#274C77', fontSize: '1.1rem', display: 'flex', justifyContent: 'center', gap: '6px' }}>
                <i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i>
              </div>
            </div>

            <div className="test-card" style={{ background: '#E8F6F6', flex: '0 0 320px', borderRadius: '12px', padding: '45px 30px 30px', position: 'relative', textAlign: 'center', marginTop: '40px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150" alt="Rajesh M." style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', position: 'absolute', top: '-40px', left: '50%', transform: 'translateX(-50%)', border: '4px solid #E8F6F6' }} />
              <h4 style={{ color: '#1a2f2c', fontSize: '1.05rem', fontWeight: 700, marginBottom: '16px' }}>Rajesh M., Developer</h4>
              <p style={{ color: '#5d7572', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>&quot;VAS Consultants provided unparalleled guidance on our commercial mortgage. Their strategic approach perfectly supported our expansion plans.&quot;</p>
              <div style={{ color: '#2A9D8F', fontSize: '1.1rem', display: 'flex', justifyContent: 'center', gap: '6px' }}>
                <i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i>
              </div>
            </div>

            <div className="test-card" style={{ background: '#FFF9E6', flex: '0 0 320px', borderRadius: '12px', padding: '45px 30px 30px', position: 'relative', textAlign: 'center', marginTop: '40px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150" alt="Elena V." style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', position: 'absolute', top: '-40px', left: '50%', transform: 'translateX(-50%)', border: '4px solid #FFF9E6' }} />
              <h4 style={{ color: '#332b12', fontSize: '1.05rem', fontWeight: 700, marginBottom: '16px' }}>Elena V., Tech Founder</h4>
              <p style={{ color: '#7a6e4d', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>&quot;A truly premium service that exceeded all expectations. They handled everything perfectly from Mainland setup to Banking assistance.&quot;</p>
              <div style={{ color: '#E9C46A', fontSize: '1.1rem', display: 'flex', justifyContent: 'center', gap: '6px' }}>
                <i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i>
              </div>
            </div>

            <div className="test-card" style={{ background: '#EEF2FE', flex: '0 0 320px', borderRadius: '12px', padding: '45px 30px 30px', position: 'relative', textAlign: 'center', marginTop: '40px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150" alt="James R." style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', position: 'absolute', top: '-40px', left: '50%', transform: 'translateX(-50%)', border: '4px solid #EEF2FE' }} />
              <h4 style={{ color: '#1a233a', fontSize: '1.05rem', fontWeight: 700, marginBottom: '16px' }}>James R., Tech Startup Founder</h4>
              <p style={{ color: '#616b7c', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>&quot;VAS Consultants simplified the entire mainland setup process. Their deep local knowledge saved us months of bureaucratic delays. Highly recommended.&quot;</p>
              <div style={{ color: '#274C77', fontSize: '1.1rem', display: 'flex', justifyContent: 'center', gap: '6px' }}>
                <i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i>
              </div>
            </div>

            <div className="test-card" style={{ background: '#E8F6F6', flex: '0 0 320px', borderRadius: '12px', padding: '45px 30px 30px', position: 'relative', textAlign: 'center', marginTop: '40px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" alt="Sarah M." style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', position: 'absolute', top: '-40px', left: '50%', transform: 'translateX(-50%)', border: '4px solid #E8F6F6' }} />
              <h4 style={{ color: '#1a2f2c', fontSize: '1.05rem', fontWeight: 700, marginBottom: '16px' }}>Sarah M., E-commerce Owner</h4>
              <p style={{ color: '#5d7572', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>&quot;Incredible support with our free zone license and corporate bank account. They guided us step-by-step with absolute transparency.&quot;</p>
              <div style={{ color: '#2A9D8F', fontSize: '1.1rem', display: 'flex', justifyContent: 'center', gap: '6px' }}>
                <i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i>
              </div>
            </div>
          </AutoSlider>
        </div>
      </section>

      {/* 10. Blogs and News Section */}
      <section className="blogs-news section-padding bg-white">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 'var(--spacing-xl)', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <span className="section-label">Insights</span>
              <h2 className="section-title" style={{ marginBottom: 0 }}>
                Blogs and News
              </h2>
            </div>
            <a href="#contact" className="btn btn-outline" style={{ padding: '10px 24px', fontSize: '0.95rem' }}>
              View All Articles
            </a>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-md)', maxWidth: '1200px', margin: '0 auto' }}>
            <div className="premium-card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div className="img-zoom-wrapper" style={{ aspectRatio: '16/9', marginBottom: 0, borderRadius: 0 }}>
                <img src="/images/blog_1.png" alt="DMCC accounts for 15 percent" loading="lazy" />
              </div>
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ marginBottom: '16px' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-gold)', letterSpacing: '1px', textTransform: 'uppercase' }}>Economy</span>
                  <span style={{ margin: '0 8px', color: 'var(--color-light-grey)' }}>•</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-dark-grey)' }}>Khaleej Times</span>
                </div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '12px', lineHeight: 1.4 }}>DMCC accounts for 15 percent of total FDI in Dubai. 7 percent of GDP in H1 2024</h3>
                <a href="#contact" className="circular-arrow-link" style={{ marginTop: 'auto' }}>
                  Read Article <i className="ph ph-arrow-right"></i>
                </a>
              </div>
            </div>

            <div className="premium-card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div className="img-zoom-wrapper" style={{ aspectRatio: '16/9', marginBottom: 0, borderRadius: 0 }}>
                <img src="/images/blog_2.png" alt="UAE considers 10-year golden license" loading="lazy" />
              </div>
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ marginBottom: '16px' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-gold)', letterSpacing: '1px', textTransform: 'uppercase' }}>Regulations</span>
                  <span style={{ margin: '0 8px', color: 'var(--color-light-grey)' }}>•</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-dark-grey)' }}>The National</span>
                </div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '12px', lineHeight: 1.4 }}>UAE considers 10-year &apos;golden license&apos; and 5-year &apos;silver license&apos; to boost business</h3>
                <a href="#contact" className="circular-arrow-link" style={{ marginTop: 'auto' }}>
                  Read Article <i className="ph ph-arrow-right"></i>
                </a>
              </div>
            </div>

            <div className="premium-card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div className="img-zoom-wrapper" style={{ aspectRatio: '16/9', marginBottom: 0, borderRadius: 0 }}>
                <img src="/images/about_office.png" alt="Dubai Announces New Business Regulations" loading="lazy" />
              </div>
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ marginBottom: '16px' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-gold)', letterSpacing: '1px', textTransform: 'uppercase' }}>Business</span>
                  <span style={{ margin: '0 8px', color: 'var(--color-light-grey)' }}>•</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-dark-grey)' }}>Gulf News</span>
                </div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '12px', lineHeight: 1.4 }}>Dubai unveils new streamlined corporate tax regulations for free zone companies</h3>
                <a href="#contact" className="circular-arrow-link" style={{ marginTop: 'auto' }}>
                  Read Article <i className="ph ph-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQ Accordion */}
      <FAQAccordion items={HOME_FAQS} />

      {/* 12. Contact Section */}
      <ContactSection />
    </>
  );
}
