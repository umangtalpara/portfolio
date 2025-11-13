# Umang Talpara - Portfolio

A modern, production-ready React portfolio website showcasing backend-focused full stack development expertise.

## Tech Stack

- **React 19** + **Vite** + **TypeScript**
- **Tailwind CSS** (utility-first styling)
- **shadcn/ui** (Button, Card, Badge, Dialog, Tooltip)
- **React Router** (client-side routing)
- **Framer Motion** (micro-animations with reduced motion support)
- **Lucide React** (icons)
- **Recharts** (skills donut chart)
- **React Helmet Async** (SEO meta tags)

## Features

- 🎨 Modern, clean design with generous whitespace
- 🌓 Dark mode (system default + manual toggle)
- 📱 Fully responsive design
- ♿ Accessibility features (keyboard navigation, ARIA labels, reduced motion)
- 🔍 SEO optimized (meta tags, JSON-LD structured data)
- ⚡ Fast performance with Vite
- 🎭 Smooth animations with Framer Motion

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
portfolio/
├── public/
│   └── assets/
│       └── umang_talpara_resume.pdf    # Resume file
├── src/
│   ├── components/
│   │   ├── ui/                     # shadcn/ui components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Section.tsx
│   │   ├── Stat.tsx
│   │   ├── TimelineItem.tsx
│   │   ├── SkillsDonutChart.tsx
│   │   └── SEO.tsx
│   ├── content/
│   │   └── site.ts                 # Centralized content data
│   ├── lib/
│   │   └── utils.ts               # Utility functions
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Contact.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
└── vercel.json
```

## Editing Content

All site content is centralized in `/src/content/site.ts`. To update:

- **Personal Information**: Edit the `personal` object
- **Professional Summary**: Modify the `summary` array
- **Experience**: Update the `experience` array
- **Projects**: Edit the `projects` array
- **Skills**: Modify the `skills` array
- **Education**: Update the `education` array
- **SEO**: Edit the `seo` object

### Example: Adding a New Project

```typescript
{
  id: 'project-id',
  title: 'Project Name',
  problem: 'Problem statement',
  approach: 'Solution approach',
  result: 'Results and impact',
  tech: ['Node.js', 'MongoDB', 'Redis'],
  highlights: [
    'Highlight 1',
    'Highlight 2',
  ],
}
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub/GitLab
2. Import the project in [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and configure the build settings
4. Deploy!

The `vercel.json` file is already configured for optimal Vercel deployment.

### Other Platforms

The built `dist` folder can be deployed to any static hosting service:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static file server

## Customization

### Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
  --primary: 160 84% 39%;  /* Emerald/Teal */
  /* ... other colors */
}
```

### Fonts

Fonts are loaded from Google Fonts in `src/index.css`. To change:
1. Update the `@import` URL
2. Modify `fontFamily` in `tailwind.config.js`

### Styling

- Global styles: `src/index.css`
- Component styles: Tailwind classes in components
- Custom utilities: Add to `tailwind.config.js`

## Accessibility

The portfolio includes:

- Semantic HTML elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus-visible rings
- Alt text for images/icons
- Reduced motion support (respects `prefers-reduced-motion`)

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is private and proprietary.

## Contact

- **Email**: patelumang607@gmail.com
- **LinkedIn**: [www.linkedin.com/in/umang-talpara](https://www.linkedin.com/in/umang-talpara)
- **Location**: Ahmedabad, Gujarat, India

---

Built with ❤️ using React, TypeScript, and Tailwind CSS.
