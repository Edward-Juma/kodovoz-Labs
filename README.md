# Kodovoz Labs Website

The Kodovoz Labs website presents a Kenyan product engineering studio that helps businesses plan, design, build, and grow digital products. It introduces the studio, explains its services and delivery process, showcases product concepts, outlines pricing and support options, and gives prospective clients a way to make an enquiry.

The repository contains two website implementations:

- The **Next.js application** is the project configured by `package.json` and is started with `npm run dev`.
- The **standalone HTML website** starts at `index.html` and uses the root-level `style.css`, `script.js`, and related assets. It contains the longer-form landing page experience, including project concepts, pricing, FAQs, and the enquiry form.

## Website Features

The Next.js site includes a home page with a service overview, an About page, individual service detail pages, and a Privacy Policy page. Shared header, footer, and service-card components keep navigation and repeated content consistent. Service content is maintained centrally in `lib/site-data.ts`.

The standalone landing page includes:

- An introduction and calls to action for starting a project.
- Six service areas: web applications, mobile apps, cloud and DevOps, AI integration, security reviews, and product design.
- Studio differentiators, delivery steps, technology overview, and project concepts with category filters.
- Pricing and support information, frequently asked questions, and a project enquiry form.
- Theme switching, a mobile navigation menu, privacy notice, and contact shortcuts.

Both implementations share the Kodovoz Labs identity and content direction. Responsive styles are included for desktop, tablet, and mobile layouts.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Studio introduction and service overview |
| `/about` | Studio background and approach |
| `/service/[slug]` | Detail page for a service listed in `lib/site-data.ts` |
| `/privacy-policy` | Privacy and personal-data information |

The standalone site is a static document rather than a Next.js route. Open `index.html` directly to view it; `About.html`, `service.html`, and `privacy-policy.html` provide its supporting pages.

## Technology

- Next.js 14 with the App Router
- React 18 and TypeScript
- Plain CSS for the Next.js app and standalone website
- Static HTML, CSS, and JavaScript for the standalone site

## Getting Started

Install dependencies and start the Next.js development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The server supports hot reloading while you edit the app.

To run the production build locally:

```bash
npm run build
npm start
```

To view the standalone version, open `index.html` in a browser. It does not require the Next.js server.

## Project Structure

```text
app/                  Next.js routes and global application styles
  about/              About page
  privacy-policy/     Privacy Policy page
  service/[slug]/     Dynamic service detail pages
components/           Shared header, footer, and service card
lib/site-data.ts      Service content used by the Next.js routes
public/assets/        Static assets served by Next.js
index.html            Standalone landing page
About.html            Standalone About page
service.html          Standalone service detail page
privacy-policy.html   Standalone Privacy Policy page
style.css             Standalone website styles, including breakpoints
script.js             Standalone website interactions
```

## Updating Content

Edit the `services` array in `lib/site-data.ts` to change the Next.js service cards and detail pages. Update the relevant files under `app/` for Next.js page copy, or the corresponding root-level HTML file for the standalone version. Keep the two versions aligned when changing shared company details, services, or contact information..
