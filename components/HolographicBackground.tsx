'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function HolographicBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveGradient = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { width, height } = containerRef.current.getBoundingClientRect();
      const x = clientX / width;
      const y = clientY / height;
      
      containerRef.current.style.setProperty('--x', `${x * 100}%`);
      containerRef.current.style.setProperty('--y', `${y * 100}%`);
    };

    window.addEventListener('mousemove', moveGradient);
    return () => window.removeEventListener('mousemove', moveGradient);
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className="fixed inset-0 z-0 bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(0,149,255,0.15)_0%,rgba(0,149,255,0)_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(255,0,255,0.1)_0%,rgba(255,0,255,0)_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.8))] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 pointer-events-none" />
    </motion.div>
  );
}
