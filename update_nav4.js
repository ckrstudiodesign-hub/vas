const fs = require('fs');
const path = require('path');

// Update navbars in all HTML files
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
for (const f of files) {
    let content = fs.readFileSync(f, 'utf8');
    
    // Desktop navbar
    content = content.replace(/<a href="#">Balance transfer \/ Refinance<\/a>/g, '<a href="balance-transfer-refinance.html">Balance transfer / Refinance</a>');
    
    // Mobile navbar
    content = content.replace(/<a href="#" (style="[^"]*")>Balance transfer \/ Refinance<\/a>/g, '<a href="balance-transfer-refinance.html" $1>Balance transfer / Refinance</a>');
    
    fs.writeFileSync(f, content, 'utf8');
}

// Update balance-transfer-refinance.html content
let resContent = fs.readFileSync('balance-transfer-refinance.html', 'utf8');

// Title
resContent = resContent.replace(
    /<title>Non-Resident Mortgage - VAS Corporate Services<\/title>/,
    '<title>Balance transfer \/ Refinance - VAS Corporate Services</title>'
);

// Hero Title
resContent = resContent.replace(
    /<h1 class="hero-headline serif-font" style="color: white; font-size: 4rem; margin: 0;">Non-Resident Mortgage<\/h1>/,
    '<h1 class="hero-headline serif-font" style="color: white; font-size: 4rem; margin: 0;">Balance Transfer / Refinance</h1>'
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
                
                <h2 class="serif-font" style="font-size: 2.5rem; margin-bottom: 24px;">Balance Transfer / Refinance</h2>
                <p style="font-size: 1.1rem; line-height: 1.8; color: var(--color-dark-grey); margin-bottom: 24px;">
                    We provide you guidance to transfer your mortgage to maximising your resources and reducing your cost outlay. Whatever your objective—whether you are looking for lower interest costs, reducing your monthly outlays, or consolidating your debt—we have the expertise and resources to assist you every step of the way.
                </p>
                <p style="font-size: 1.1rem; line-height: 1.8; color: var(--color-dark-grey); margin-bottom: 48px;">
                    If you wish to refinance and cash out your equity in the property, for the purpose of acquiring more properties and/or to assist in your business, we can provide the right solutions and ensure 
                </p>

            </div>
        </div>
    </section>`;
    
    resContent = resContent.substring(0, startIndex) + newContent + resContent.substring(endIndex);
    fs.writeFileSync('balance-transfer-refinance.html', resContent, 'utf8');
}

console.log("Balance Transfer / Refinance updates applied successfully.");
