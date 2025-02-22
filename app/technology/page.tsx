'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

interface Technology {
  id: number;
  name: string;
  description: string;
  features: string[];
  stats: {
    power: string;
    efficiency: string;
    reliability: string;
  };
  icon: string;
}

const technologies: Technology[] = [
  {
    id: 1,
    name: "Quantum Neural Network",
    description: "Our proprietary quantum neural network processes information across infinite parallel universes, enabling unprecedented decision-making capabilities.",
    features: [
      "Multi-dimensional data processing",
      "Quantum entanglement learning",
      "Time-space pattern recognition",
      "Self-evolving architecture"
    ],
    stats: {
      power: "1.2 YottaFLOPS",
      efficiency: "99.999%",
      reliability: "100%"
    },
    icon: "🧠"
  },
  {
    id: 2,
    name: "Dark Matter Reactor",
    description: "Harnessing the power of dark matter, our robots operate on virtually unlimited energy while maintaining quantum stability.",
    features: [
      "Zero-point energy extraction",
      "Antimatter containment",
      "Quantum field stabilization",
      "Infinite power scaling"
    ],
    stats: {
      power: "∞ TW",
      efficiency: "99.99%",
      reliability: "99.999%"
    },
    icon: "⚡"
  },
  {
    id: 3,
    name: "Molecular Reconstruction Engine",
    description: "Advanced matter manipulation system allowing real-time molecular assembly and disassembly at quantum scales.",
    features: [
      "Atomic-level precision",
      "Quantum state preservation",
      "Matter-energy conversion",
      "Self-repair capabilities"
    ],
    stats: {
      power: "500 QW",
      efficiency: "99.9999%",
      reliability: "99.99%"
    },
    icon: "🔮"
  }
];

const TechnologyPage = () => {
  const [selectedTech, setSelectedTech] = useState<Technology | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div ref={containerRef} className="min-h-screen bg-cyber-darker relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10"></div>
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-cyber-darker via-cyber-dark to-cyber-darker"
        style={{ y }}
      ></motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: `rgba(${Math.random() * 255}, ${Math.random() * 255}, 255, 0.5)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink animate-shimmer">
            Quantum Technologies
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover the revolutionary technologies powering our next-generation quantum robots
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              className="glass-panel relative overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              onClick={() => setSelectedTech(tech)}
              whileHover={{ scale: 1.02 }}
            >
              {/* Holographic Effect */}
              <div className="absolute inset-0 bg-hologram-texture animate-hologram opacity-30"></div>

              {/* Content */}
              <div className="relative z-10 p-8">
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">
                  {tech.name}
                </h3>
                <p className="text-gray-400 mb-6">{tech.description}</p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div>
                    <div className="text-xs text-gray-400 mb-1">Power</div>
                    <div className="text-sm text-neon-blue">{tech.stats.power}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-1">Efficiency</div>
                    <div className="text-sm text-neon-green">{tech.stats.efficiency}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-1">Reliability</div>
                    <div className="text-sm text-neon-pink">{tech.stats.reliability}</div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {tech.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-gray-300">
                      <div className="w-1.5 h-1.5 bg-neon-purple rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-neon-blue/50 opacity-50"></div>
              <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 border-neon-purple/50 opacity-50"></div>
            </motion.div>
          ))}
        </div>

        {/* Interactive 3D Model Section */}
        <motion.div
          className="mt-32 glass-panel p-8 relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="absolute inset-0 bg-hologram-texture animate-hologram opacity-30"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">
              Quantum Core Visualization
            </h2>
            <div className="aspect-video bg-cyber-dark rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center">
                <div className="text-gray-400">Interactive 3D Model Coming Soon</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technical Specifications */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="glass-panel p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-hologram-texture animate-hologram opacity-30"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">
                Performance Metrics
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Quantum Processing Speed", value: "1.2 YottaFLOPS" },
                  { label: "Neural Network Capacity", value: "∞ Connections" },
                  { label: "Quantum Memory", value: "1 ExaByte" },
                  { label: "Decision Time", value: "0.0001ns" }
                ].map((metric, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-400">{metric.label}</span>
                    <span className="text-neon-blue">{metric.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-panel p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-hologram-texture animate-hologram opacity-30"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">
                System Requirements
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Power Source", value: "Dark Matter Compatible" },
                  { label: "Operating Environment", value: "Any Dimension" },
                  { label: "Maintenance Cycle", value: "Self-Maintaining" },
                  { label: "Security Level", value: "Quantum Encrypted" }
                ].map((req, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-400">{req.label}</span>
                    <span className="text-neon-green">{req.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Technology Detail Modal */}
      {selectedTech && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedTech(null)}
        >
          <motion.div
            className="bg-cyber-darker p-8 rounded-2xl max-w-2xl w-full mx-4 relative border border-neon-blue/30"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedTech(null)}
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

            <div className="text-4xl mb-4">{selectedTech.icon}</div>
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">
              {selectedTech.name}
            </h2>
            <p className="text-gray-300 mb-6">{selectedTech.description}</p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div>
                <div className="text-sm text-gray-400 mb-1">Power Output</div>
                <div className="text-xl font-bold text-neon-blue">{selectedTech.stats.power}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Efficiency</div>
                <div className="text-xl font-bold text-neon-green">{selectedTech.stats.efficiency}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Reliability</div>
                <div className="text-xl font-bold text-neon-pink">{selectedTech.stats.reliability}</div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-neon-blue mb-4">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedTech.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-neon-purple rounded-full"></div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default TechnologyPage;
