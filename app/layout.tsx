import React from 'react';
import '@/app/globals.css';
import { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';
import SessionProviderClient from '@/app/dashboard/SessionProviderClient';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: {
    template: '%s | Dashboard | @pitutito.cl',
    default: 'pitutito.cl',
  },
  description: 'Base de datos colaborativa.',
  metadataBase: new URL('https://next14-postgres.vercel.app/'),
  authors: [{ name: 'pitutito.cl', url: 'https://www.pitutito.cl/' }],
  keywords: ['Next.js 15', 'pitutito.cl', 'Dashboard', 'nextjs.org/learn', 'Server Actions'],
  openGraph: {
    title: 'pitutito.cl Dashboard',
    description: 'Búsqueda de Empleo.',
    url: 'https://next14-postgres.vercel.app/',
    type: 'website',
  },
  twitter: {
    site: '@pitutito.cl',
    description: 'Base de datos colaborativa.',
    title: 'pitutito.cl Dashboard',
    creator: '@pitutito.cl',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Custom fonts deberia moverse a document.tsx (no movido) */}
        {/* Aquí puedes agregar otras etiquetas de enlace o meta si es necesario */}
      </head>
      <body className="antialiased">
        <SessionProviderClient>
          {children}
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: '#363636',
                color: '#fff',
              },
              success: {
                duration: 3000,
                style: {
                  background: '#22c55e',
                },
              },
              error: {
                duration: 3000,
                style: {
                  background: '#ef4444',
                },
              },
            }}
          />
          <Analytics />
          <SpeedInsights />
        </SessionProviderClient>
      </body>
    </html>
  );
}