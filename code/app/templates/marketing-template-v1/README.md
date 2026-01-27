# Marketing Website Template v1.0

A premium, standalone Next.js template designed for SaaS and Agency marketing sites. Built with Next.js App Router, Tailwind CSS, and TypeScript.

## Features

- **Premium Neural Design**: Professional dark mode aesthetic.
- **Pre-built Pages**: Home, Pricing, and Contact.
- **High-Value Components**: 
  - Glassmorphic Navbar with Mobile Drawer
  - Hero Section with Glow Effects
  - Feature Grid, Testimonials, Logo Strip
  - Interactive Pricing Toggle
  - FAQ Accordion
- **Production Ready**: Optimized, accessible, and responsive.

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open [http://localhost:3000](http://localhost:3000)** to view your site.

## Customization

### Changing Colors
Open `tailwind.config.ts` and modify the `colors` object to match your brand:

```typescript
// tailwind.config.ts
colors: {
  page: "#0B0F14",        // Your Background Color
  accent: {
    DEFAULT: "#3B82F6",   // Your Brand Color
  }
  // ...
}
```

### Adding New Components
Check `CONTEXT.md` for coding rules and structure if using AI tools to extend the template.

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com/new).

1. Push this repo to GitHub/GitLab.
2. Import the project in Vercel.
3. Deploy!
