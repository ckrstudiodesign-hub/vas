import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { SECURITY_CONFIG } from '@/config';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Apply production HTTP Security Headers
  response.headers.set('Content-Security-Policy', SECURITY_CONFIG.csp);
  response.headers.set('Strict-Transport-Security', SECURITY_CONFIG.hsts);
  response.headers.set('X-Frame-Options', SECURITY_CONFIG.frameOptions);
  response.headers.set('X-Content-Type-Options', SECURITY_CONFIG.contentTypeOptions);
  response.headers.set('Referrer-Policy', SECURITY_CONFIG.referrerPolicy);
  response.headers.set('Permissions-Policy', SECURITY_CONFIG.permissionsPolicy);
  response.headers.set('X-DNS-Prefetch-Control', SECURITY_CONFIG.dnsPrefetchControl);

  return response;
}

export const proxy = middleware;
export default middleware;

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
