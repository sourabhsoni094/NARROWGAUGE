# Narrow Gauge — Hospitality Collective

A modern, responsive, and accessible web application for **Narrow Gauge**, a premier hospitality collective established on Shivpuri Road in **Sheopur, Madhya Pradesh**. 

Narrow Gauge operates three distinct culinary and event experiences under one unified parent brand:
1. **Narrow Gauge Restaurant** — Multi-cuisine family dining (North Indian, Chinese, Pizzas, Shakes & Coolers)
2. **NG Catters** (NG Caterers) — Bespoke wedding, banquet, and outdoor catering across Madhya Pradesh
3. **Uknow Café** — Contemporary café & shake lounge crafted for youth hangouts, iced coffees, and slow conversations

---

## 📍 Verified Business Information

| Attribute | Details |
|---|---|
| **Location** | Opposite Badminton Court, Shivpuri Road, Sheopur, Madhya Pradesh 476337 |
| **Google Maps** | [maps.app.goo.gl/8xw5Zs2vndMi1Dbq5](https://maps.app.goo.gl/8xw5Zs2vndMi1Dbq5) |
| **Google Rating** | ⭐ **4.1 / 5.0** (364+ verified customer reviews) |
| **Operating Hours** | **11:00 AM – 10:45 PM** Daily (Monday – Sunday) |
| **Direct Phone** | [+91 97534 84848](tel:+919753484848) |
| **WhatsApp Desk** | [+91 97534 84848](https://wa.me/919753484848) |
| **Email** | [contact@narrowgaugehospitality.com](mailto:contact@narrowgaugehospitality.com) |

---

## 📱 Official Social Media Channels

Each brand under the Narrow Gauge umbrella maintains an active, dedicated Instagram presence:

- **Narrow Gauge Restaurant:** [@narrowgaugeofficial](https://www.instagram.com/narrowgaugeofficial/) — *Daily dining specials, kitchen highlights, and family moments.*
- **NG Catters:** [@ngcaterers](https://www.instagram.com/ngcaterers/) — *Royal wedding spreads, live food counters, and celebration setups across MP.*
- **Uknow Café:** [@cafeuknow](https://www.instagram.com/cafeuknow/) — *Signature thick shakes, iced cold brews, mocktails, and café vibes.*

---

## 🏛️ Website Architecture & Dedicated Pages

The website uses hash-based client-side routing with browser history synchronization:

| Route | Page | Purpose & Content |
|---|---|---|
| `#/` | **Home** | Parent brand portal, verified location bar, 3-service cards, brand philosophy, gallery, and contact desk. |
| `#/restaurant` | **Narrow Gauge Restaurant** | Dedicated dining page with verified hours, cuisine details, instant search, category filters, official prices, table booking, and PDF print export. |
| `#/catering` | **NG Catters** | Outdoor and wedding catering showcase, service tiers (Weddings, Corporate, Private), 3-step catering process, and interactive custom proposal inquiry form. |
| `#/cafe` | **Uknow Café** | Youth café lounge page featuring handcrafted thick shakes, cold brews with ice cream, mojitos, pizzas, and booth reservations. |
| `#/about` | **About** | Origin story inspired by the historic Gwalior–Sheopur Kalan Narrow Gauge railway, 4 core pillars, and local culinary heritage. |
| `#/contact` | **Contact** | Interactive inquiry form, embedded Google Maps iframe, 1-tap call/WhatsApp triggers, and official social media directory. |

---

## 🎨 Design System & Theme Engine

The application features a complete dual-theme design system engineered for high visual comfort in any lighting condition:

### Dark Mode (Default)
- **Primary Canvas:** `#0B0B0B` (Obsidian Deep Black)
- **Surface Elevation:** `#121212` / `#161616` with `rgba(255,255,255,0.08)` borders
- **Primary Typography:** `#F5F2EA` (Warm Alabaster)
- **Accent Palette:** Warm Champagne Gold (`#D4AF37` / `#D99B59`)
- **Visual Direction:** Cinematic, elegant, atmospheric dining aesthetics

### Day (Light) Mode
- **Primary Canvas:** `#FAF7F2` (Warm Linen / Frosted Ivory)
- **Surface Elevation:** `#FFFFFF` cards with stone hairline borders (`#E2D9CC`)
- **Primary Typography:** `#141210` (High-contrast Espresso Charcoal)
- **Accent Palette:** Deep Rich Bronze (`#8C571E`), Warm Terracotta (`#B24F10`), Antique Gold (`#8A6008`)
- **Visual Direction:** Clean, radiant, high-contrast readability without dark fog or glare

### Theme Architecture
- Managed through React Context (`ThemeContext`) with `localStorage` persistence.
- Pre-hydration script in `index.html` prevents Flash of Unstyled Content (FOUC).
- Animated Sun / Moon switcher accessible on both desktop headers and mobile drawers.

---

## ♿ Accessibility & Mobile Ergonomics (WCAG 2.1 AA)

- **Keyboard Navigation:** All cards, interactive services, and image gallery items are focusable with visible focus rings (`focus-visible:ring-2 focus-visible:ring-accent-champagne`) and support `Enter` / `Space` keyboard activation.
- **Dialog & Modal Standards:** Modals include `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, full label-to-input associations (`<label htmlFor="...">`), background body scroll locking, and `Escape` key dismiss listeners.
- **Sticky Mobile Action Bar:** On small screens (`< sm`), a fixed bottom bar gives one-tap access to **Call**, **WhatsApp**, **Google Maps Directions**, and **View Menu** with >= 48px touch targets.
- **Touch Target Compliance:** Minimum 44x44px touch targets across menu buttons, theme toggles, and modal controls.
- **Print / PDF Export:** Dedicated `@media print` stylesheet formats the restaurant menu cleanly for printing or saving as a PDF without extraneous web navigation or buttons.

---

## 🛠️ Tech Stack & Dependencies

- **Frontend Library:** [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with custom font families and color tokens
- **Icons:** [Lucide React](https://lucide.dev/) + custom vector SVG components
- **Typography:** Serif editorial headers paired with clean sans-serif body and monospace metadata tags

---

## 📁 Project Structure

```text
resto/
├── public/
│   └── logos/
│       ├── narrow-gauge-train.jpg  # Official restaurant toy train signboard logo
│       └── ng-caterers.jpg         # Official NG Catters locomotive emblem logo
├── src/
│   ├── components/
│   │   ├── BrandStory.tsx          # Brand story snippet with editorial imagery
│   │   ├── ContactSection.tsx      # Contact section with Google Maps embed
│   │   ├── Footer.tsx              # Universal footer with Instagram directory & links
│   │   ├── Hero.tsx                # Hero banner with value proposition & social proof
│   │   ├── InstagramIcon.tsx       # Shared official Instagram SVG icon
│   │   ├── Introduction.tsx        # Hospitable philosophy and kitchen principles
│   │   ├── LightboxModal.tsx       # Fullscreen photo viewer modal
│   │   ├── Logos.tsx               # Authentic logos for all 3 brand services
│   │   ├── MenuModal.tsx           # Quick menu modal view
│   │   ├── MobileActionBar.tsx     # Sticky 4-button mobile bottom action bar
│   │   ├── Navbar.tsx              # Unified 6-item responsive navigation bar
│   │   ├── PhotoGallery.tsx        # Accessible editorial photo gallery
│   │   ├── RatingBadge.tsx         # Google review badge & location notification bar
│   │   ├── ReservationModal.tsx    # Table & wedding catering inquiry modal dialog
│   │   ├── ThemeToggle.tsx         # Sun/Moon light & dark mode toggle switch
│   │   ├── Toast.tsx               # Interactive feedback notification toast
│   │   └── WhyNarrowGauge.tsx      # Feature columns highlighting brand versatility
│   ├── context/
│   │   └── ThemeContext.tsx        # Global Day/Night theme provider
│   ├── data/
│   │   └── brandData.ts            # Official menu data, pricing, hours, and business info
│   ├── pages/
│   │   ├── AboutPage.tsx           # Dedicated About & Railway Heritage page (#/about)
│   │   ├── CafePage.tsx            # Dedicated Uknow Café page (#/cafe)
│   │   ├── CateringPage.tsx        # Dedicated NG Catters catering page (#/catering)
│   │   ├── ContactPage.tsx         # Dedicated Contact & Maps page (#/contact)
│   │   ├── HomePage.tsx            # Main parent brand landing portal (#/)
│   │   └── RestaurantPage.tsx      # Dedicated Restaurant & Menu page (#/restaurant)
│   ├── types/
│   │   └── index.ts                # TypeScript interface definitions
│   ├── App.tsx                     # Main application router and modal state orchestrator
│   ├── index.css                   # Global styling, theme overrides, and print rules
│   └── main.tsx                    # React DOM root entry point with ThemeProvider
├── index.html                      # HTML template with pre-hydration theme script
├── package.json                    # Project configuration and dependencies
├── tailwind.config.js              # Tailwind custom colors, fonts, and animations
├── tsconfig.json                   # TypeScript compiler configuration
└── vite.config.ts                  # Vite bundler configuration
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or higher recommended)
- npm or yarn

### Installation
Clone or navigate to the repository directory and install dependencies:
```bash
npm install
```

### Development Server
Run the local Vite development server:
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your web browser.

### Production Build
Build the optimized production bundles:
```bash
npm run build
```
Preview the production build locally:
```bash
npm run preview
```

---

## 📜 License & Credits

- **Brand:** Narrow Gauge Hospitality, Sheopur, Madhya Pradesh
- **Design & Engineering:** Custom tailored for Narrow Gauge Hospitality
- © All rights reserved.