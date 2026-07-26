'use client';

import React, { useState, useRef } from 'react';
import { SERVICE_OPTIONS } from '@/lib/constants';
import { validatePhone, validateEmail } from '@/lib/validation';
import { useTypewriter } from '@/hooks';
import { contactService, ApiServiceError } from '@/services/api';

const TYPEWRITER_PHRASES = [
  'How can we help you?',
  "I'd like to set up a Mainland company...",
  'Looking for Free Zone options in Dubai...',
  'Interested in the UAE Golden Visa...',
  'I need help with corporate banking...',
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    _honey: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: '',
  });

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const placeholderText = useTypewriter({
    phrases: TYPEWRITER_PHRASES,
    isPaused: isFocused || formData.message.length > 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      if (name === 'firstName' || name === 'lastName') {
        const fn = name === 'firstName' ? value : prev.firstName;
        const ln = name === 'lastName' ? value : prev.lastName;
        updated.name = `${fn} ${ln}`.trim();
      }
      return updated;
    });
    if (status.type) setStatus({ type: null, message: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side spam check
    if (formData._honey) return;

    if (!validateEmail(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    if (!validatePhone(formData.phone)) {
      setStatus({ type: 'error', message: 'Please enter a valid phone number.' });
      return;
    }

    setLoading(true);
    setStatus({ type: null, message: '' });

    try {
      const data = await contactService.submitForm(formData);

      if (data.success) {
        setStatus({
          type: 'success',
          message: 'Message Sent Successfully! Our advisor will contact you shortly.',
        });
        setFormData({ firstName: '', lastName: '', name: '', email: '', phone: '', service: '', message: '', _honey: '' });
      } else {
        setStatus({
          type: 'error',
          message: data.message || 'Something went wrong. Please try again.',
        });
      }
    } catch (error) {
      const msg = error instanceof ApiServiceError ? error.message : 'Could not submit form. Please check your network connection and try again.';
      setStatus({
        type: 'error',
        message: msg,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="section-tag">
              Get In Touch
            </span>
            <h2 className="serif-font">
              Ready to Start Your Business Journey?
            </h2>
            <p>
              Reach out to our experts today for a free consultation. We&apos;re here to make your company formation smooth and successful.
            </p>
            <div className="contact-methods">
              <div className="method-item">
                <div className="method-icon">
                  <i className="ph-fill ph-map-pin" style={{ fontSize: '1.5rem' }}></i>
                </div>
                <div>
                  <h4>Our Office</h4>
                  <p>Business Bay, Dubai<br />United Arab Emirates</p>
                </div>
              </div>
              <div className="method-item">
                <div className="method-icon">
                  <i className="ph-fill ph-envelope-simple" style={{ fontSize: '1.5rem' }}></i>
                </div>
                <div>
                  <h4>Email Us</h4>
                  <p>info@vasconsultants.ae</p>
                </div>
              </div>
              <div className="method-item">
                <div className="method-icon">
                  <i className="ph-fill ph-phone" style={{ fontSize: '1.5rem' }}></i>
                </div>
                <div>
                  <h4>Call Us</h4>
                  <p>+971 52 104 6611</p>
                </div>
              </div>
              <div className="method-item">
                <div className="method-icon">
                  <i className="ph-fill ph-whatsapp-logo" style={{ fontSize: '1.5rem' }}></i>
                </div>
                <div>
                  <h4>WhatsApp Us</h4>
                  <p>+971 50 564 5663</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            <form onSubmit={handleSubmit} noValidate>
              {/* Spam Honeypot */}
              <div className="sr-only" aria-hidden="true">
                <input type="text" name="_honey" value={formData._honey} onChange={handleChange} tabIndex={-1} autoComplete="off" />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                <div className="form-group">
                  <label htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                <div className="form-group">
                  <label htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+971 50 123 4567"
                    required
                  />
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: '20px' }}>
                <label htmlFor="service">
                  Interested Service
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Select a service</option>
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group" style={{ marginBottom: '28px' }}>
                <label htmlFor="message">
                  Tell us about your requirements...
                </label>
                <textarea
                  id="message"
                  ref={textareaRef}
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder={isFocused ? 'Type your requirements here...' : placeholderText}
                ></textarea>
              </div>

              {status.type && (
                <div
                  style={{
                    padding: '14px 18px',
                    borderRadius: '12px',
                    marginBottom: '20px',
                    backgroundColor: status.type === 'success' ? 'rgba(46, 125, 50, 0.2)' : 'rgba(211, 47, 47, 0.2)',
                    color: status.type === 'success' ? '#81c784' : '#e57373',
                    border: `1px solid ${status.type === 'success' ? '#2e7d32' : '#d32f2f'}`,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '0.95rem',
                  }}
                  role="alert"
                >
                  <i className={`ph-bold ${status.type === 'success' ? 'ph-check-circle' : 'ph-warning-circle'}`} style={{ fontSize: '1.3rem' }}></i>
                  <span>{status.message}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary"
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                }}
              >
                {loading ? (
                  <>
                    Sending... <i className="ph ph-spinner ph-spin"></i>
                  </>
                ) : status.type === 'success' ? (
                  <>
                    Message Sent Successfully! <i className="ph-bold ph-check"></i>
                  </>
                ) : (
                  <>
                    Submit Inquiry <i className="ph-bold ph-paper-plane-right" style={{ fontSize: '1.2rem' }}></i>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
