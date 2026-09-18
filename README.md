# VEBKON EVENTS — Official Website

> **Turnkey Event Management, Experiential Activations, Custom Fabrication & Production**  
> Operational Hubs: **Dehradun** & **Lucknow** | Pan-India Execution across North & West India

---

## Overview

A modern, production-grade, agency-level website developed for **VEBKON EVENTS**. Built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion, engineered specifically for static export compatibility (`output: 'export'`) with zero custom backend dependencies.

### Core Features

- **Brand Design System**: Rich Event Red (`#D71920`) balanced with warm off-white (`#F7F3EE`), crisp white, and deep charcoal (`#111111`).
- **Optimized 3D Logo**: Extracted and optimized transparent WebP and PNG assets preserving glossy red luster and chrome bevels across light and dark surfaces.
- **Ambient Motion**: 60fps canvas particle system (`EventMotionBackground`), kinetic typography, scroll-linked watermarks, and Framer Motion reveals compliant with `prefers-reduced-motion`.
- **14-Section Homepage**:
  1. Full Viewport Hero with city pills and scroll indicator
  2. Kinetic Brand Statement (`IDEATE • DESIGN • BUILD • EXECUTE • DELIVER`)
  3. Modular 13-Service Card Grid
  4. Interactive Split-Scroll Featured Experience
  5. Qualitative Capability Metrics
  6. Client Showcase with Infinite Marquee & 21-Logo Responsive Grid
  7. 6-Step Visual Delivery Process Roadmap
  8. Featured Projects Portfolio with interactive modal preview
  9. Regional Network Visualization (7 states)
  10. Dedicated Dehradun & Lucknow Hub Cards with Google Maps links
  11. Interactive Testimonial Carousel (with demo disclaimer in code)
  12. Behind-The-Scenes Instagram Showcase (`@vebkon_events`)
  13. High-Impact Red Statement CTA
  14. Validated Enquiry Form with Direct WhatsApp Dispatch
- **6 Dedicated Subpages**:
  - `/about`: Company ethos, executive pillars, operational differences.
  - `/services`: Full directory with deep dives into all 13 service categories.
  - `/work`: Filterable project showcase with detailed specification modals.
  - `/clients`: All 21 official vector brand logos, categories, and partnership highlights.
  - `/locations`: State-by-state coverage and physical office logistics.
  - `/contact`: Direct executive calls, WhatsApp, Instagram, and validated form.
- **WhatsApp Integration**:
  - Direct Phone: `+91 97566 66623`
  - Floating WhatsApp Beacon button with hover state
  - Enquiry form validates all inputs (Name, Phone, Email, Company, Event Type, City, Date, Audience, Budget, Message) and automatically formats a structured WhatsApp message to `+91 97566 66623`.
- **SEO & Performance**: Pre-rendered static pages, OpenGraph, Twitter cards, JSON-LD `ProfessionalService` structured data, dynamic `sitemap.xml`, and `robots.txt`.

---

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Animations**: Framer Motion & HTML5 Canvas
- **Icons**: Lucide React
- **Deployment**: Next.js Static Export (`output: 'export'`) to `out/` directory

---

## Local Development Setup

### 1. Prerequisites
- Node.js `v18.17.0` or later
- npm `v9.0.0` or later

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Code Quality & Type Check
```bash
# Run TypeScript compilation check
npm run typecheck

# Run ESLint validation
npm run lint
```

### 5. Production Static Build
```bash
npm run build
```
This produces a production-ready, fully pre-rendered static site inside the `out/` directory.

---

## Deployment Guide

### Option A: DigitalOcean App Platform / Static Site

1. Push your repository to **GitHub**.
2. Log into the [DigitalOcean Cloud Console](https://cloud.digitalocean.com/).
3. Navigate to **Apps** → **Create App** → Select **GitHub**.
4. Choose the repository and branch (`main`).
5. In App Platform configuration:
   - **Type**: Static Site
   - **Build Command**: `npm run build`
   - **Output Directory**: `out`
6. Click **Deploy**. DigitalOcean will automatically build and distribute your static site globally on high-speed CDN edge nodes with free SSL.

### Option B: GitHub Pages

1. In your GitHub repository, navigate to **Settings** → **Pages**.
2. Under **Build and deployment**, select **GitHub Actions**.
3. Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [main]
   permissions:
     contents: read
     pages: write
     id-token: write
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: 20
         - run: npm ci
         - run: npm run build
         - uses: actions/upload-pages-artifact@v3
           with:
             path: ./out
         - uses: actions/deploy-pages@v4
   ```
4. Push to `main` — GitHub will build and publish your site automatically.

---

## How to Customize & Replace Content

### 1. Logo
- Replace `/public/logo/vebkon-logo.png` and `/public/logo/vebkon-logo.webp` with any updated transparent logo asset.
- Both the Navbar (`components/layout/Navbar.tsx`) and Footer (`components/layout/Footer.tsx`) reference this file directly.

### 2. Client Logos
- Client logos are stored as SVGs in `/public/clients/` (`nestle.svg`, `google.svg`, `swiggy.svg`, etc.).
- Client metadata (names, industries, partnership descriptions) is managed in:
  `data/clients.ts`
- To add or modify a client, simply update `data/clients.ts`.

### 3. Work & Project Photos
- Project data is located in:
  `data/projects.ts`
- Replace visual assets in `/public/projects/` with authentic high-resolution event photographs. Update the corresponding `image` paths in `data/projects.ts`.

### 4. Testimonials
- Testimonials are located in:
  `data/testimonials.ts`
- Replace the placeholder entries with verified client endorsements, names, and designated corporate titles prior to live production marketing.

### 5. Contact Details, Phone & WhatsApp
- Primary Phone: `+91 97566 66623`
- To change the contact phone number or WhatsApp dispatch link:
  - Form logic & WhatsApp URL: `components/contact/EnquiryForm.tsx`
  - Floating WhatsApp Button: `components/ui/FloatingWhatsApp.tsx`
  - Navbar quick actions: `components/layout/Navbar.tsx`
  - Footer & Offices: `components/layout/Footer.tsx` and `data/locations.ts`

### 6. Physical Office Addresses
- Located in:
  `data/locations.ts`
- Update addresses, Google Maps search coordinates, or regional hub capabilities directly in `officeLocations`.

### 7. Social Media Links
- Instagram link (`https://www.instagram.com/vebkon_events`) is configured in `components/home/InstagramSection.tsx`, `components/layout/Footer.tsx`, and `app/contact/page.tsx`.

---

## Architecture & Scalability

- **Zero-Backend Architecture**: Form submissions validate client-side and trigger formatted WhatsApp dispatches, allowing 100% serverless static deployment.
- **Fast Load Performance**: Assets are served in optimized WebP/SVG formats with lazy loading below the fold.
- **Design Tokens**: Standardized in `tailwind.config.ts` under `brand.*` and `surface.*`.

---

© Vebkon Events. All Rights Reserved.

