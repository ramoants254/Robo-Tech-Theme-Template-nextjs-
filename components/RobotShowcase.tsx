'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import RobotCard from './RobotCard';
import { useRobotStore } from '../store/robotStore';

interface Robot {
  id: number;
  name: string;
  manufacturer: string;
  price: string;
  description: string;
  features: string[];
  image: string;
  status: string;
}

const robotsData: Robot[] = [
  {
    id: 1,
    name: 'Tesla Optimus Gen 2',
    manufacturer: 'Tesla',
    price: '$20,000',
    description: 'Humanoid robot designed for general purpose tasks. Features advanced AI and natural movement.',
    features: [
      'Adaptive AI Learning',
      'Human-like Movement',
      'Advanced Dexterity',
      'Voice Recognition',
      'Safety Protocols'
    ],
    image: '/images/placeholder-robot.svg',
    status: 'Pre-order'
  },
  {
    id: 2,
    name: 'Spot Enterprise',
    manufacturer: 'Boston Dynamics',
    price: '$75,000',
    description: 'Agile mobile robot for industrial inspection and data collection.',
    features: [
      'All-terrain Mobility',
      'Remote Operation',
      'Autonomous Navigation',
      'Customizable Payloads',
      '360° Perception'
    ],
    image: '/images/placeholder-robot.svg',
    status: 'In Stock'
  },
  {
    id: 3,
    name: 'Atlas Pro',
    manufacturer: 'Boston Dynamics',
    price: 'Contact for Price',
    description: 'Advanced humanoid robot capable of dynamic movement and complex tasks.',
    features: [
      'Parkour Capability',
      'Object Manipulation',
      'Dynamic Balance',
      'Task Learning',
      'Sensor Integration'
    ],
    image: '/images/placeholder-robot.svg',
    status: 'Coming Soon'
  },
  {
    id: 4,
    name: 'Ameca',
    manufacturer: 'Engineered Arts',
    price: '$150,000',
    description: 'The world\'s most advanced human-shaped robot, featuring unprecedented facial expressions and human-like interaction.',
    features: [
      'Natural Facial Expressions',
      'Advanced Social Interaction',
      'Emotional Recognition',
      'Gesture Control',
      'Multi-language Support'
    ],
    image: '/images/placeholder-robot.svg',
    status: 'In Stock'
  },
  {
    id: 5,
    name: 'Stretch',
    manufacturer: 'Boston Dynamics',
    price: '$65,000',
    description: 'Mobile robot designed for warehouse automation and box moving.',
    features: [
      'Smart Gripper Technology',
      'Mobile Base',
      'Computer Vision',
      'Case Handling',
      'Autonomous Operation'
    ],
    image: '/images/placeholder-robot.svg',
    status: 'In Stock'
  },
  {
    id: 6,
    name: 'Digit',
    manufacturer: 'Agility Robotics',
    price: '$250,000',
    description: 'Bipedal robot designed for logistics and last-mile delivery.',
    features: [
      'Bipedal Locomotion',
      'Package Handling',
      'Stairs Navigation',
      'Human Environment Operation',
      'Long Battery Life'
    ],
    image: '/images/placeholder-robot.svg',
    status: 'Pre-order'
  }
];

export default function RobotShowcase() {
  const { robots, selectedRobot, selectRobot, isLoading, fetchRobots } = useRobotStore();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (robots.length === 0) {
      fetchRobots().then(() => {
        const firstRobot = useRobotStore.getState().robots[0];
        if (firstRobot) {
          selectRobot(firstRobot);
        }
      });
    }
  }, [robots.length, fetchRobots, selectRobot]);

  if (isLoading || !selectedRobot) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500" />
      </div>
    );
  }

  return (
    <section className="py-20 overflow-hidden" aria-labelledby="showcase-title">
      <div className="container mx-auto px-4">
        <motion.h2
          id="showcase-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Robots
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Robot Cards Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
            role="region"
            aria-label="Robot Selection"
          >
            <div 
              className="grid grid-cols-2 md:grid-cols-3 gap-6"
              role="listbox"
              aria-label="Available Robots"
            >
              {robots.map((robot, index) => (
                <motion.div
                  key={robot.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  role="option"
                  aria-selected={selectedRobot.id === robot.id}
                >
                  <RobotCard
                    name={robot.name}
                    image={robot.image}
                    status={robot.status}
                    onClick={() => selectRobot(robot)}
                    isSelected={selectedRobot.id === robot.id}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Robot Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
            role="region"
            aria-label="Selected Robot Details"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedRobot.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-800"
              >
                <h3 className="text-3xl font-bold text-blue-400 mb-2">
                  {selectedRobot.name}
                </h3>
                <p className="text-gray-400 mb-4">
                  By {selectedRobot.manufacturer}
                </p>
                <p className="text-2xl font-bold text-white mb-6">
                  {selectedRobot.price}
                </p>
                <p className="text-gray-300 mb-8">
                  {selectedRobot.description}
                </p>

                {/* Features */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-blue-400">Key Features</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4" role="list">
                    {selectedRobot.features.map((feature, index) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-2 h-2 rounded-full bg-blue-400" aria-hidden="true" />
                        <span className="text-gray-300">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                  aria-label={`${selectedRobot.status === 'In Stock' ? 'Order' : 
                             selectedRobot.status === 'Pre-order' ? 'Pre-order' : 
                             'Join Waitlist for'} ${selectedRobot.name}`}
                >
                  {selectedRobot.status === 'In Stock' ? 'Order Now' : 
                   selectedRobot.status === 'Pre-order' ? 'Pre-order Now' : 
                   'Join Waitlist'}
                </motion.button>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
