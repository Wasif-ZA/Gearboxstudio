# Project Context: Marketing Template v1

This document provides context for AI assistants (ChatGPT, Claude, Cursor) to effectively generate code for this project.

## Project Structure
```
.
├── app/
│   ├── globals.css      # Global styles & Tailwind directives
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page (Landing)
│   ├── pricing/         # Pricing page
│   └── contact/         # Contact page
├── components/
│   ├── layout/          # Navbar, Footer
│   ├── sections/        # Page sections (Hero, Features, Pricing, etc.)
│   └── ui/              # Reusable UI components (Button, Input, etc.)
├── lib/
│   └── utils.ts         # Utility functions (cn)
├── public/              # Static assets
└── tailwind.config.ts   # Design system configuration
```

## Coding Rules

### 1. Styling & Design System
- **Tailwind CSS**: Use Tailwind for all styling. Avoid custom CSS classes in `globals.css` unless necessary.
- **Colors**: Use the semantic color tokens:
  - `bg-page`: Main background (Deep Navy)
  - `bg-surface`: Card/Section background
  - `text-primary`: White/Off-white headings
  - `text-secondary`: Grey body text
  - `text-accent` / `bg-accent`: Actions & Highlights (Electric Blue)
- **Glassmorphism**: Use `bg-page/80 backdrop-blur-md` for sticky elements.
- **Classes**: Always use the `cn()` utility to merge classes.

### 2. Components
- **Icons**: Always import from `lucide-react`.
- **Variants**: Use `class-variance-authority` (cva) for component variants (like Buttons).
- **Structure**: Keep components small and focused. Section components go in `components/sections`, generic UI elements in `components/ui`.

### 3. Best Practices
- **Images**: Use standard `img` or placeholders for simplicity in this template version, or `next/image` if configuring domains.
- **Client Components**: Add `"use client"` at the top of files that use `useState`, `useEffect`, or event handlers.
