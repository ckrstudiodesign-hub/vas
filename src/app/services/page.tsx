import React from 'react';
import ContactSection from '@/components/sections/ContactSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | VAS Consultants Dubai',
  description: 'Explore our comprehensive corporate services including business licensing, visa services, corporate banking, accounting, and merchant banking in Dubai, UAE.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="about-hero-simple" style={{ background: "url('/images/about_office.png') center/cover no-repeat", position: 'relative', padding: '120px 0 80px', textAlign: 'center' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="hero-headline serif-font" style={{ color: 'white', fontSize: '4rem', margin: 0 }}>
            Our Services
          </h1>
        </div>
      </section>

      <section className="section-padding bg-white" style={{ paddingTop: '80px' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 id="trade-licence" className="serif-font" style={{ fontSize: '2.5rem', marginBottom: '24px', borderBottom: '2px solid var(--color-gold)', paddingBottom: '12px' }}>
              Business Trade Licence
            </h2>

            <h3 id="new-trade" className="serif-font" style={{ fontSize: '1.8rem', marginBottom: '16px' }}>
              New Trade Licence:
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '24px' }}>
              We will not stop at incorporating your company, we will ensure that we assist you in all approvals/permissions required to obtain a trading licence, which is a requirement to commence business here in the UAE.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '48px' }}>
              Whether it is a Dubai Economic Department (DED) licence or a licence in any of the Free Zones here in the UAE, you can be rest assured that you are in safe hands. We shall help you onboard your business by incorporating the company and obtaining a valid trade licence.
            </p>

            <h3 id="renewal" className="serif-font" style={{ fontSize: '1.8rem', marginBottom: '16px' }}>
              Renewal of Trade Licence:
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '48px' }}>
              A valid licence at all times is very important for seamless conduct of your business. We shall actively track the expiries of your trade licence and ensure they are renewed after obtained all relevant approvals/permissions required for the renewal of the licence.
            </p>

            <h3 id="modification" className="serif-font" style={{ fontSize: '1.8rem', marginBottom: '16px' }}>
              Modification &amp; Cancellation of Trade License
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '64px' }}>
              We are here to support your business as it evolves. Whether you need to amend activities, change sponsors, update your address, or make any other license modifications, we handle all authority approvals seamlessly. Should you need to cancel your license or liquidate your company, we ensure a smooth, hassle-free exit by managing every legal and regulatory requirement from start to finish.
            </p>

            <h2 id="visa-services" className="serif-font" style={{ fontSize: '2.5rem', marginBottom: '24px', borderBottom: '2px solid var(--color-gold)', paddingBottom: '12px', marginTop: '64px' }}>
              Visa Services
            </h2>

            <h3 id="residence-visa" className="serif-font" style={{ fontSize: '1.8rem', marginBottom: '16px' }}>
              Residence Visa:
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '48px' }}>
              We organise residence visa for yourself and your dependents. Every expatriate living here in the UAE needs to have a residence visa. We can organise an Investor visa after incorporating your company and obtaining a trade licence. After which, we can assist with residence visas for your dependents.
            </p>

            <h3 id="employee-visas" className="serif-font" style={{ fontSize: '1.8rem', marginBottom: '16px' }}>
              Employee Visas:
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '48px' }}>
              You may need to employ workforce to manage and run your business. We can organise and process visas for them under your company sponsorship. All regulatory proceses, including obtaining visa, medical, and obtaining Emirates IDs for each of them can be organised.
            </p>

            <h3 id="golden-visa" className="serif-font" style={{ fontSize: '1.8rem', marginBottom: '16px' }}>
              Golden Visa:
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '24px' }}>
              The UAE&apos;s &apos;Golden visa&apos; is a long-term residence visa which enables foreign talents to live, work or study in the UAE while enjoying exclusive benefits which include:
            </p>
            <ul style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '24px', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '12px' }}>A long-term, renewable residence visa valid for 5 or 10 years</li>
              <li style={{ marginBottom: '12px' }}>The privilege of not needing a sponsor</li>
              <li style={{ marginBottom: '12px' }}>The ability to stay outside the UAE for more than the usual period of six months in order to keep their residence visa valid</li>
              <li style={{ marginBottom: '12px' }}>The ability to sponsor their family members, including spouses and children regardless of their ages</li>
              <li style={{ marginBottom: '12px' }}>The ability to sponsor unlimited number of domestic helpers</li>
              <li style={{ marginBottom: '12px' }}>The permit for family members to stay in the UAE until the end of their permit duration, if the primary holder of the Golden visa passes away.</li>
            </ul>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '64px' }}>
              We can assist you to obtain your Golden Visa, which is a special privilege provided by the Government of UAE.
            </p>
            <h2 id="bank-account" className="serif-font" style={{ fontSize: '2.5rem', marginBottom: '24px', borderBottom: '2px solid var(--color-gold)', paddingBottom: '12px', marginTop: '64px' }}>
              Corporate Banking Services
            </h2>

            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '24px' }}>
              Once your company is registered and your trade license is issued, we guide you through opening a bank account with leading UAE financial institutions.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '24px' }}>
              Navigating banking options to find the right fit for your business size and industry can be challenging. We streamline this process, handling the complexities to ensure a seamless onboarding experience with the ideal banking partner. Beyond your corporate accounts, we also assist with securing personal bank accounts for you and your employees.
            </p>

            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '24px' }}>
              <strong>Our process is simple.</strong>
            </p>
            <ul style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '64px', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '12px' }}>We assess your profile – profile of shareholder, line of business, turnover, suppliers, operating countries, customers, banking requirements, etc. and then advice the right account with the right banking partner.</li>
              <li style={{ marginBottom: '12px' }}>We coordinate with the Bank and ensure the entire process if complete. We can onboard the relationship both in person and online.</li>
              <li style={{ marginBottom: '12px' }}>Provide necessary documentation to the bank. We shall coordinate on your behalf and provide all documents required for opening the account, such as Company Legal documents (Trade Licence, Memorandum and Articles of Association, etc.), Profile of the company and shareholders, Bank statements, etc.</li>
              <li style={{ marginBottom: '12px' }}>We will coordinate with the Bank and ensure seamless onboarding of your business bank account</li>
              <li style={{ marginBottom: '12px' }}>We will ensure opening of your Personal account and the accounts of your employees, wherever required.</li>
            </ul>

            <h2 id="accounting-tax" className="serif-font" style={{ fontSize: '2.5rem', marginBottom: '24px', borderBottom: '2px solid var(--color-gold)', paddingBottom: '12px', marginTop: '64px' }}>
              Accounting / Tax
            </h2>

            <h3 id="accounting" className="serif-font" style={{ fontSize: '1.8rem', marginBottom: '16px' }}>
              Accounting & Book Keeping:
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '48px' }}>
              Updating and recording your financial transactions is a key requirement of any business. Our inhouse accountancy services can provide you the service of maintaining your books, reconciliation, financial reporting, payroll, VAT reports and audit support for your business. Having a full time accounting team would not be cost effective, when the same can be done efficiently and at a lower cost.
            </p>

            <h3 id="vat" className="serif-font" style={{ fontSize: '1.8rem', marginBottom: '16px' }}>
              VAT Registration and VAT payments/Returns:
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '24px' }}>
              Value Added Tax (VAT) was introduced in the UAE since January 1 2018. An effective 5% is charged on most goods and services.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '24px' }}>
              We will ensure that you are registered for VAT with the FTA, while ensuring to check your eligibilities, exemptions. We shall complete the registration process and provide you with a TRN (Tax Registration Number) Certificate. We shall help you create an online account in the FTA portal and assist in filing quarterly VAT returns and making VAT payments. Refunds, wherever applicable, can be organised too.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '48px' }}>
              We act as your link to ensure that you meet the regulatory requirements of the country seamlessly and effortlessly.
            </p>

            <h3 id="corporate-tax" className="serif-font" style={{ fontSize: '1.8rem', marginBottom: '16px' }}>
              Corporate Tax:
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '24px' }}>
              Corporate Tax, as the name suggest, is levied on the net profit of the business which are resident in the country. This came into effect from June 2023 and companies are liable for tax from 1st January 2024.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '64px' }}>
              We will ensure you are registered for Corporate Tax with the FTA and assist you in payment of your tax obligations and filing necessary returns when applicable.
            </p>

            <h2 id="merchant-banking" className="serif-font" style={{ fontSize: '2.5rem', marginBottom: '24px', borderBottom: '2px solid var(--color-gold)', paddingBottom: '12px', marginTop: '64px' }}>
              Merchant Banking Services
            </h2>

            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '24px' }}>
              Most business who deal with retail clients or are in the E-commerce business are in need of Merchant Banking services.
            </p>

            <h3 id="pos" className="serif-font" style={{ fontSize: '1.8rem', marginBottom: '16px' }}>
              POS (Point of Sale) Machines:
            </h3>
            <ul style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '48px', paddingLeft: '20px' }}>
              <li>We can assist you with the best product at the most competitive price. This will ensure seamless management of your receivables at reduced costs too.</li>
            </ul>

            <h3 id="payment-gateway" className="serif-font" style={{ fontSize: '1.8rem', marginBottom: '16px' }}>
              Payment Gateway services
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '24px' }}>
              If you are in the E-commerce business or get clients to buy through your website and or Apps, we can arrange for the payment gateway with the best provider at the most competitive price.
            </p>
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
