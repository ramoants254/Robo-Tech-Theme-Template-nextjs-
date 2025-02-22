'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Suspense, lazy } from 'react';

// Dynamic imports for better code splitting
const AnimatedBackground = dynamic(() => import('@/components/AnimatedBackground'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-black" />
});

const RobotShowcase = dynamic(() => import('@/components/RobotShowcase'), {
  loading: () => <div className="animate-pulse bg-gray-800 h-96 rounded-lg" />
});

const FloatingElement = dynamic(() => import('@/components/FloatingElement'));

const features = [
  {
    title: 'Quantum AI Integration',
    description: 'Next-generation artificial intelligence powered by quantum computing',
    icon: '🧠'
  },
  {
    title: 'Holographic Interfaces',
    description: 'Immersive 3D holographic user interfaces for intuitive control',
    icon: '🌌'
  },
  {
    title: 'Neural Link Systems',
    description: 'Direct brain-computer interfaces for seamless human-robot interaction',
    icon: '🔮'
  },
  {
    title: 'Nano-Robotics',
    description: 'Microscopic robots for precision tasks and medical applications',
    icon: '🦾'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100
    }
  }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
          >
            Future of Robotics
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Experience the next generation of robotic innovation with our cutting-edge solutions
          </motion.p>
        </motion.div>

        {/* Floating Elements */}
        <FloatingElement
          className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"
          style={{ width: '300px', height: '300px' }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-3xl" />
        </FloatingElement>
        <FloatingElement
          className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2"
          style={{ width: '250px', height: '250px' }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-3xl" />
        </FloatingElement>
      </section>

      {/* Features Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-4"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-transform"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Robot Showcase Section */}
      <section className="py-20 px-4">
        <Suspense fallback={<div className="animate-pulse bg-gray-800 h-96 rounded-lg" />}>
          <RobotShowcase />
        </Suspense>
      </section>
    </main>
  );
}
