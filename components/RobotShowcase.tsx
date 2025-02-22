'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

interface Robot {
  id: number;
  name: string;
  description: string;
  image: string;
  specs: {
    height: string;
    weight: string;
    speed: string;
    battery: string;
  };
}

const robots: Robot[] = [
  {
    id: 1,
    name: 'Atlas Pro',
    description: 'Advanced humanoid robot capable of complex movements and tasks',
    image: '/robots/atlas.jpg',
    specs: {
      height: '1.5m',
      weight: '80kg',
      speed: '5.2m/s',
      battery: '4 hours'
    }
  },
  {
    id: 2,
    name: 'Nexus',
    description: 'Industrial automation robot with precision control',
    image: '/robots/nexus.jpg',
    specs: {
      height: '1.8m',
      weight: '120kg',
      speed: '3.0m/s',
      battery: '8 hours'
    }
  },
  {
    id: 3,
    name: 'Scout Mini',
    description: 'Compact surveillance and reconnaissance robot',
    image: '/robots/scout.jpg',
    specs: {
      height: '0.5m',
      weight: '15kg',
      speed: '8.0m/s',
      battery: '6 hours'
    }
  }
];

export default function RobotShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  return (
    <div ref={containerRef} className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
        >
          Our Robotic Innovation
        </motion.h2>

        <div className="space-y-32">
          {robots.map((robot, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={robot.id}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, type: 'spring' }}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}
              >
                <div className="w-full md:w-1/2">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-1"
                  >
                    <Image
                      src={robot.image}
                      alt={robot.name}
                      fill
                      className="object-cover rounded-2xl"
                    />
                  </motion.div>
                </div>

                <div className="w-full md:w-1/2 space-y-6">
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
                  >
                    {robot.name}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-gray-300 text-lg"
                  >
                    {robot.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 gap-4"
                  >
                    {Object.entries(robot.specs).map(([key, value]) => (
                      <div
                        key={key}
                        className="p-4 rounded-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm"
                      >
                        <p className="text-gray-400 text-sm capitalize">{key}</p>
                        <p className="text-white font-semibold">{value}</p>
                      </div>
                    ))}
                  </motion.div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-shadow"
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
