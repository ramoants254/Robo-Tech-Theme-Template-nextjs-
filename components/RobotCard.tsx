'use client';

import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import Image from 'next/image';

interface RobotCardProps {
  name: string;
  image: string;
  status: string;
  onClick: () => void;
  isSelected: boolean;
}

export default function RobotCard({ name, image, status, onClick, isSelected }: RobotCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imageLoading, setImageLoading] = useState(true);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0.5, y: 0.5 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      style={{
        transform: `perspective(1000px) rotateX(${(mousePosition.y - 0.5) * 10}deg) rotateY(${(mousePosition.x - 0.5) * 10}deg)`,
      }}
      className={`relative cursor-pointer group transition-all duration-300 ${
        isSelected ? 'ring-2 ring-blue-500 ring-offset-2 ring-offset-gray-900' : ''
      }`}
    >
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
        {/* Loading Skeleton */}
        {imageLoading && (
          <motion.div
            initial={{ opacity: 0.5 }}
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-700"
          />
        )}

        {/* Glowing Effect */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${
              mousePosition.y * 100
            }%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`
          }}
        />

        {/* Robot Image */}
        <div className="relative w-full h-full p-4">
          <Image
            src={image}
            alt={name}
            fill
            className={`object-contain transition-all duration-500 ${
              imageLoading ? 'scale-110 blur-xl' : 'scale-100 blur-0'
            }`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            onLoadingComplete={() => setImageLoading(false)}
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-white mb-2">{name}</h3>
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
              status === 'In Stock'
                ? 'bg-green-500/20 text-green-400'
                : status === 'Pre-order'
                ? 'bg-yellow-500/20 text-yellow-400'
                : 'bg-purple-500/20 text-purple-400'
            }`}>
              {status}
            </span>
          </motion.div>
        </div>

        {/* Hover Border Effect */}
        <div className="absolute inset-0 border border-blue-500/0 group-hover:border-blue-500/50 rounded-2xl transition-colors duration-300" />
      </div>

      {/* Selection Indicator */}
      {isSelected && (
        <motion.div
          layoutId="selection-indicator"
          className="absolute -inset-1 rounded-2xl border-2 border-blue-500"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </motion.div>
  );
}
