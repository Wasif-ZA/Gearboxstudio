# Student Portfolio Template (Neo-Brutalism)

**WELCOME TO YOUR NEW PORTFOLIO.**

This template is designed to be **bold**, **memorable**, and **easy to customize**. It follows the principles of Neo-Brutalism: high contrast, raw typography, and hard shadows. It's perfect for developers, designers, and creatives who want to stand out from the sea of minimal portfolios.

---

## 🚀 Quick Start Guide

### 1. Installation
If you haven't already, install the dependencies:
```bash
npm install
# or
yarn install
```

### 2. Run Locally
Start the development server to see your changes live:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or the specific template route) to view it.

---

## 🎨 How to Customize (The "CMS")

You don't need to dig through 50 files to update your content. **Everything is centralized in one file.**

📂 **Config File:** `data/student-portfolio.ts`

Open this file. It contains Javascript objects that control the entire site.

### 1. Personal Information (`siteConfig`)
Update this section with your core details.
```typescript
export const siteConfig = {
  name: "YOUR NAME",         // Appears in Hero, Navbar, Metadata
  tagline: "YOUR TAGLINE",   // The sub-headline in the Hero
  email: "you@example.com",  // Used for the "Copy Email" button
  location: "City, Country", // Displayed in the Server Status box
  // ... social links
};
```

### 2. Theme Colors (`themeConfig`)
Change the look of the site instantly by updating the accent colors.
```typescript
export const themeConfig = {
  accent: {
      name: "Neo-Lime", // Just a label
      hex: "#CCFF00",   // PRIMARY ACCENT (Buttons, Borders, Highlights)
  },
  secondary: {
      name: "Purple",
      hex: "#A855F7",   // SECONDARY ACCENT (Hover states, specific badges)
  }
};
```
*Tip: Choose a bright, neon color for the Primary Accent to stick to the Neo-Brutalism style.*

### 3. "About Me" Data (`aboutData`)
- **Bio**: Supports a short version (for metadata) and a full version (for the About page).
- **Skills**: Add your skills here. The `category` field determines the icon shown in the Skills section (e.g., 'frontend', 'backend', 'design').
- **Education**: Your uni/college details.

### 4. Projects (`projectsData`)
This is the most important section. Add your case studies here.
Each project object has:
- `slug`: The URL path (e.g., `my-project`). **Must be unique.**
- `thumbnail`: Path to the image (e.g., `/images/my-project.jpg`).
- `caseStudy`: The detailed content for the individual project page.
    - `context`: What was the problem?
    - `process`: How did you solve it?
    - `solution`: What did you build?
    - `result`: What was the outcome?
    - `metrics`: Key stats (e.g., "500+ Users").

---

## 🖼️ Adding Images

1.  Place your image files in the `public/images` folder (create it if it doesn't exist).
2.  Reference them in `data/student-portfolio.ts` like this:
    ```typescript
    thumbnail: "/images/my-super-app.png",
    ```
    *Note: Always start with a forward slash `/`.*

---

## 📄 Adding Your Resume

1.  Rename your resume PDF to `resume.pdf`.
2.  Drop it into the `public` folder.
3.  The "Download Resume" buttons are pre-configured to link to `/resume.pdf`.

---

## 🛠️ Advanced Customization

If you want to modify the layout or components directly:

- **Layout/Structure**: `app/page.tsx` (Homepage), `app/about/page.tsx`, etc.
- **Components**: `components/` folder.
    - `Navbar.tsx`: Modify navigation links.
    - `Hero.tsx`: The main landing section with the draggable shapes.
    - `ProjectCard.tsx`: The design of the project thumbnails.

---

## 🚀 Deployment

This is a **Next.js** application. The easiest way to deploy is **Vercel**.

1.  Push your code to GitHub.
2.  Import the repository in Vercel.
3.  Vercel will detect Next.js and build it automatically.
4.  Your portfolio is live!

---

## 💡 Design Tips

- **Keep it RAW**: Don't be afraid of default fonts, thick borders, and high contrast. That's the style.
- **Write meaningful Case Studies**: Recruiters care more about *how* you solved a problem than just seeing a screenshot. Use the `caseStudy` fields to tell that story.
- **Interactive Elements**: The draggable shapes in the Hero section are a great talking point during interviews.

**Enjoy building!** // SYSTEM_READY
