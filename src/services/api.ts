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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new ApiServiceError(
          result.message || 'Failed to submit contact form.',
          response.status,
          result.errors
        );
      }

      return result as ContactFormResponse;
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
