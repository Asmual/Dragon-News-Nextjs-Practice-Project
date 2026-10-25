# Dragon-News-Nextjs-Practice-Project

Dragon News is a responsive news application built with Next.js (App Router), React 19, Tailwind CSS, and DaisyUI. It delivers real-time news articles across diverse categories with dynamic routing, comprehensive article views, and authentication layouts.

## Features

- **Dynamic News Categories:** Fetches live categories and news from Programming Hero API.
- **Breaking News Marquee:** Smooth scrolling breaking news ticker.
- **Responsive 3-Column Home Layout:**
  - Left: Category navigation & highlight cards.
  - Center: Main news feed with detailed cards, author metadata, ratings, and view counter.
  - Right: Social login options, social media links, Q-Zone media widgets, and banner ads.
- **Category Dynamic Route (`/category/[id]`):** Instant category-specific news filtering.
- **News Details View (`/news/[id]`):** In-depth single article presentation with editor's insights.
- **Authentication Pages (`/login` & `/register`):** Pixel-perfect auth layouts matching Figma designs.
- **Information Pages (`/about` & `/career`):** Structured About Us and Open Positions pages.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Library:** React 19
- **Styling:** Tailwind CSS v4 & DaisyUI v5
- **Utilities:** date-fns, react-fast-marquee

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.
