'use client';

import { motion } from 'framer-motion';

interface FuturisticCardProps {
  title: string;
  description: string;
  icon: string;
  delay?: number;
}

export default function FuturisticCard({ title, description, icon, delay = 0 }: FuturisticCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-1"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800/50 h-full">
        <div className="flex items-center justify-between mb-4">
          <span className="text-3xl">{icon}</span>
          <div className="h-px flex-grow mx-4 bg-gradient-to-r from-blue-500/50 to-transparent" />
        </div>
        <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
}
