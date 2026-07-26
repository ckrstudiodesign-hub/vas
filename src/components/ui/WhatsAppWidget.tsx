'use client';

import React, { useState, useEffect } from 'react';
import { WHATSAPP_URL } from '@/lib/constants';

export default function WhatsAppWidget() {
  const [text, setText] = useState('');

  useEffect(() => {
    const phrases = [
      'Hello !',
      'Planning to start a business in Dubai ?',
      'Click here for expert advice !',
    ];

    let currentPhraseIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let timeoutId: NodeJS.Timeout;

    const typeLoop = () => {
      const currentPhrase = phrases[currentPhraseIdx];

      if (isDeleting) {
        charIdx--;
      } else {
        charIdx++;
      }

      setText(currentPhrase.substring(0, charIdx));

      let speed = isDeleting ? 30 : 60;

      if (!isDeleting && charIdx === currentPhrase.length) {
        isDeleting = true;
        speed = 2000;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        currentPhraseIdx = (currentPhraseIdx + 1) % phrases.length;
        speed = 500;
      }

      timeoutId = setTimeout(typeLoop, speed);
    };

    const initialDelay = setTimeout(typeLoop, 1500);
    return () => {
      clearTimeout(initialDelay);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="whatsapp-container">
      <div className="whatsapp-tooltip">
        <span>{text}</span>
        <span className="whatsapp-cursor">|</span>
      </div>
      <a
        href={WHATSAPP_URL}
        className="whatsapp-float"
        target="_blank"
        aria-label="Chat with us on WhatsApp"
        rel="noopener noreferrer"
      >
        <i className="ph-fill ph-whatsapp-logo"></i>
      </a>
    </div>
  );
}
