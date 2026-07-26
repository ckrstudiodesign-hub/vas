import { ContactFormData } from '@/types';

export function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

export function validatePhone(phone: string): boolean {
  // Allow international phone formats with plus, spaces, dashes, parentheses
  const re = /^[\d\s()+-]{6,20}$/;
  return re.test(String(phone).trim());
}

export function sanitizeInput(input: string): string {
  if (!input) return '';
  return input
    .trim()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
  sanitizedData?: ContactFormData;
}

export function validateAndSanitizeContactForm(data: Partial<ContactFormData>): ValidationResult {
  const errors: Record<string, string> = {};

  // Check honeypot for spam protection
  if (data._honey || data.botcheck) {
    errors.spam = 'Spam detected';
    return { isValid: false, errors };
  }

  const name = (data.name || '').trim();
  if (!name || name.length < 2) {
    errors.name = 'Please provide a valid name (at least 2 characters).';
  }

  const email = (data.email || '').trim();
  if (!email || !validateEmail(email)) {
    errors.email = 'Please provide a valid email address.';
  }

  const phone = (data.phone || '').trim();
  if (!phone || !validatePhone(phone)) {
    errors.phone = 'Please provide a valid phone number.';
  }

  const message = (data.message || '').trim();
  if (!message || message.length < 5) {
    errors.message = 'Please provide requirements or details (at least 5 characters).';
  }

  if (Object.keys(errors).length > 0) {
    return { isValid: false, errors };
  }

  return {
    isValid: true,
    errors: {},
    sanitizedData: {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      phone: sanitizeInput(phone),
      service: data.service ? sanitizeInput(data.service) : undefined,
      message: sanitizeInput(message),
    },
  };
}
