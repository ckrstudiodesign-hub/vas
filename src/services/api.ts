import { ContactFormData, ContactFormResponse } from '@/types';

export class ApiServiceError extends Error {
  public status?: number;
  public errors?: Record<string, string>;

  constructor(message: string, status?: number, errors?: Record<string, string>) {
    super(message);
    this.name = 'ApiServiceError';
    this.status = status;
    this.errors = errors;
  }
}

export const contactService = {
  async submitForm(data: Partial<ContactFormData>): Promise<ContactFormResponse> {
    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || 'dc14b024-2214-4382-8eb8-c3b344b02cad';
      
      const payload = {
        access_key: accessKey,
        name: data.name || `${data.firstName || ''} ${data.lastName || ''}`.trim(),
        email: data.email,
        phone: data.phone,
        service: data.service || 'General Inquiry',
        message: data.message,
        subject: `New Corporate Inquiry from ${data.name || data.firstName || 'Client'}`,
        from_name: 'VAS Corporate Services Portal',
        botcheck: false,
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new ApiServiceError(
          result.message || 'Failed to submit contact form.',
          response.status,
          result.errors
        );
      }

      return {
        success: true,
        message: result.message || 'Inquiry submitted successfully.',
      };
    } catch (error) {
      if (error instanceof ApiServiceError) {
        throw error;
      }
      throw new ApiServiceError(
        'Network error or server unreachable. Please check your connection and try again.'
      );
    }
  },
};
