# Pinnacle Health Institute

A responsive, editorial website for Pinnacle’s functional medicine practice. Built with Next.js 16, React 19, TypeScript, Tailwind CSS 4, Lucide icons, and Lenis.

## Run locally

```sh
npm install
npm run dev -- --port 3005
```

Open http://localhost:3005. In the current workspace, packages also resolve from the existing parent project.

## Connect consultations

Copy `.env.example` to `.env.local` and provide:

- `NEXT_PUBLIC_BOOKING_URL`: the clinic’s live HTTPS scheduler URL.
- `NEXT_PUBLIC_WHATSAPP_NUMBER`: the clinic’s international WhatsApp number, including country code.

Restart the development server or rebuild after changing these public values. Without them, consultation buttons open an informative dialog and the floating contact button opens the same dialog. The site does not collect or submit personal or medical data. With a booking URL, the dialog opens the scheduler; local interest/location choices are informational and are not transmitted to it.

## Checks

```sh
npm run lint
npm run build
```

If the local Turbopack process cache has retained a sandbox permission error, `npm run build -- --webpack` uses Next.js’s alternate production compiler.

Browser checks covered 390, 768, 1024, and 1440 px widths; consultation opening, closing and preference selection; membership selection; mobile navigation; system tabs and keyboard navigation; FAQ accordions; image loading; and section anchors.

## Content and assets

- Prices and membership inclusions are based on the existing project. Confirm them with the clinic before publication.
- Founder portrait: supplied local `dr-charles.jpg`.
- Coastal photograph: https://images.unsplash.com/photo-1473116763249-2faaef81ccda (stored locally).
- Geist font: locally hosted from the existing project’s font assets.
- Testimonials and numerical outcomes have not been invented; the supporting section uses brand messaging instead.

All section content is in `src/components/Sections.tsx`; navigation is in `Navbar.tsx`; global scrolling, cursor, contact actions, and consultation dialog are in `Experience.tsx`. Design tokens and responsive styles are in `src/app/globals.css`.

Reduced motion is respected. Content stays readable without JavaScript, and custom cursor behavior is limited to precise pointers, with native cursor behavior restored inside dialogs.
