# VAS Consultants - Corporate & Business Setup in Dubai, UAE

This repository contains the production-grade Next.js web application for **VAS Consultants**, Dubai's premier corporate advisory and business setup consultancy.

The platform has been fully migrated from a legacy static HTML/Vite codebase into a cutting-edge **Next.js 16 (App Router)** application built with TypeScript, Tailwind CSS, and rigorous security and performance standards.

---

## 🌟 Key Architectural Features & Production Upgrades

### 1. Modern Framework & Performance (Next.js App Router)
- **Framework**: Built on **Next.js 16 (Turbopack)** using the modern App Router (`src/app/`).
- **Static & Dynamic Generation**: All 28 landing, service, freezone, mainland, and mortgage pages are pre-rendered statically (`○ Static`) for sub-second load times and superior SEO.
- **Font Optimization**: Powered by `next/font/google` (*Inter* and *Playfair Display*) with zero cumulative layout shift (CLS) and self-hosted font optimization.
- **Image Optimization**: Migrated to `next/image` with automated WebP/AVIF compression, explicit aspect ratios, and responsive sizes.
- **SEO & Search Indexing**: Complete dynamic `sitemap.ts` and `robots.ts` generation, structured JSON-LD Organization & Service metadata on all primary landing pages, and dedicated OpenGraph tags.

### 2. Production-Grade Security Architecture
- **Environment & Secrets Isolation**: Zero hardcoded secrets or API keys in frontend bundles.
- **Secure Server-Side API**: All contact form submissions are routed through a protected Next.js Route Handler (`/api/contact/route.ts`). External Web3Forms email delivery keys (`WEB3FORMS_ACCESS_KEY`) remain strictly isolated on the server.
- **Input Validation & Sanitization**: Comprehensive input regex verification and sanitization implemented via `src/lib/validation.ts` with rate-limiting and payload size checks.
- **Hardened HTTP Response Headers**: Configured in `next.config.ts` to protect against XSS, clickjacking, MIME-sniffing, and MITM attacks:
  - `Content-Security-Policy (CSP)` (Strict directives for scripts, styles, frames, and connect-src)
  - `X-Frame-Options: DENY`
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy` (Restricting camera, microphone, and geolocation)
  - `Strict-Transport-Security (HSTS)` (1 year duration with subdomains and preload)

---

## 🚀 Getting Started (Local Development)

### Prerequisites
- **Node.js**: v18.17.0 or later (v20+ recommended)
- **npm**: v9+ or equivalent package manager

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd vas
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   *Note: For local testing, add your server-side `WEB3FORMS_ACCESS_KEY` to `.env.local` if testing email delivery. All public configuration defaults safely.*

4. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 🛠️ Build & Verification Commands

To verify the codebase before deployment or committing changes, run the following commands:

### Type Checking
Ensure 100% TypeScript type safety across all components and pages:
```bash
npx tsc --noEmit
```

### ESLinting
Validate against Next.js Core Web Vitals and React Compiler immutability rules:
```bash
npx eslint src
```

### Production Build
Create an optimized production bundle and test static page generation:
```bash
npm run build
```

---

## 📂 Project Structure

```
vas/
├── public/                 # Static media assets (images, videos, logos, icons)
├── src/
│   ├── app/                # Next.js App Router pages and route handlers
│   │   ├── api/contact/    # Server-side secure contact submission endpoint
│   │   ├── about/          # About Us page
│   │   ├── services/       # Services overview & 6 dedicated service routes
│   │   ├── mainland/       # Mainland setup overview & 3 sub-pages
│   │   ├── freezone/       # Free Zone overview & 7 authority sub-pages
│   │   ├── offshore/       # Offshore company formation
│   │   ├── *-mortgage/     # Residential, Commercial, Non-Resident & Refinance routes
│   │   ├── privacy/        # Privacy Policy
│   │   ├── layout.tsx      # Root layout with font definitions & global navigation
│   │   ├── page.tsx        # Main Homepage
│   │   ├── sitemap.ts      # Dynamic SEO sitemap generator
│   │   └── robots.ts       # Dynamic robots.txt policy generator
│   ├── components/
│   │   ├── layout/         # Header and Footer components
│   │   └── sections/       # Reusable UI sections (ContactSection, StatsCounter, etc.)
│   ├── lib/
│   │   ├── constants.ts    # Centralized navigation menus, links & contact info
│   │   └── validation.ts   # Server & client-side input validation and sanitization
│   └── types/              # Global TypeScript interfaces & data models
├── .env.example            # Environment variables placeholder template
├── .gitignore              # Configured to ignore .env.local and build artifacts
├── eslint.config.mjs       # ESLint 9 Flat Configuration
├── next.config.ts          # Next.js configuration & HTTP security headers
├── package.json            # Project scripts and dependencies
└── tsconfig.json           # TypeScript configuration
```

---

## 🌐 Production Deployment Guide

This application is fully optimized for zero-configuration deployment on **Vercel** or any standard Node.js/Docker hosting environment supporting Next.js App Router.

### Deploying on Vercel (Recommended)

1. **Push your code** to a Git repository (GitHub, GitLab, or Bitbucket).
2. **Import the project** into your [Vercel Dashboard](https://vercel.com/new).
3. **Configure Environment Variables**:
   In the Vercel Project Settings under **Environment Variables**, add:
   - `WEB3FORMS_ACCESS_KEY`: Your server-side production key for contact submissions.
   - `NEXT_PUBLIC_SITE_URL`: Your primary production domain (e.g., `https://vasconsultants.ae`).
4. **Deploy**: Click **Deploy**. Vercel will automatically detect Next.js, execute `npm run build`, and assign global CDN edge caching to all static routes.

### Custom Server / Docker Deployment

To run in a traditional container or Node.js environment:
```bash
npm run build
npm run start
```
The application will listen on port `3000` by default. Ensure environment variables from `.env.local` are injected into your production runtime environment.
