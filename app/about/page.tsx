'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: string;
  achievement: string;
}

const timeline: TimelineEvent[] = [
  {
    year: "2120",
    title: "Quantum Breakthrough",
    description: "First successful integration of quantum consciousness into robotic systems.",
    icon: "🧠",
    achievement: "Neural Density: 1 trillion connections/nm³"
  },
  {
    year: "2122",
    title: "Dark Matter Harnessing",
    description: "Revolutionary power source utilizing dark matter for infinite energy generation.",
    icon: "⚡",
    achievement: "Power Output: ∞ TeraWatts"
  },
  {
    year: "2123",
    title: "Molecular Engineering",
    description: "Development of self-repairing quantum-molecular structures.",
    icon: "🔮",
    achievement: "Precision: 0.00001 angstroms"
  },
  {
    year: "2124",
    title: "Time Manipulation",
    description: "Breakthrough in quantum time dilation for enhanced processing capabilities.",
    icon: "⌛",
    achievement: "Processing Speed: 1 YottaFLOP/ns"
  },
  {
    year: "2125",
    title: "Present Day",
    description: "Leading the revolution in quantum-powered robotics and AI systems.",
    icon: "🚀",
    achievement: "Market Share: 99.99%"
  }
];

const AboutPage = () => {
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

      {/* Quantum Particles */}
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
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink animate-shimmer">
            Shaping the Future
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Pioneering quantum robotics and AI technology since 2120
          </p>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="glass-panel p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-hologram-texture animate-hologram opacity-30"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">
                Our Vision
              </h2>
              <p className="text-gray-300 mb-6">
                To revolutionize human potential through quantum-powered robotics and artificial intelligence, creating a future where the boundaries between human capability and technological advancement cease to exist.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Founded", value: "2120" },
                  { label: "Global Presence", value: "All Dimensions" },
                  { label: "Team Size", value: "10,000+" },
                  { label: "Patents", value: "∞" }
                ].map((stat, index) => (
                  <div key={index} className="p-4 bg-cyber-dark/50 rounded-lg">
                    <div className="text-sm text-gray-400">{stat.label}</div>
                    <div className="text-xl font-bold text-neon-blue">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-panel p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-hologram-texture animate-hologram opacity-30"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">
                Our Mission
              </h2>
              <p className="text-gray-300 mb-6">
                To push the boundaries of what's possible by combining quantum computing, artificial intelligence, and robotics into seamless solutions that enhance human life across all dimensions.
              </p>
              <div className="space-y-4">
                {[
                  "Quantum Innovation Leadership",
                  "Universal Accessibility",
                  "Dimensional Integration",
                  "Sustainable Future"
                ].map((value, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-neon-purple rounded-full"></div>
                    <span className="text-gray-300">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">
            Our Journey Through Time
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-neon-blue via-neon-purple to-neon-pink"></div>

            {/* Timeline Events */}
            <div className="space-y-24">
              {timeline.map((event, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 * index }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                    <div className="glass-panel p-6 relative overflow-hidden">
                      <div className="absolute inset-0 bg-hologram-texture animate-hologram opacity-30"></div>
                      <div className="relative z-10">
                        <div className="text-4xl mb-4">{event.icon}</div>
                        <div className="text-neon-blue font-bold mb-2">{event.year}</div>
                        <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">
                          {event.title}
                        </h3>
                        <p className="text-gray-300 mb-4">{event.description}</p>
                        <div className="text-sm text-neon-green">{event.achievement}</div>
                      </div>
                    </div>
                  </div>
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-neon-purple rounded-full border-4 border-cyber-darker"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">
            Leading the Quantum Revolution
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                role: "Quantum Research",
                stat: "1,000+ Scientists",
                icon: "🔬"
              },
              {
                role: "Robot Engineering",
                stat: "5,000+ Engineers",
                icon: "🤖"
              },
              {
                role: "AI Development",
                stat: "4,000+ Developers",
                icon: "💻"
              }
            ].map((team, index) => (
              <motion.div
                key={index}
                className="glass-panel p-8 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
              >
                <div className="absolute inset-0 bg-hologram-texture animate-hologram opacity-30"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{team.icon}</div>
                  <div className="text-xl font-bold text-neon-blue mb-2">{team.role}</div>
                  <div className="text-gray-300">{team.stat}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
