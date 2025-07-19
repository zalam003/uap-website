# UAP Website Project Documentation

## Project Overview

This documentation contains information about the UAP University website project, including architecture decisions, component structure, and development guidelines.

## Architecture

### Technology Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Google Fonts

### Directory Structure

```
uap-website/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── layout.tsx         # Root layout component
│   │   └── page.tsx           # Homepage component
│   ├── components/            # Reusable UI components
│   │   ├── Header.tsx        # Main navigation header
│   │   ├── Hero.tsx          # Homepage hero section
│   │   ├── Features.tsx      # Features showcase section
│   │   └── Footer.tsx        # Site footer
│   ├── lib/                  # Utility functions and configurations
│   │   ├── utils.ts          # Common utility functions
│   │   └── config.ts         # Site configuration constants
│   └── styles/               # Global styles
│       └── globals.css       # Global CSS with Tailwind imports
├── public/                   # Static assets
├── docs/                     # Project documentation
└── Configuration files...
```

## Component Design Guidelines

### Header Component
- Responsive navigation with mobile menu
- Logo with university branding
- Primary CTA button (Apply Now)
- Sticky positioning for better UX

### Hero Section
- Compelling headline with university value proposition
- Statistics showcase (years, students, faculty, programs)
- Primary and secondary action buttons
- Gradient background for visual appeal

### Features Section
- Grid layout showcasing key benefits
- Icon-based visual hierarchy
- Concise descriptions for each feature
- Responsive design for all screen sizes

### Footer Component
- Comprehensive site navigation
- Contact information (current Green Road, Farmgate location)
- Social media links
- University branding consistency

## Styling Guidelines

### Color Palette
- **Primary**: Blue shades (#0ea5e9 to #0c4a6e)
- **Secondary**: Gray shades (#f8fafc to #0f172a)
- **Background**: White and subtle gradients

### Typography
- **Headings**: Merriweather (serif)
- **Body**: Inter (sans-serif)
- **Code**: JetBrains Mono (monospace)

### Component Classes
- Use Tailwind utility classes
- Custom component classes in globals.css
- Consistent spacing and sizing patterns

## Development Workflow

1. **Setup**: Run `npm install` to install dependencies
2. **Development**: Use `npm run dev` for local development
3. **Type Checking**: Run `npm run type-check` before commits
4. **Linting**: Use `npm run lint` to check code quality
5. **Building**: Run `npm run build` for production builds

## Future Enhancements

### Planned Features
- [ ] About page with university history
- [ ] Academic programs pages
- [ ] Admissions process pages
- [ ] Student portal integration
- [ ] News and events section
- [ ] Faculty directory
- [ ] Alumni network pages
- [ ] Online application system

### Technical Improvements
- [ ] SEO optimization
- [ ] Performance monitoring
- [ ] Accessibility improvements
- [ ] Content management system integration
- [ ] Multi-language support
- [ ] Progressive web app features

## Deployment

The project is configured for easy deployment on:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Any platform supporting Next.js

## Contributing

Please refer to the main README.md for contribution guidelines and development setup instructions.
