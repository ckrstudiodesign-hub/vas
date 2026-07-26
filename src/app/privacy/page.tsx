import React from 'react';
import ContactSection from '@/components/sections/ContactSection';
import { Metadata } from 'next';
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_LOCATION } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy | VAS Consultants Dubai',
  description: 'We value your trust and are committed to protecting your privacy through transparent and responsible data practices.',
};

export default function PrivacyPage() {
  return (
    <>
      <section className="about-hero-simple" style={{ background: "url('/images/about_office.png') center/cover no-repeat", position: 'relative', padding: '120px 0 80px', textAlign: 'center' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="hero-headline serif-font" style={{ color: 'white', fontSize: '4rem', margin: 0 }}>
            Privacy Policy
          </h1>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1rem', marginTop: '12px' }}>Last Updated: July 2026</p>
        </div>
      </section>

      <section className="section-padding bg-white" style={{ paddingTop: '80px' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--color-dark-grey)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            <p style={{ fontStyle: 'italic', fontSize: '1.15rem', marginBottom: '40px', color: 'var(--color-charcoal)' }}>
              &quot;We value your trust and are committed to protecting your privacy through transparent and responsible data practices.&quot;
            </p>

            <section id="introduction" style={{ marginBottom: '40px' }}>
              <h2 className="serif-font" style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--color-charcoal)' }}>Introduction</h2>
              <p>Welcome to VAS Consultancy. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
            </section>
            <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', margin: '40px 0' }} />

            <section id="who-we-are" style={{ marginBottom: '40px' }}>
              <h2 className="serif-font" style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--color-charcoal)' }}>Who We Are</h2>
              <p>VAS Consultancy is a premium corporate advisory firm based in Dubai, specializing in business setup, corporate structuring, and strategic growth. We act as the data controller and are responsible for your personal data.</p>
            </section>
            <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', margin: '40px 0' }} />

            <section id="information-we-collect" style={{ marginBottom: '40px' }}>
              <h2 className="serif-font" style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--color-charcoal)' }}>Information We Collect</h2>
              <p>We may collect, use, store and transfer different kinds of personal data about you, including Identity Data (first name, last name, title), Contact Data (email address, telephone numbers), Technical Data (IP address, browser type and version), and Usage Data (information about how you use our website and services).</p>
            </section>
            <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', margin: '40px 0' }} />

            <section id="how-we-use-information" style={{ marginBottom: '40px' }}>
              <h2 className="serif-font" style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--color-charcoal)' }}>How We Use Information</h2>
              <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to provide our corporate services to you, to manage our relationship with you, and to improve our website, services, and customer experiences.</p>
            </section>
            <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', margin: '40px 0' }} />

            <section id="legal-basis" style={{ marginBottom: '40px' }}>
              <h2 className="serif-font" style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--color-charcoal)' }}>Legal Basis</h2>
              <p>Our legal basis for collecting and using the personal information described above will depend on the personal information concerned and the specific context in which we collect it. We normally collect personal information from you only where we have your consent to do so, where we need the personal information to perform a contract with you, or where the processing is in our legitimate interests.</p>
            </section>
            <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', margin: '40px 0' }} />

            <section id="sharing-information" style={{ marginBottom: '40px' }}>
              <h2 className="serif-font" style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--color-charcoal)' }}>Sharing Information</h2>
              <p>We may have to share your personal data with internal third parties, external third parties (such as service providers acting as processors based in the UAE who provide IT and system administration services), and professional advisers including lawyers, bankers, auditors, and insurers based in the UAE.</p>
            </section>
            <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', margin: '40px 0' }} />

            <section id="international-transfers" style={{ marginBottom: '40px' }}>
              <h2 className="serif-font" style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--color-charcoal)' }}>International Transfers</h2>
              <p>Some of our external third parties are based outside the UAE so their processing of your personal data will involve a transfer of data outside the UAE. Whenever we transfer your personal data out of the UAE, we ensure a similar degree of protection is afforded to it by ensuring appropriate safeguards are implemented.</p>
            </section>
            <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', margin: '40px 0' }} />

            <section id="data-retention" style={{ marginBottom: '40px' }}>
              <h2 className="serif-font" style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--color-charcoal)' }}>Data Retention</h2>
              <p>We will only retain your personal data for as long as reasonably necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements.</p>
            </section>
            <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', margin: '40px 0' }} />

            <section id="data-security" style={{ marginBottom: '40px' }}>
              <h2 className="serif-font" style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--color-charcoal)' }}>Data Security</h2>
              <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.</p>
            </section>
            <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', margin: '40px 0' }} />

            <section id="your-rights" style={{ marginBottom: '40px' }}>
              <h2 className="serif-font" style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--color-charcoal)' }}>Your Rights</h2>
              <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access to your personal data, request correction of your personal data, request erasure of your personal data, object to processing of your personal data, and request restriction of processing your personal data.</p>
            </section>
            <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', margin: '40px 0' }} />

            <section id="cookies" style={{ marginBottom: '40px' }}>
              <h2 className="serif-font" style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--color-charcoal)' }}>Cookies</h2>
              <p>You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.</p>
            </section>
            <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', margin: '40px 0' }} />

            <section id="third-party-services" style={{ marginBottom: '40px' }}>
              <h2 className="serif-font" style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--color-charcoal)' }}>Third-Party Services</h2>
              <p>This website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.</p>
            </section>
            <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', margin: '40px 0' }} />

            <section id="childrens-privacy" style={{ marginBottom: '40px' }}>
              <h2 className="serif-font" style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--color-charcoal)' }}>Children&apos;s Privacy</h2>
              <p>Our website and services are not intended for children and we do not knowingly collect data relating to children. If we become aware that we have collected personal data from a child without verification of parental consent, we take steps to remove that information from our servers.</p>
            </section>
            <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', margin: '40px 0' }} />

            <section id="policy-updates" style={{ marginBottom: '40px' }}>
              <h2 className="serif-font" style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--color-charcoal)' }}>Policy Updates</h2>
              <p>We keep our privacy policy under regular review. This version was last updated on the date stated at the top of this policy. We reserve the right to modify this privacy policy at any time, so please review it frequently.</p>
            </section>
            <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', margin: '40px 0' }} />

            <section id="contact-us" style={{ marginBottom: '40px' }}>
              <h2 className="serif-font" style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--color-charcoal)' }}>Contact Us</h2>
              <div style={{ padding: '24px', background: 'var(--color-light-grey)', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '8px', color: 'var(--color-charcoal)' }}>VAS Consultants</h3>
                <p style={{ marginBottom: '16px' }}>{CONTACT_LOCATION}</p>
                <div>
                  <p style={{ margin: '4px 0' }}><strong>Email:</strong> <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: 'var(--color-gold)', textDecoration: 'none' }}>{CONTACT_EMAIL}</a></p>
                  <p style={{ margin: '4px 0' }}><strong>Phone:</strong> <a href={`tel:${CONTACT_PHONE.replace(/\s+/g, '')}`} style={{ color: 'var(--color-gold)', textDecoration: 'none' }}>{CONTACT_PHONE}</a></p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
