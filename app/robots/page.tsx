'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

interface Robot {
  id: number;
  name: string;
  category: string;
  description: string;
  specs: {
    ai: string;
    power: string;
    speed: string;
    capacity: string;
  };
  features: string[];
  image: string;
  price: string;
}

const robots: Robot[] = [
  {
    id: 1,
    name: "QuantumGuard X-1000",
    category: "Security & Defense",
    description: "Advanced quantum-powered security robot with molecular detection and time-space anomaly prevention.",
    specs: {
      ai: "Neural Core v15.0",
      power: "Quantum Cell (1,000 TW)",
      speed: "Mach 3",
      capacity: "Infinite Parallel Processing"
    },
    features: [
      "Quantum Encryption Shield",
      "Molecular Detection Array",
      "Time Anomaly Prevention",
      "Neural Network Defense",
      "Holographic Interface"
    ],
    image: "/robots/guard.jpg",
    price: "299,999"
  },
  {
    id: 2,
    name: "MediBot Quantum Pro",
    category: "Healthcare",
    description: "Revolutionary medical assistant with nano-surgical capabilities and quantum diagnostic systems.",
    specs: {
      ai: "BioCore v12.5",
      power: "Bio-Quantum Cell (500 TW)",
      speed: "Nano-second Response",
      capacity: "100 PB Medical Data"
    },
    features: [
      "Nano-surgical Suite",
      "Quantum Diagnostics",
      "Bio-molecular Repair",
      "Neural Health Scanning",
      "Time-Dilated Treatment"
    ],
    image: "/robots/medical.jpg",
    price: "499,999"
  },
  {
    id: 3,
    name: "IndustrialForge 5000",
    category: "Manufacturing",
    description: "Quantum-powered industrial robot with molecular assembly and zero-point energy manipulation.",
    specs: {
      ai: "ForgeCore v20.0",
      power: "Dark Matter Core (2,000 TW)",
      speed: "Quantum Speed",
      capacity: "Universal Assembly"
    },
    features: [
      "Molecular Assembly",
      "Zero-Point Energy Control",
      "Quantum Material Synthesis",
      "Time-Space Manufacturing",
      "Neural Production Control"
    ],
    image: "/robots/industrial.jpg",
    price: "799,999"
  }
];

const RobotsPage = () => {
  const [selectedRobot, setSelectedRobot] = useState<Robot | null>(null);
  const [hoveredRobot, setHoveredRobot] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-cyber-darker">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-darker via-cyber-dark to-cyber-darker pointer-events-none"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink animate-shimmer"
            variants={itemVariants}
          >
            Quantum Robot Collection
          </motion.h1>

          <motion.p 
            className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Explore our collection of quantum-powered robots, each designed to revolutionize their respective industries
          </motion.p>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {robots.map((robot) => (
              <motion.div
                key={robot.id}
                className="glass-panel relative overflow-hidden group cursor-pointer"
                variants={itemVariants}
                onClick={() => setSelectedRobot(robot)}
                onHoverStart={() => setHoveredRobot(robot.id)}
                onHoverEnd={() => setHoveredRobot(null)}
              >
                {/* Holographic Effect */}
                <div className="absolute inset-0 bg-hologram-texture animate-hologram opacity-30"></div>

                {/* Content */}
                <div className="relative z-10 p-8">
                  <div className="mb-6">
                    <div className="text-sm text-neon-purple mb-2">{robot.category}</div>
                    <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">
                      {robot.name}
                    </h3>
                    <p className="text-gray-400">{robot.description}</p>
                  </div>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-xs text-gray-400 mb-1">AI System</div>
                      <div className="text-sm text-neon-blue">{robot.specs.ai}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 mb-1">Power Core</div>
                      <div className="text-sm text-neon-green">{robot.specs.power}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 mb-1">Speed</div>
                      <div className="text-sm text-neon-yellow">{robot.specs.speed}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 mb-1">Capacity</div>
                      <div className="text-sm text-neon-pink">{robot.specs.capacity}</div>
                    </div>
                  </div>

                  {/* Price and Action */}
                  <div className="flex justify-between items-center mt-6 pt-6 border-t border-neon-blue/20">
                    <div className="text-2xl font-bold text-white">
                      ${robot.price}
                    </div>
                    <Link href="/preorder">
                      <motion.button
                        className="px-6 py-2 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple relative overflow-hidden group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="relative z-10">Pre-Order</span>
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      </motion.button>
                    </Link>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-neon-blue/50 opacity-50"></div>
                <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 border-neon-purple/50 opacity-50"></div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Robot Details Modal */}
      {selectedRobot && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-cyber-darker p-8 rounded-2xl max-w-4xl w-full mx-4 relative border border-neon-blue/30"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <button
              onClick={() => setSelectedRobot(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">
                  {selectedRobot.name}
                </h2>
                <div className="text-neon-purple mb-4">{selectedRobot.category}</div>
                <p className="text-gray-300 mb-6">{selectedRobot.description}</p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-neon-blue mb-3">Features</h3>
                    <ul className="space-y-2">
                      {selectedRobot.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-neon-purple rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-neon-blue mb-3">Specifications</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-400">AI System</div>
                        <div className="text-neon-blue">{selectedRobot.specs.ai}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">Power Core</div>
                        <div className="text-neon-green">{selectedRobot.specs.power}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">Speed</div>
                        <div className="text-neon-yellow">{selectedRobot.specs.speed}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">Capacity</div>
                        <div className="text-neon-pink">{selectedRobot.specs.capacity}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="aspect-video bg-cyber-dark rounded-lg overflow-hidden">
                  {/* Add robot 3D model or image here */}
                  <div className="w-full h-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center">
                    <div className="text-gray-400">3D Model Coming Soon</div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Starting From</div>
                    <div className="text-3xl font-bold text-white">${selectedRobot.price}</div>
                  </div>
                  <Link href="/preorder">
                    <motion.button
                      className="px-8 py-4 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple relative overflow-hidden group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10 font-bold">Pre-Order Now</span>
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default RobotsPage;
