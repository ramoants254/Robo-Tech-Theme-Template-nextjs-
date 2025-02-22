'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface SpecCategory {
  name: string;
  specs: {
    label: string;
    value: string;
    description?: string;
  }[];
}

const specifications: SpecCategory[] = [
  {
    name: 'Physical',
    specs: [
      { 
        label: 'Height',
        value: '5.8 ft (1.77m)',
        description: 'Optimal height for human interaction and accessibility'
      },
      {
        label: 'Weight',
        value: '125 lbs (57kg)',
        description: 'Lightweight yet durable construction'
      },
      {
        label: 'Material',
        value: 'Titanium Alloy & Carbon Fiber',
        description: 'Advanced materials for durability and performance'
      }
    ]
  },
  {
    name: 'Performance',
    specs: [
      {
        label: 'Processing Power',
        value: '15 PFLOPS',
        description: 'Quantum-enhanced neural processing unit'
      },
      {
        label: 'Battery Life',
        value: '12 hours',
        description: 'Continuous operation with quick-charge capability'
      },
      {
        label: 'Response Time',
        value: '< 1ms',
        description: 'Near-instantaneous reaction to inputs'
      }
    ]
  },
  {
    name: 'Intelligence',
    specs: [
      {
        label: 'AI Model',
        value: 'Neural Quantum v4.0',
        description: 'Latest generation of quantum-enhanced AI'
      },
      {
        label: 'Learning Rate',
        value: '500K parameters/s',
        description: 'Rapid adaptation to new scenarios'
      },
      {
        label: 'Decision Accuracy',
        value: '99.99%',
        description: 'In standard operating conditions'
      }
    ]
  }
];

export default function TechnicalSpecs() {
  const [activeCategory, setActiveCategory] = useState(specifications[0].name);
  const [hoveredSpec, setHoveredSpec] = useState<string | null>(null);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Specifications
          </span>
        </h2>

        {/* Category Navigation */}
        <div className="flex justify-center space-x-4 mb-12">
          {specifications.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.name
                  ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Specs Display */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {specifications
              .find((cat) => cat.name === activeCategory)
              ?.specs.map((spec) => (
                <motion.div
                  key={spec.label}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="relative group"
                  onMouseEnter={() => setHoveredSpec(spec.label)}
                  onMouseLeave={() => setHoveredSpec(null)}
                >
                  <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-800/50 h-full">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-medium text-gray-300">
                        {spec.label}
                      </h3>
                      <div className="h-px flex-grow mx-4 bg-gradient-to-r from-blue-500/50 to-transparent" />
                    </div>
                    <p className="text-2xl font-bold text-blue-400 mb-2">
                      {spec.value}
                    </p>
                    {hoveredSpec === spec.label && spec.description && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-sm text-gray-400"
                      >
                        {spec.description}
                      </motion.p>
                    )}
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
