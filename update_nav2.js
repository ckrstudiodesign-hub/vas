const fs = require('fs');
const path = require('path');

// Update navbars in all HTML files
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
for (const f of files) {
    let content = fs.readFileSync(f, 'utf8');
    
    // Desktop navbar
    content = content.replace(/<a href="#">Commercial Mortgage service<\/a>/g, '<a href="commercial-mortgage.html">Commercial Mortgage service</a>');
    
    // Mobile navbar
    content = content.replace(/<a href="#" (style="[^"]*")>Commercial Mortgage service<\/a>/g, '<a href="commercial-mortgage.html" $1>Commercial Mortgage service</a>');
    
    fs.writeFileSync(f, content, 'utf8');
}

// Update commercial-mortgage.html content
let resContent = fs.readFileSync('commercial-mortgage.html', 'utf8');

// Title
resContent = resContent.replace(
    /<title>Residential Mortgage - VAS Corporate Services<\/title>/,
    '<title>Commercial Mortgage - VAS Corporate Services</title>'
);

// Hero Title
resContent = resContent.replace(
    /<h1 class="hero-headline serif-font" style="color: white; font-size: 4rem; margin: 0;">Residential Mortgage<\/h1>/,
    '<h1 class="hero-headline serif-font" style="color: white; font-size: 4rem; margin: 0;">Commercial Mortgage</h1>'
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
                
                <h2 class="serif-font" style="font-size: 2.5rem; margin-bottom: 24px;">Commercial Mortgage service</h2>
                <p style="font-size: 1.1rem; line-height: 1.8; color: var(--color-dark-grey); margin-bottom: 24px;">
                    Whether you’re looking to purchase office space, retail outlets, or industrial properties, we have the expertise and resources to guide you through the mortgage process from start to finish.
                </p>
                <p style="font-size: 1.1rem; line-height: 1.8; color: var(--color-dark-grey); margin-bottom: 24px;">
                    Acquiring commercial real estate is a complex process. It is important to keep in mind the Location, Free Zone, freehold or leasehold, Type of industry, legal and documentation, etc, before you embark on finalising the asset.
                </p>
                <p style="font-size: 1.1rem; line-height: 1.8; color: var(--color-dark-grey); margin-bottom: 48px;">
                    We provide you guidance and ensure that we organise the appropriate financing solution for your needs.
                </p>

            </div>
        </div>
    </section>`;
    
    resContent = resContent.substring(0, startIndex) + newContent + resContent.substring(endIndex);
    fs.writeFileSync('commercial-mortgage.html', resContent, 'utf8');
}

console.log("Commercial Mortgage updates applied successfully.");
