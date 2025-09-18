import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aditya Pandey - Full Stack Developer',
  description: 'Passionate Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. View my portfolio, projects, and experience.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'TypeScript', 'Portfolio', 'Web Development'],
  authors: [{ name: 'Aditya Pandey' }],
  creator: 'Aditya Pandey',
  metadataBase: new URL('https://your-domain.com'),
  openGraph: {
    title: 'Aditya Pandey - Full Stack Developer',
    description: 'Passionate Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.',
    siteName: 'Aditya Pandey Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aditya Pandey Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aditya Pandey - Full Stack Developer',
    description: 'Passionate Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.',
    images: ['/og-image.jpg'],
    creator: '@yourusername',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
