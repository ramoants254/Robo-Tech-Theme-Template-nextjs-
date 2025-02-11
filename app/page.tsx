'use client';

import { motion } from 'framer-motion';
import FuturisticCard from '@/components/FuturisticCard';
import RobotShowcase from '@/components/RobotShowcase';
import ParticleBackground from '@/components/ParticleBackground';
import FloatingElement from '@/components/FloatingElement';
import TechnicalSpecs from '@/components/TechnicalSpecs';
import CompareRobots from '@/components/CompareRobots';
import TestimonialSection from '@/components/TestimonialSection';

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

const stats = [
  { label: 'Robots Deployed', value: '10,000+' },
  { label: 'Success Rate', value: '99.9%' },
  { label: 'Global Partners', value: '500+' },
  { label: 'Patents Filed', value: '1,200+' }
];

export default function Home() {
  return (
    <>
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              The Future of Robotics
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12">
              Discover cutting-edge robots that are reshaping industries and advancing human potential
            </p>
            <div className="flex justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-colors"
              >
                Explore Robots
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-blue-500 text-blue-400 rounded-full font-semibold hover:bg-blue-500/10 transition-colors"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>

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
          <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-3xl" />
        </FloatingElement>
      </section>

      {/* Features Grid */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <FuturisticCard key={index} {...feature} delay={index * 0.2} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Robot Showcase */}
      <section className="py-20 relative z-10">
        <RobotShowcase />
      </section>

      {/* Technical Specifications */}
      <section className="py-20 relative z-10">
        <TechnicalSpecs />
      </section>

      {/* Compare Robots */}
      <section className="py-20 relative z-10">
        <CompareRobots />
      </section>

      {/* Testimonials */}
      <section className="py-20 relative z-10">
        <TestimonialSection />
      </section>

      {/* Call to Action */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Step into the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Join us in shaping the future of robotics and automation
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-colors"
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
