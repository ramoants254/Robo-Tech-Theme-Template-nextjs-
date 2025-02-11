import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import RootLayoutClient from '@/components/RootLayoutClient';
import HolographicBackground from '@/components/HolographicBackground';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'RoboTech',
  description: 'Experience the future of robotics',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen antialiased`}>
        <HolographicBackground />
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
