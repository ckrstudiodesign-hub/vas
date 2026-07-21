const fs = require('fs');
const path = require('path');

// Update navbars in all HTML files
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
for (const f of files) {
    let content = fs.readFileSync(f, 'utf8');
    
    // Desktop navbar
    content = content.replace(/<a href="#">Business Finance<\/a>/g, '<a href="business-finance.html">Business Finance</a>');
    
    // Mobile navbar
    content = content.replace(/<a href="#" (style="[^"]*")>Business Finance<\/a>/g, '<a href="business-finance.html" $1>Business Finance</a>');
    
    fs.writeFileSync(f, content, 'utf8');
}

// Update business-finance.html content
let resContent = fs.readFileSync('business-finance.html', 'utf8');

// Title
resContent = resContent.replace(
    /<title>Balance transfer \\\/ Refinance - VAS Corporate Services<\/title>/,
    '<title>Business Finance - VAS Corporate Services</title>'
);

// Hero Title
resContent = resContent.replace(
    /<h1 class="hero-headline serif-font" style="color: white; font-size: 4rem; margin: 0;">Balance Transfer \/ Refinance<\/h1>/,
    '<h1 class="hero-headline serif-font" style="color: white; font-size: 4rem; margin: 0;">Business Finance</h1>'
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
                
                <h2 class="serif-font" style="font-size: 2.5rem; margin-bottom: 24px;">Business Finance</h2>
                <p style="font-size: 1.1rem; line-height: 1.8; color: var(--color-dark-grey); margin-bottom: 24px;">
                    Whatever your business, we understand your finance needs. Growing businesses need working capital and short-term funding. We take care of them.
                </p>
                <p style="font-size: 1.1rem; line-height: 1.8; color: var(--color-dark-grey); margin-bottom: 48px;">
                    We analyse your needs, suggest the best products from different lenders and work towards achieving your goals.
                </p>

            </div>
        </div>
    </section>`;
    
    resContent = resContent.substring(0, startIndex) + newContent + resContent.substring(endIndex);
    fs.writeFileSync('business-finance.html', resContent, 'utf8');
}

console.log("Business Finance updates applied successfully.");
