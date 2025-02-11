'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  const pathname = usePathname();

  useEffect(() => {
    // Add any global client-side effects here
  }, [pathname]);

  return <>{children}</>;
}
