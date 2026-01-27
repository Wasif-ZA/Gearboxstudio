# Student Portfolio Template (Neo-Brutalism)

This is a high-contrast, bold, and distinct portfolio template designed for students who want to stand out. It follows the principles of neo-brutalism with thick borders, hard shadows, and vibrant colors.

## Getting Started

1.  **Customize Data**: Open `data/student-portfolio.ts`. This file contains all the configuration for the site, including your name, bio, projects, and social links.
2.  **Theme Config**: In the same file, you can change the `themeConfig` to set your preferred accent colors.
3.  **Add Your Resume**: Replace the default resume link or add your PDF to the `public` folder.
4.  **Add Images**: Place your project images in `public` and update the paths in `projectsData`.

## Directory Structure

-   `app/templates/students/student-neo-brutalism`: The page routes.
-   `components/templates/students/student-neo-brutalism`: The UI components specific to this template.
-   `data/student-portfolio.ts`: The central configuration file.

## Features

-   **High Impact Hero**: Make a statement immediately.
-   **Case Study Layout**: Structured project details (Context, Process, Solution, Result).
-   **Mobile Responsive**: Optimized for browsing on phone.
-   **SEO Ready**: Metadata included for all pages.
-   **Animations**: Subtle Framer Motion animations.

## Customization

### Colors
To change the primary accent color, edit `themeConfig.accent` in `data/student-portfolio.ts`.

```typescript
export const themeConfig = {
  accent: {
    name: "Neo-Lime",
    hex: "#ccff00", 
  },
  // ...
};
```

### Fonts
The template uses Geist Sans and Mono by default. You can change this in `layout.tsx`.

## Deployment
This template is part of a Next.js application. You can deploy it to Vercel or any other host that supports Next.js.
