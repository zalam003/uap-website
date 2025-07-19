# UAP Website

A modern, responsive website for the University of Asia Pacific built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🚀 Next.js 14 with App Router
- 💎 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- 📱 Fully responsive design
- ⚡ Optimized performance
- 🔍 SEO friendly
- 🎯 Modern component architecture

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd uap-website
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/                 # Next.js 14 app directory
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
├── components/         # Reusable components
│   ├── Header.tsx     # Site header
│   ├── Hero.tsx       # Hero section
│   ├── Features.tsx   # Features section
│   └── Footer.tsx     # Site footer
├── lib/               # Utility functions
│   ├── utils.ts       # Common utilities
│   └── config.ts      # Site configuration
└── styles/            # Global styles
    └── globals.css    # Global CSS with Tailwind
```

## Technologies Used

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, Merriweather, JetBrains Mono)

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

### Code Style

This project uses ESLint and follows Next.js recommended configurations. Make sure to run `npm run lint` before committing changes.

## Deployment

The project is ready to be deployed on Vercel, Netlify, or any other platform that supports Next.js.

### Deploy on Vercel

1. Connect your GitHub repository to Vercel
2. Configure build settings (Next.js preset)
3. Deploy

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License.
