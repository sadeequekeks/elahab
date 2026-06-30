# El Albab Real Estate

Premium, mobile-first website for El Albab Real Estate — Nigeria's first licensed real estate agency in Egypt.

## Tech Stack

- React 19 + TypeScript
- Vite 6
- Tailwind CSS v4
- React Router 7
- Framer Motion, Embla Carousel, Lucide Icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build for Production

```bash
npm run build
npm run preview
```

Deploy the `dist/` folder to Vercel, Netlify, or Cloudflare Pages.

## Customizing Content

### Contact & WhatsApp

Edit [`src/data/site.ts`](src/data/site.ts):

- `whatsapp` — digits only, country code, no `+` (e.g. `201234567890`)
- `phones` — display numbers for click-to-call
- `email`, `office.address`, `office.mapsUrl`
- `logo`, `logoOnDark` — paths under `public/`
- `social` — Instagram, TikTok URLs

### Properties

Edit [`src/data/properties.ts`](src/data/properties.ts). Each property needs `slug`, `images`, `price`, `location`, `type`, etc.

Placeholder images use **Pexels** and **pravatar.cc** (see `src/lib/images.ts`). Replace with your own files in `public/images/` and update paths to `/images/your-file.jpg` for best reliability.

### Founders, Services, Blog, Testimonials

- [`src/data/founders.ts`](src/data/founders.ts)
- [`src/data/services.ts`](src/data/services.ts)
- [`src/data/blogPosts.ts`](src/data/blogPosts.ts)
- [`src/data/testimonials.ts`](src/data/testimonials.ts)
- [`src/data/investEgypt.ts`](src/data/investEgypt.ts)

## Contact Form

Submissions open WhatsApp with a pre-filled message (no backend). To add email delivery later, integrate Formspree or Web3Forms in `ContactPage.tsx`.

## Cookies & privacy

A cookie consent banner appears on first visit. Choices are stored in `localStorage`. Google Maps only loads after **Accept all**; otherwise users can open maps externally. See `/privacy` for the full policy.

## Arabic (Future)

English-only in v1. For Arabic + RTL, add `react-i18next` and translation files under `src/i18n/`.

## Brand Colors

| Token   | Hex       |
|---------|-----------|
| Gold    | `#b08d57` |
| Ink     | `#1a1a1a` |
| Emerald | `#2e6e4c` |
| White   | `#ffffff` |

Fonts: Montserrat (headings), Open Sans (body) — loaded in `index.html`.
# elahab
