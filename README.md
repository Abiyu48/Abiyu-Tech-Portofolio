# Portfolio - Reyhan Raditya

Professional portfolio website built with React + Vite + Tailwind CSS. Features modern design, smooth animations, dark/light mode toggle, and fully responsive layout.

## Features

- ✨ Modern & Clean Design
- 🌙 Dark/Light Mode Toggle
- 📱 Fully Responsive (Mobile, Tablet, Desktop)
- ⚡ Fast Performance (Vite)
- 🎨 Beautiful Animations & Transitions
- 📊 Portfolio & Projects Showcase
- 💬 Contact Form
- 🔗 Smooth Scroll Navigation
- 📈 Analytics Ready
- 🎯 SEO Optimized

## Project Structure

```
portfolio-react-vite/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx       # Top navigation bar
│   │   ├── Hero.jsx             # Hero section
│   │   ├── About.jsx            # About me section
│   │   ├── Skills.jsx           # Skills & tools
│   │   ├── Portfolio.jsx        # Projects showcase
│   │   ├── Experience.jsx       # Work experience timeline
│   │   ├── Contact.jsx          # Contact form
│   │   ├── Footer.jsx           # Footer
│   │   └── ThemeProvider.jsx    # Dark/Light mode provider
│   ├── App.jsx                  # Root component
│   ├── main.jsx                 # Application entry point
│   └── index.css                # Global styles & Tailwind
├── index.html                   # HTML entry point
├── package.json                 # Dependencies & scripts
├── vite.config.js               # Vite configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── postcss.config.js            # PostCSS configuration
├── .eslintrc.cjs               # ESLint configuration
└── README.md                    # This file
```

## Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Clone or extract the project
```bash
cd portfolio-react-vite
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

The app will open in your browser at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Customization

### Update Personal Information

Edit the content in components to match your information:

1. **Navigation.jsx** - Update name/logo
2. **Hero.jsx** - Update headline, subtitle, and stats
3. **About.jsx** - Update about section and strengths
4. **Skills.jsx** - Add/remove skills and tools
5. **Portfolio.jsx** - Add your projects
6. **Experience.jsx** - Update work experience
7. **Contact.jsx** - Update contact information and links
8. **Footer.jsx** - Update footer content

### Colors & Styling

Colors are defined in:
- `tailwind.config.js` - Primary colors and theme
- `src/index.css` - CSS variables and utility classes
- Individual components use Tailwind CSS classes

To change the primary color (cyan-400), update the color values in both files.

### Add Your Image

1. Place your image in `public` folder
2. Update the Hero and About components to use your image instead of emoji placeholder

## Technologies

- **React 18** - UI Library
- **Vite 5** - Build tool
- **Tailwind CSS 3** - Styling
- **JavaScript ES6+** - Programming language
- **PostCSS** - CSS processing
- **ESLint** - Code quality

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Performance

- Vite for fast development and optimized builds
- Code splitting for smaller bundle sizes
- Image optimization ready
- CSS minification in production

## Deployment

This project can be deployed to:
- Vercel (recommended)
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

### Vercel Deployment

```bash
npm install -g vercel
vercel
```

## License

MIT - Feel free to use this template for personal or commercial projects.

## Support

For issues or questions, please open an issue in the repository.

---

Built with ❤️ by Reyhan Raditya
