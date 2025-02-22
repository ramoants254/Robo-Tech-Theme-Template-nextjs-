import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import dynamic from 'next/dynamic';

const NavMenu = dynamic(() => import('@/components/NavMenu'), {
  ssr: true
});

const Footer = dynamic(() => import('@/components/Footer'), {
  ssr: true
});

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RoboTech - Future of Robotics',
  description: 'Experience the next generation of robotic innovation with our cutting-edge solutions.',
  keywords: 'robotics, AI, automation, future technology, innovation',
  authors: [{ name: 'RoboTech Team' }],
  openGraph: {
    title: 'RoboTech - Future of Robotics',
    description: 'Experience the next generation of robotic innovation with our cutting-edge solutions.',
    type: 'website',
    locale: 'en_US',
    siteName: 'RoboTech'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RoboTech - Future of Robotics',
    description: 'Experience the next generation of robotic innovation with our cutting-edge solutions.'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <NavMenu />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
