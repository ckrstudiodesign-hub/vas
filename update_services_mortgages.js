const fs = require('fs');

let resContent = fs.readFileSync('services-mortgages.html', 'utf8');

// Title
resContent = resContent.replace(
    /<title>Accounting \\\/ Tax - VAS Corporate Services<\/title>/,
    '<title>Mortgages & Business Finance - VAS Corporate Services</title>'
);

// Hero Title
resContent = resContent.replace(
    /<h1 class="hero-headline serif-font" style="color: white; font-size: 4rem; margin: 0;">Accounting \/ Tax<\/h1>/,
    '<h1 class="hero-headline serif-font" style="color: white; font-size: 4rem; margin: 0;">Mortgages & Business Finance</h1>'
);

// Content
const oldContentStart = '<section class="section-padding bg-white" style="padding-top: 80px;">';
const oldContentEnd = '</section>';
const startIndex = resContent.indexOf(oldContentStart);
let endIndex = resContent.indexOf(oldContentEnd, startIndex);
if (startIndex !== -1 && endIndex !== -1) {
    endIndex += oldContentEnd.length;
    
    const newContent = `<section class="section-padding bg-white" style="padding-top: 80px;">
        <div class="container">
            <div style="max-width: 800px; margin: 0 auto;">
                
                <h2 class="serif-font" style="font-size: 2.5rem; margin-bottom: 24px;">Mortgages & Business Finance</h2>
                <p style="font-size: 1.1rem; line-height: 1.8; color: var(--color-dark-grey); margin-bottom: 32px;">
                    Whether you are buying an apartment/villa for your dream home or investing in an office or a factory/warehouse, we specialise in providing tailored solutions to help you secure the appropriate finance.
                </p>

                <div class="licence-cards-container" style="display: grid; grid-template-columns: 1fr; gap: 24px; margin-bottom: 48px;">
                    <a href="residential-mortgage.html" style="text-decoration: none; color: inherit;">
                        <div class="licence-card" style="padding: 24px; border: 1px solid rgba(0,0,0,0.1); border-radius: 12px; transition: transform 0.3s ease;">
                            <h4 style="font-size: 1.3rem; margin-bottom: 8px; color: var(--color-charcoal);">Residential Mortgage</h4>
                            <p style="font-size: 1rem; color: var(--color-dark-grey); margin: 0;">Tailored solutions to help you secure the financing you need for your dream home in the UAE.</p>
                        </div>
                    </a>

                    <a href="commercial-mortgage.html" style="text-decoration: none; color: inherit;">
                        <div class="licence-card" style="padding: 24px; border: 1px solid rgba(0,0,0,0.1); border-radius: 12px; transition: transform 0.3s ease;">
                            <h4 style="font-size: 1.3rem; margin-bottom: 8px; color: var(--color-charcoal);">Commercial Mortgage</h4>
                            <p style="font-size: 1rem; color: var(--color-dark-grey); margin: 0;">Expert guidance for purchasing office space, retail outlets, or industrial properties.</p>
                        </div>
                    </a>

                    <a href="non-resident-mortgage.html" style="text-decoration: none; color: inherit;">
                        <div class="licence-card" style="padding: 24px; border: 1px solid rgba(0,0,0,0.1); border-radius: 12px; transition: transform 0.3s ease;">
                            <h4 style="font-size: 1.3rem; margin-bottom: 8px; color: var(--color-charcoal);">Non-Resident Mortgage</h4>
                            <p style="font-size: 1rem; color: var(--color-dark-grey); margin: 0;">Seamless and stress-free financing options tailored specifically for non-residents.</p>
                        </div>
                    </a>

                    <a href="balance-transfer-refinance.html" style="text-decoration: none; color: inherit;">
                        <div class="licence-card" style="padding: 24px; border: 1px solid rgba(0,0,0,0.1); border-radius: 12px; transition: transform 0.3s ease;">
                            <h4 style="font-size: 1.3rem; margin-bottom: 8px; color: var(--color-charcoal);">Balance Transfer / Refinance</h4>
                            <p style="font-size: 1rem; color: var(--color-dark-grey); margin: 0;">Guidance to transfer your mortgage to maximize resources and reduce your cost outlay.</p>
                        </div>
                    </a>

                    <a href="business-finance.html" style="text-decoration: none; color: inherit;">
                        <div class="licence-card" style="padding: 24px; border: 1px solid rgba(0,0,0,0.1); border-radius: 12px; transition: transform 0.3s ease;">
                            <h4 style="font-size: 1.3rem; margin-bottom: 8px; color: var(--color-charcoal);">Business Finance</h4>
                            <p style="font-size: 1rem; color: var(--color-dark-grey); margin: 0;">Working capital and short-term funding solutions to support your growing business.</p>
                        </div>
                    </a>
                </div>

            </div>
        </div>
    </section>`;
    
    resContent = resContent.substring(0, startIndex) + newContent + resContent.substring(endIndex);
    fs.writeFileSync('services-mortgages.html', resContent, 'utf8');
}

console.log("services-mortgages.html created successfully.");
