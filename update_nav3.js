const fs = require('fs');
const path = require('path');

// Update navbars in all HTML files
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
for (const f of files) {
    let content = fs.readFileSync(f, 'utf8');
    
    // Desktop navbar
    content = content.replace(/<a href="#">Non-Resident Mortgage<\/a>/g, '<a href="non-resident-mortgage.html">Non-Resident Mortgage</a>');
    
    // Mobile navbar
    content = content.replace(/<a href="#" (style="[^"]*")>Non-Resident Mortgage<\/a>/g, '<a href="non-resident-mortgage.html" $1>Non-Resident Mortgage</a>');
    
    fs.writeFileSync(f, content, 'utf8');
}

// Update non-resident-mortgage.html content
let resContent = fs.readFileSync('non-resident-mortgage.html', 'utf8');

// Title
resContent = resContent.replace(
    /<title>Commercial Mortgage - VAS Corporate Services<\/title>/,
    '<title>Non-Resident Mortgage - VAS Corporate Services</title>'
);

// Hero Title
resContent = resContent.replace(
    /<h1 class="hero-headline serif-font" style="color: white; font-size: 4rem; margin: 0;">Commercial Mortgage<\/h1>/,
    '<h1 class="hero-headline serif-font" style="color: white; font-size: 4rem; margin: 0;">Non-Resident Mortgage</h1>'
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
                
                <h2 class="serif-font" style="font-size: 2.5rem; margin-bottom: 24px;">Non-Resident Mortgage</h2>
                <p style="font-size: 1.1rem; line-height: 1.8; color: var(--color-dark-grey); margin-bottom: 24px;">
                    Non residents form a major portion of the clientele for property purchases in the UAE. Considering that most non residents do not reside here, we take extra care to ensure a seamless and stress free experience.
                </p>
                <p style="font-size: 1.1rem; line-height: 1.8; color: var(--color-dark-grey); margin-bottom: 48px;">
                    It is important to find the right mortgage and we will explore different financing options, to your advantage.
                </p>

            </div>
        </div>
    </section>`;
    
    resContent = resContent.substring(0, startIndex) + newContent + resContent.substring(endIndex);
    fs.writeFileSync('non-resident-mortgage.html', resContent, 'utf8');
}

console.log("Non-Resident Mortgage updates applied successfully.");
