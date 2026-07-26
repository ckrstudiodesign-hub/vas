import { NextResponse } from 'next/server';
import { validateAndSanitizeContactForm } from '@/lib/validation';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Perform server-side validation and sanitization
    const validation = validateAndSanitizeContactForm(body);

    if (!validation.isValid || !validation.sanitizedData) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed. Please check your inputs.',
          errors: validation.errors,
        },
        { status: 400 }
      );
    }

    // 2. Retrieve server-side secret API key
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      if (process.env.NODE_ENV === 'development') {
        console.error('SERVER ERROR: WEB3FORMS_ACCESS_KEY environment variable is not defined.');
      }
      return NextResponse.json(
        {
          success: false,
          message: 'Server configuration error. Please try again later or contact us directly via phone/email.',
        },
        { status: 500 }
      );
    }

    // 3. Prepare payload for Web3Forms API
    const sanitized = validation.sanitizedData;
    const formData = new FormData();
    formData.append('access_key', accessKey);
    formData.append('name', sanitized.name);
    formData.append('email', sanitized.email);
    formData.append('phone', sanitized.phone);
    if (sanitized.service) {
      formData.append('service', sanitized.service);
    }
    formData.append('message', sanitized.message);
    formData.append('subject', `New Corporate Inquiry from ${sanitized.name}`);
    formData.append('from_name', 'VAS Corporate Services Portal');

    // 4. Send request to Web3Forms API
    const apiResponse = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await apiResponse.json();

    if (apiResponse.ok && data.success) {
      return NextResponse.json({
        success: true,
        message: 'Inquiry submitted successfully.',
      });
    } else {
      if (process.env.NODE_ENV === 'development') {
        console.error('Web3Forms API error:', data);
      }
      return NextResponse.json(
        {
          success: false,
          message: data.message || 'Failed to submit inquiry to external service.',
        },
        { status: 502 }
      );
    }
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('POST /api/contact unexpected error:', error);
    }
    return NextResponse.json(
      {
        success: false,
        message: 'An unexpected server error occurred.',
      },
      { status: 500 }
    );
  }
}
