'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const AnimatedBackground = dynamic(() => import('@/components/AnimatedBackground'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-black" />
});

const teamMembers = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief Robotics Officer',
    image: '/images/placeholder-robot.svg',
    description: 'Leading expert in quantum robotics and AI integration'
  },
  {
    name: 'Prof. James Wilson',
    role: 'Head of Research',
    image: '/images/placeholder-robot.svg',
    description: 'Pioneer in neural interface systems and robotic consciousness'
  },
  {
    name: 'Dr. Maya Patel',
    role: 'Lead Engineer',
    image: '/images/placeholder-robot.svg',
    description: 'Specialist in nano-robotics and swarm intelligence'
  }
];

const achievements = [
  { number: '100+', label: 'Patents Filed' },
  { number: '50M+', label: 'Lines of Code' },
  { number: '1000+', label: 'Robots Deployed' },
  { number: '30+', label: 'Countries Served' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

const numberAnimation = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      duration: 0.8
    }
  }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <AnimatedBackground />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
          >
            Pioneering the Future
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-gray-300 mb-8"
          >
            We're a team of visionaries, engineers, and innovators working to transform the world of robotics
          </motion.p>
        </motion.div>
      </section>

      {/* Achievements Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-4"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.label}
              variants={numberAnimation}
              className="text-center"
            >
              <motion.h3
                className="text-4xl md:text-5xl font-bold text-blue-500"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 100, duration: 0.8 }}
              >
                {achievement.number}
              </motion.h3>
              <p className="text-gray-400 mt-2">{achievement.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Our Team
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 text-center"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1 }}
                className="w-32 h-32 mx-auto mb-4 relative"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover"
                />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-blue-400 mb-4">{member.role}</p>
              <p className="text-gray-400">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Vision Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-20 px-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-lg"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Our Vision
          </h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xl text-gray-300"
          >
            We envision a world where humans and robots work together seamlessly, enhancing our capabilities and pushing the boundaries of what's possible. Through continuous innovation and ethical development, we're building that future today.
          </motion.p>
        </div>
      </motion.section>
    </main>
  );
}
