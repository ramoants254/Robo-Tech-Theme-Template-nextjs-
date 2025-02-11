'use client';

import { useEffect } from 'react';
import Navigation from '@/components/Navigation';

interface RootLayoutClientProps {
  children: React.ReactNode;
}

export default function RootLayoutClient({ children }: RootLayoutClientProps) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      performance.mark('app-rendered');
    }
  }, []);

  return (
    <>
      <Navigation />
      {children}
    </>
  );
}
