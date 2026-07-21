const fs = require('fs');
const path = require('path');

// Update navbars in all HTML files
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
for (const f of files) {
    let content = fs.readFileSync(f, 'utf8');
    
    // Desktop navbar
    content = content.replace(/<a href="#">Residential Mortgage<\/a>/g, '<a href="residential-mortgage.html">Residential Mortgage</a>');
    
    // Mobile navbar
    content = content.replace(/<a href="#" (style="[^"]*")>Residential Mortgage<\/a>/g, '<a href="residential-mortgage.html" $1>Residential Mortgage</a>');
    
    fs.writeFileSync(f, content, 'utf8');
}

// Update residential-mortgage.html content
let resContent = fs.readFileSync('residential-mortgage.html', 'utf8');

// Title
resContent = resContent.replace(
    /<title>Mainland Company Formation - VAS Corporate Services<\/title>/,
    '<title>Residential Mortgage - VAS Corporate Services</title>'
);

// Hero Title
resContent = resContent.replace(
    /<h1 class="hero-headline serif-font" style="color: white; font-size: 4rem; margin: 0;">Mainland Company Formation<\/h1>/,
    '<h1 class="hero-headline serif-font" style="color: white; font-size: 4rem; margin: 0;">Residential Mortgage</h1>'
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
                
                <h2 class="serif-font" style="font-size: 2.5rem; margin-bottom: 24px;">Residential Mortgage</h2>
                <p style="font-size: 1.1rem; line-height: 1.8; color: var(--color-dark-grey); margin-bottom: 24px;">
                    Your dream of owning a home in the UAE can be fulfilled by our Residential Mortgage services. Whether you are buying an apartment, townhouse or villa, we have the right financing option for you.
                </p>
                <p style="font-size: 1.1rem; line-height: 1.8; color: var(--color-dark-grey); margin-bottom: 24px;">
                    Our speciality is in providing tailored solutions to help you secure the financing you need for your dream home. Our team will guide you through all the steps for a seamless and stress free experience.
                </p>
                <p style="font-size: 1.1rem; line-height: 1.8; color: var(--color-dark-grey); margin-bottom: 48px;">
                    It is important to find the right mortgage and we will explore different financing options, to your advantage.
                </p>

            </div>
        </div>
    </section>`;
    
    resContent = resContent.substring(0, startIndex) + newContent + resContent.substring(endIndex);
    fs.writeFileSync('residential-mortgage.html', resContent, 'utf8');
}

console.log("Updates applied successfully.");
