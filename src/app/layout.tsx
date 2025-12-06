import { Inter, Cinzel, Playfair_Display, Dancing_Script } from 'next/font/google';
import './globals.css';
import MusicPlayerWrapper from '@/components/MusicPlayerWrapper';
import { Analytics } from "@vercel/analytics/next"

// Load Google Fonts
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const cinzel = Cinzel({ 
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const dancing = Dancing_Script({ 
  subsets: ['latin'],
  variable: '--font-dancing',
  display: 'swap',
});

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'A Knight\'s Tale | Dark Medieval Fantasy',
  description: 'An immersive dark fantasy experience of love and chivalry in a magical medieval kingdom',
  keywords: ['dark fantasy', 'medieval', 'knight', 'princess', 'fairytale', 'romance', 'fantasy', 'story'],
  themeColor: '#0a0a1a',
  openGraph: {
    title: 'A Knight\'s Tale | Dark Medieval Fantasy',
    description: 'An immersive dark fantasy experience of love and chivalry',
    type: 'website',
    locale: 'en_US',
    url: 'https://knight-and-princess.vercel.app',
    siteName: 'A Knight\'s Tale',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'A Knight\'s Tale',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A Knight\'s Tale | A Medieval Love Story',
    description: 'A story of love and chivalry in a magical medieval kingdom',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning
      className={`${inter.variable} ${cinzel.variable} ${playfair.variable} ${dancing.variable} bg-dark text-foreground`}
    >
      <body className={`min-h-screen bg-gradient-to-br from-dark to-dark-light bg-[length:200%_200%] animate-gradient ${inter.className}`}>
        <div className="fixed inset-0 bg-[url('/images/noise.png')] opacity-10 pointer-events-none" />
        <div className="relative z-10">
          {children}
        </div>
        
        {/* Music Player */}
        <MusicPlayerWrapper />
      </body>
    </html>
  );
}