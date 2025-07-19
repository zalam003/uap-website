import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://uap.edu' : 'http://localhost:3000'),
  title: {
    default: 'UAP University',
    template: '%s | UAP University'
  },
  description: 'University of Asia Pacific - Excellence in Education',
  keywords: ['university', 'education', 'UAP', 'University of Asia Pacific'],
  authors: [{ name: 'UAP University' }],
  creator: 'UAP University',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'UAP University',
    title: 'University of Asia Pacific',
    description: 'Excellence in Education',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'University of Asia Pacific',
    description: 'Excellence in Education',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className="min-h-screen bg-white antialiased">
        <main>{children}</main>
      </body>
    </html>
  )
}
