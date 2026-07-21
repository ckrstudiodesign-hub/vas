document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isOpen = question.classList.contains('active');
            
            // Close all other answers
            faqQuestions.forEach(q => {
                q.classList.remove('active');
                q.nextElementSibling.style.maxHeight = null;
            });
            
            // Toggle current answer
            if (!isOpen) {
                question.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });

    // Animated Counters
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // The lower the slower

    const animateCounters = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(animateCounters, 10);
            } else {
                counter.innerText = target;
            }
        });
    };

    // Intersection Observer to trigger counter animation when in view
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const statsSection = document.querySelector('.statistics');
    if (statsSection) {
        observer.observe(statsSection);
    }

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    
    if (mobileMenuBtn && mobileNavOverlay) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileNavOverlay.classList.add('active');
        });
        
        if (mobileMenuClose) {
            mobileMenuClose.addEventListener('click', () => {
                mobileNavOverlay.classList.remove('active');
            });
        }

        // Close menu when clicking a link, but toggle if it's a dropdown headline
        const mobileLinks = mobileNavOverlay.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const dropdown = link.closest('.nav-dropdown');
                // Check if this link is a dropdown headline
                if (dropdown && link.nextElementSibling && link.nextElementSibling.classList.contains('dropdown-content')) {
                    e.preventDefault(); // Prevent navigation
                    dropdown.classList.toggle('active'); // Toggle dropdown
                    return; // Don't close the menu
                }
                
                // For normal links, close the menu
                mobileNavOverlay.classList.remove('active');
            });
        });
    }

    // Footer Accordions for Mobile
    const footerHeaders = document.querySelectorAll('.footer-col h4, .footer-links h4');
    footerHeaders.forEach(header => {
        header.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                const parent = header.parentElement;
                parent.classList.toggle('active');
            }
        });
    });

    // Mobile Auto-Slider (changes cards every 3 seconds)
    const autoSliders = document.querySelectorAll('.auto-slider');
    if (autoSliders.length > 0) {
        setInterval(() => {
            if (window.innerWidth <= 768) {
                autoSliders.forEach(slider => {
                    const scrollAmount = slider.clientWidth * 0.85; // Roughly the width of one 85vw card
                    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
                        slider.scrollTo({ left: 0, behavior: 'smooth' });
                    } else {
                        slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                    }
                });
            }
        }, 3000);
    }
    // Typing animation for contact form textarea placeholder
    const contactTextarea = document.querySelector('#contact textarea');
    if (contactTextarea) {
        const phrases = [
            "How can we help you?",
            "I'd like to set up a Mainland company...",
            "Looking for Free Zone options in Dubai...",
            "Interested in the UAE Golden Visa...",
            "I need help with corporate banking..."
        ];
        
        let currentPhraseIndex = 0;
        let currentCharIndex = 0;
        let isDeleting = false;
        let typingTimeout;
        
        function typePlaceholder() {
            if (contactTextarea.value.length > 0) return;

            const currentPhrase = phrases[currentPhraseIndex];
            let typingSpeed = isDeleting ? 30 : 60;
            
            if (isDeleting) {
                contactTextarea.setAttribute('placeholder', currentPhrase.substring(0, currentCharIndex - 1));
                currentCharIndex--;
            } else {
                contactTextarea.setAttribute('placeholder', currentPhrase.substring(0, currentCharIndex + 1) + "|");
                currentCharIndex++;
            }
            
            // Remove the pipe cursor if fully deleted
            if (isDeleting && currentCharIndex === 0) {
                contactTextarea.setAttribute('placeholder', "");
            }

            if (!isDeleting && currentCharIndex === currentPhrase.length) {
                // Remove cursor at the end before waiting
                contactTextarea.setAttribute('placeholder', currentPhrase);
                isDeleting = true;
                typingSpeed = 2000; // wait 2s
            } else if (isDeleting && currentCharIndex === 0) {
                isDeleting = false;
                currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
                typingSpeed = 500; // wait 0.5s before typing next
            }
            
            typingTimeout = setTimeout(typePlaceholder, typingSpeed);
        }
        
        setTimeout(typePlaceholder, 1000);
        
        contactTextarea.addEventListener('focus', () => {
            clearTimeout(typingTimeout);
            contactTextarea.setAttribute('placeholder', 'Type your requirements here...');
        });
        
        contactTextarea.addEventListener('blur', () => {
            if (contactTextarea.value.length === 0) {
                isDeleting = false;
                currentCharIndex = 0;
                typePlaceholder();
            }
        });
    }
});

// Form Logic
document.addEventListener('DOMContentLoaded', () => {
    // Form Sanitization and Validation
    function sanitizeHTML(str) {
        const temp = document.createElement('div');
        temp.textContent = str;
        return temp.innerHTML;
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Handle all forms (prevent default, validate, sanitize, check honeypot)
    const allForms = document.querySelectorAll('form');
    allForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // 1. Honeypot Check for Spam Protection
            const honeypot = form.querySelector('input[name="_honey"]');
            if (honeypot && honeypot.value !== '') {
                // Silently reject spam
                console.warn('Spam detected');
                return;
            }

            // 2. Validate Inputs
            let isValid = true;
            const emailInput = form.querySelector('input[type="email"]');
            if (emailInput && emailInput.value) {
                if (!validateEmail(emailInput.value)) {
                    alert('Please enter a valid email address.');
                    isValid = false;
                }
            }

            const textInputs = form.querySelectorAll('input[type="text"], input[type="tel"], textarea');
            textInputs.forEach(input => {
                if (input.name === '_honey') return; // skip honeypot
                // Basic sanitization
                input.value = sanitizeHTML(input.value);
            });

            if (!isValid) return;

            // Optional: Process the form via fetch/API here
            

            form.reset();
        });
    });
});

// WhatsApp Tooltip Typing Animation
document.addEventListener('DOMContentLoaded', () => {
    const tooltipText = document.getElementById('whatsapp-typing-text');
    if (!tooltipText) return;

    const phrases = [
        "Hello !",
        "Planning to start a business in Dubai ?",
        "Click here for expert advice !"
    ];
    
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function typeTooltip() {
        const currentPhrase = phrases[currentPhraseIndex];
        
        if (isDeleting) {
            tooltipText.textContent = currentPhrase.substring(0, currentCharIndex - 1);
            currentCharIndex--;
            typingSpeed = 30; // faster deletion
        } else {
            tooltipText.textContent = currentPhrase.substring(0, currentCharIndex + 1);
            currentCharIndex++;
            typingSpeed = 60; // typing speed
        }

        if (!isDeleting && currentCharIndex === currentPhrase.length) {
            isDeleting = true;
            typingSpeed = 2000; // Wait 2s before deleting
        } else if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            typingSpeed = 500; // Wait 0.5s before typing next
        }
        
        setTimeout(typeTooltip, typingSpeed);
    }
    
    // Start typing after initial slide-in animation finishes
    setTimeout(typeTooltip, 1500); 

    // Licence Card Accordion
    const licenceCards = document.querySelectorAll('.licence-card-header');
    licenceCards.forEach(cardHeader => {
        cardHeader.addEventListener('click', () => {
            if (window.innerWidth <= 991) {
                const card = cardHeader.parentElement;
                // Optional: close other cards
                // document.querySelectorAll('.licence-card').forEach(c => {
                //     if(c !== card) c.classList.remove('active');
                // });
                card.classList.toggle('active');
            }
        });
    });
});
