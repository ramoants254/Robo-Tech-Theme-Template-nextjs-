'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    id: 1,
    title: 'Industrial Automation',
    description:
      'Transform your manufacturing with our advanced robotics solutions. Increase efficiency and reduce costs.',
    icon: '/icons/industrial.svg',
    features: [
      'Assembly Line Automation',
      'Quality Control Systems',
      'Warehouse Automation',
      'Predictive Maintenance'
    ]
  },
  {
    id: 2,
    title: 'AI Integration',
    description:
      'Enhance your robots with cutting-edge artificial intelligence and machine learning capabilities.',
    icon: '/icons/ai.svg',
    features: [
      'Computer Vision',
      'Natural Language Processing',
      'Reinforcement Learning',
      'Neural Networks'
    ]
  },
  {
    id: 3,
    title: 'Custom Solutions',
    description:
      'Tailored robotics solutions designed specifically for your unique business needs and challenges.',
    icon: '/icons/custom.svg',
    features: [
      'Requirements Analysis',
      'Custom Development',
      'Integration Services',
      'Ongoing Support'
    ]
  },
  {
    id: 4,
    title: 'Consulting',
    description:
      'Expert guidance on implementing robotics solutions and optimizing your automation strategy.',
    icon: '/icons/consulting.svg',
    features: [
      'Strategy Development',
      'ROI Analysis',
      'Process Optimization',
      'Training Programs'
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Our Services
          </h1>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive robotics solutions tailored to your industry needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/10 transition-shadow"
            >
              <div className="flex items-start space-x-6">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + featureIndex * 0.1 }}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                        <span className="text-gray-300">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-colors"
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-12 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how our robotics solutions can help you
              achieve your automation goals.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-colors"
            >
              Schedule a Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
