import React from 'react';
import ContactSection from '@/components/sections/ContactSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Zone Company Formation in UAE | VAS Consultants',
  description: 'Setup your UAE Free Zone company with 100% foreign ownership, zero corporate and personal tax, full capital repatriation, and flexi-desk options across 50+ free zones.',
};

export default function FreezonePage() {
  return (
    <>
      <section className="about-hero-simple" style={{ background: "url('/images/navbar/Meydan%20Free%20Zone.jpeg') center/cover no-repeat", position: 'relative', padding: '120px 0 80px', textAlign: 'center' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="hero-headline serif-font" style={{ color: 'white', fontSize: '4rem', margin: 0 }}>
            Free Zone Company Formation
          </h1>
        </div>
      </section>

      <section className="section-padding bg-white" style={{ paddingTop: '80px' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="serif-font" style={{ fontSize: '2.5rem', marginBottom: '24px' }}>
              Overview
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '24px' }}>
              Free Zones are specialized economic designated areas located across every emirate in the UAE. Many are tailored to specific industries—such as media, tech, aviation, or commodities—offering dedicated facilities and services. With over 50 Free Zones available, the UAE provides an ideal ecosystem for international investors.
            </p>

            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '24px' }}>
              These Free Trade Zones offer a variety of advantages. Prominent among them are:
            </p>
            <ul style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '48px', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '12px' }}>100% Foreign Ownership. You retain full ownership.</li>
              <li style={{ marginBottom: '12px' }}>Repatriation of Capital and Profits without any restrictions.</li>
              <li style={{ marginBottom: '12px' }}>Name the activity, the same is covered under Free Zone regulations.</li>
              <li style={{ marginBottom: '12px' }}>Professional set up.</li>
              <li style={{ marginBottom: '12px' }}>Logistic facilties.</li>
              <li style={{ marginBottom: '12px' }}>Provision of offices, factories, warehouses, as per your requirements.</li>
              <li style={{ marginBottom: '12px' }}>Provision of Flexi desk for start ups - No requirement of physical office.</li>
              <li style={{ marginBottom: '12px' }}>Flexibility to operate outside the Free Zone premises.</li>
              <li style={{ marginBottom: '12px' }}>No restrictions on currencies.</li>
              <li style={{ marginBottom: '12px' }}>Corporate and Personal Tax exemptions.</li>
              <li style={{ marginBottom: '12px' }}>Specialised Free Zones for certain businesses.</li>
              <li style={{ marginBottom: '12px' }}>Efficient labour and immigration requirements.</li>
              <li style={{ marginBottom: '12px' }}>A one-stop-shop approach for all your legal and regulatory requirements, including Trade Licences, Approvals, Labour, Immigration, Taxation, and more.</li>
              <li style={{ marginBottom: '12px' }}>And the list goes on and on...</li>
            </ul>

            <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', margin: '48px 0' }} />

            <h2 className="serif-font" style={{ fontSize: '2.5rem', marginBottom: '24px' }}>
              Process
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '24px' }}>
              Once you have identified the activity and the Free Zone you wish to establish your business, you can leave the rest to us.
            </p>
            <div style={{ marginBottom: '48px' }}>
              <div style={{ marginBottom: '24px', padding: '24px', background: 'var(--color-light-grey)', borderRadius: '12px', borderLeft: '4px solid var(--color-gold)' }}>
                <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--color-dark-grey)', margin: 0 }}>
                  If the company is owned by a single shareholder/company, you can register your company as a <strong>FZE</strong>, i.e. Free Zone Establishment.
                </p>
              </div>
              <div style={{ marginBottom: '24px', padding: '24px', background: 'var(--color-light-grey)', borderRadius: '12px', borderLeft: '4px solid var(--color-gold)' }}>
                <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--color-dark-grey)', margin: 0 }}>
                  If the company has more than one individual shareholders/companies, you can register your company as a <strong>FZC or FZLLC</strong> i.e. Free Zone company or Free Zone Limited Liability Company.
                </p>
              </div>
              <div style={{ marginBottom: '24px', padding: '24px', background: 'var(--color-light-grey)', borderRadius: '12px', borderLeft: '4px solid var(--color-gold)' }}>
                <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--color-dark-grey)', margin: 0 }}>
                  If you wish to open a branch or subsidiary of your company based outside the UAE, rather than incorporating a new company, the same can be organised.
                </p>
              </div>
            </div>

            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '24px' }}>
              With over 50 plus Free Zones, the UAE has become a business hub for foreign investors. Some of the well known Free Zones are:
            </p>
            <ul style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '48px', paddingLeft: '20px' }}>
              <li><strong>IFZA</strong> – International Free Zone Authority</li>
              <li><strong>DMCC</strong> - Dubai Multi Commodities Center</li>
              <li><strong>JAFZA</strong> – Jebel Ali Free Zone Authority</li>
              <li><strong>SHAMS</strong> – Sharjah Media City Authority</li>
              <li><strong>RAKEZ</strong> – Ras Al Khaimah Economic Zone</li>
              <li>And the list goes on...</li>
            </ul>

            <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', margin: '48px 0' }} />

            <h2 className="serif-font" style={{ fontSize: '2.5rem', marginBottom: '24px' }}>
              Popular Free Zones
            </h2>

            <h3 id="ifza" className="serif-font" style={{ fontSize: '1.8rem', marginBottom: '16px' }}>
              IFZA (International Free Zone Authority)
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '24px' }}>
              Set up in 2018, IFZA has tied up with Dubai Silicon Authority to assist business to set up with ease of doing business and with high level of flexibuility.
            </p>
            <ul style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '48px', paddingLeft: '20px' }}>
              <li>100% ownership of commercial enterprises</li>
              <li>100% repatriation of capital and profit</li>
              <li>Tax-free import and export of goods in and out of the Free Zone</li>
              <li>No paid-up share capital requirement</li>
              <li>Incorporation of FZCOs or the registration of branch offices.</li>
              <li>Low tax rates</li>
            </ul>

            <h3 id="rakez" className="serif-font" style={{ fontSize: '1.8rem', marginBottom: '16px' }}>
              RAKEZ (Ras Al Khaimah Economic Zone)
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '24px' }}>
              Situated in the heart of Ras Al Khaimah, a prominent Emirate in the northern part of the UAE. RAKEZ offers customizable solutions with an efficient system. RAKEZ offers a complete package of service to onboard your business and run it smoothly. Name the industry, you will find them here. From Start ups to well established SMEs and Industries. They cater to trading, manufacturing, catering to media. Special facilities available to consultants with remote working and flexi desk options.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '12px' }}>Special packages available which include:</p>
            <ul style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '48px', paddingLeft: '20px' }}>
              <li>Business Licence</li>
              <li>UAE residence Visa</li>
              <li>Employee and third party visa processing.</li>
              <li>Emirates ID</li>
              <li>Workstation – Flexi Desk.</li>
            </ul>

            <h3 id="dmcc" className="serif-font" style={{ fontSize: '1.8rem', marginBottom: '16px' }}>
              DMCC (Dubai Multi Commodities Centre)
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '24px' }}>
              Headquartered in Dubai, DMCC is the world&apos;s leading business hub and an international centre for trade, commerce and innovation. Won the Local Free Zone of the Year and No 1 Trade Hub in a row for 9 years.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '24px' }}>
              Established in 2002 to establish Dubai as a commodity trading and enterprise gateway to the Middle East and beyond, DMCC has since grown to become one of its most important economic drivers, today accounting for over 11% of all foreign direct investment in the emirate. DMCC is also one of the city&apos;s most dynamic and exciting destinations, home to world-class mixed-use developments Jumeirah Lakes Towers and Uptown Dubai, which together accommodate more than 100,000 working professionals, residents and visitors.
            </p>
            <ul style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '48px', paddingLeft: '20px' }}>
              <li>Allows 100% foreign ownership.</li>
              <li>Absence of income tax.</li>
              <li>No physical presence in the UAE is required to incorporate your company.</li>
              <li>Cost-effective Business Setup Packages</li>
              <li>Fast &amp; easy Freezone company incorporation</li>
              <li>Offers Customized Office Setup Solutions including Flexi Desk, Executive Office</li>
              <li>Consultancy, Service and Trading options</li>
              <li>Full repatriation of company profits and capital</li>
              <li>Ability to incorporate holding companies</li>
            </ul>

            <h3 id="shams" className="serif-font" style={{ fontSize: '1.8rem', marginBottom: '16px' }}>
              SHAMS (Sharjah Media City)
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '24px' }}>
              Established in 2017, is located just five minutes from Sharjah International Airport and 15 minutes from Dubai International Airport. It is formed to assist and facilitate the growth of the Media and Creative business. Sharjah Media City issues licences for consultancy, trading, service and manufacturing sector. It is home to over 300 business activities, covering everything all segment of business.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '12px' }}><strong>Why Shams:</strong></p>
            <ul style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-dark-grey)', marginBottom: '48px', paddingLeft: '20px' }}>
              <li>100% ownership allowed.</li>
              <li>Highly competitive company set up fees.</li>
              <li>100% repatriation of capital/profits.</li>
              <li>Specialised benefits for Media and Creativity businesses.</li>
              <li>Easy set up process</li>
              <li>Flexi offices and desk space available.</li>
              <li>Range of business activities covered.</li>
              <li>Ideal location – located between Sharjah and Dubai airport.</li>
            </ul>

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
