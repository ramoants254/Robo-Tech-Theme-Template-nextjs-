'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const features = [
  {
    id: 'design',
    title: 'Modern Design',
    description: 'Clean and professional design with attention to detail',
    videoTimestamp: 0,
    highlights: [
      'Responsive layout',
      'Modern UI components',
      'Smooth animations',
      'Professional typography'
    ]
  },
  {
    id: 'components',
    title: 'Rich Components',
    description: 'Comprehensive set of pre-built components',
    videoTimestamp: 30,
    highlights: [
      'Hero sections',
      'Feature showcases',
      'Team profiles',
      'Pricing tables'
    ]
  },
  {
    id: 'performance',
    title: 'Optimized Performance',
    description: 'Built with performance in mind',
    videoTimestamp: 60,
    highlights: [
      'Fast page loads',
      'Code splitting',
      'Image optimization',
      'Efficient animations'
    ]
  },
  {
    id: 'customization',
    title: 'Easy Customization',
    description: 'Highly customizable with clean code',
    videoTimestamp: 90,
    highlights: [
      'Tailwind CSS',
      'TypeScript support',
      'Modular components',
      'Detailed documentation'
    ]
  }
];

export default function DemoPage() {
  const [activeFeature, setActiveFeature] = useState(features[0]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Template Features
          </h1>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Explore the powerful features of our robotics company template
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Video Player */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-400 mb-4">Demo video coming soon</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold"
                >
                  Play Demo
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Feature Navigation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                whileHover={{ scale: 1.02 }}
                className={`p-6 rounded-xl cursor-pointer transition-colors ${
                  activeFeature.id === feature.id
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20'
                    : 'bg-gradient-to-br from-gray-800/50 to-gray-900/50'
                }`}
                onClick={() => setActiveFeature(feature)}
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {feature.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 text-sm text-gray-300"
                    >
                      <svg
                        className="w-4 h-4 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Feature Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            {
              title: 'Next.js 13+',
              description: 'Built with the latest Next.js features'
            },
            {
              title: 'TypeScript',
              description: 'Full TypeScript support for better development'
            },
            {
              title: 'Tailwind CSS',
              description: 'Utility-first CSS framework for styling'
            },
            {
              title: 'Framer Motion',
              description: 'Beautiful animations and transitions'
            },
            {
              title: 'SEO Optimized',
              description: 'Built-in SEO best practices'
            },
            {
              title: 'Mobile First',
              description: 'Responsive design for all devices'
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-12 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Purchase our template now and create a stunning website for your
              robotics company.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-colors"
            >
              Purchase Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
