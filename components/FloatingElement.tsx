'use client';

import { motion } from 'framer-motion';
import { CSSProperties } from 'react';

interface FloatingElementProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
}

export default function FloatingElement({
  children,
  delay = 0,
  duration = 4,
  className = '',
  style
}: FloatingElementProps) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
        delay,
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
