'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const Hero = () => {
  const [isSpecsOpen, setIsSpecsOpen] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Floating elements animation
  const floatingElements = Array(20).fill(null).map((_, i) => ({
    id: i,
    size: Math.random() * 10 + 5,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    duration: Math.random() * 5 + 3,
  }));

  return (
    <section className="relative min-h-screen bg-cyber-darker overflow-hidden">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10"></div>
      
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="matrix-rain"></div>
      </div>

      {/* Floating Elements */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute w-2 h-2 rounded-full bg-neon-blue/30"
          style={{
            left: `${element.initialX}%`,
            top: `${element.initialY}%`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink animate-shimmer"
            variants={itemVariants}
          >
            Welcome to the Future of Robotics
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12"
            variants={itemVariants}
          >
            Experience quantum-powered AI robots that transcend the boundaries of possibility
          </motion.p>

          {/* Buttons Container */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-6"
            variants={itemVariants}
          >
            <Link href="/robots" className="w-full sm:w-auto">
              <motion.button
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 font-bold text-white">
                  Explore our Robots
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </motion.button>
            </Link>

            <motion.button
              onClick={() => setIsSpecsOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-full border-2 border-neon-blue relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 font-bold text-white">
                View Specifications
              </span>
              <div className="absolute inset-0 bg-neon-blue opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </motion.button>
          </motion.div>

          {/* Quantum Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              { label: "Quantum Processing", value: "1.2 YHz" },
              { label: "AI Accuracy", value: "99.99%" },
              { label: "Response Time", value: "0.001ms" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-cyber-dark/50 backdrop-blur-lg border border-neon-blue/20"
                variants={itemVariants}
              >
                <div className="text-3xl font-bold text-neon-blue mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Specifications Modal */}
      {isSpecsOpen && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-cyber-darker p-8 rounded-2xl max-w-2xl w-full mx-4 relative border border-neon-blue/30"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <button
              onClick={() => setIsSpecsOpen(false)}
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

            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">
              Quantum Specifications
            </h2>

            <div className="space-y-6">
              {[
                {
                  title: "Quantum Core",
                  specs: [
                    "Processing Speed: 1.2 YottaHertz",
                    "Quantum Bits: 1,000,000 Qubits",
                    "Neural Pathways: Infinite",
                    "Quantum Memory: 1 ExaByte",
                  ],
                },
                {
                  title: "AI Capabilities",
                  specs: [
                    "Self-Learning Rate: 1TB/s",
                    "Decision Accuracy: 99.99%",
                    "Pattern Recognition: Universal",
                    "Emotional Intelligence: Level 10",
                  ],
                },
                {
                  title: "Physical Specifications",
                  specs: [
                    "Response Time: 0.001ms",
                    "Power Source: Dark Matter Fusion",
                    "Operating Temperature: -273°C to 10,000°C",
                    "Lifespan: 100 Years",
                  ],
                },
              ].map((section, index) => (
                <div key={index} className="border-b border-neon-blue/20 pb-4">
                  <h3 className="text-xl font-bold text-neon-blue mb-3">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.specs.map((spec, i) => (
                      <li key={i} className="text-gray-300 flex items-center">
                        <div className="w-2 h-2 bg-neon-purple rounded-full mr-3"></div>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
