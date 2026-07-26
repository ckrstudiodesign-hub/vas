'use client';

import { useState, useEffect } from 'react';

export interface UseTypewriterOptions {
  phrases: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
  isPaused?: boolean;
}

export function useTypewriter({
  phrases,
  typeSpeed = 60,
  deleteSpeed = 30,
  pauseDuration = 2000,
  isPaused = false,
}: UseTypewriterOptions): string {
  const [text, setText] = useState(phrases[0] || '');

  useEffect(() => {
    if (isPaused || phrases.length === 0) return;

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

      setText(currentPhrase.substring(0, charIdx) + (isDeleting ? '' : '|'));

      let speed = isDeleting ? deleteSpeed : typeSpeed;

      if (!isDeleting && charIdx === currentPhrase.length) {
        isDeleting = true;
        speed = pauseDuration;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        currentPhraseIdx = (currentPhraseIdx + 1) % phrases.length;
        speed = 500;
      }

      timeoutId = setTimeout(typeLoop, speed);
    };

    timeoutId = setTimeout(typeLoop, 1000);
    return () => clearTimeout(timeoutId);
  }, [phrases, typeSpeed, deleteSpeed, pauseDuration, isPaused]);

  return text;
}
