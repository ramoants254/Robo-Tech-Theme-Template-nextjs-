'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ComparisonCategory {
  name: string;
  metrics: {
    name: string;
    values: Record<string, string | number>;
    unit?: string;
  }[];
}

const comparisonData: ComparisonCategory[] = [
  {
    name: 'Performance',
    metrics: [
      {
        name: 'Processing Power',
        values: {
          'Tesla Optimus Gen 2': 15,
          'Spot Enterprise': 8,
          'Atlas Pro': 12,
          'Ameca': 10,
          'Stretch': 6,
          'Digit': 8
        },
        unit: 'PFLOPS'
      },
      {
        name: 'Battery Life',
        values: {
          'Tesla Optimus Gen 2': 12,
          'Spot Enterprise': 90,
          'Atlas Pro': 60,
          'Ameca': 8,
          'Stretch': 120,
          'Digit': 180
        },
        unit: 'minutes'
      }
    ]
  },
  {
    name: 'Capabilities',
    metrics: [
      {
        name: 'Lift Capacity',
        values: {
          'Tesla Optimus Gen 2': 20,
          'Spot Enterprise': 14,
          'Atlas Pro': 30,
          'Ameca': 5,
          'Stretch': 50,
          'Digit': 35
        },
        unit: 'kg'
      },
      {
        name: 'Movement Speed',
        values: {
          'Tesla Optimus Gen 2': 5,
          'Spot Enterprise': 3,
          'Atlas Pro': 5,
          'Ameca': 0,
          'Stretch': 2,
          'Digit': 3
        },
        unit: 'km/h'
      }
    ]
  }
];

export default function CompareRobots() {
  const [selectedRobots, setSelectedRobots] = useState<string[]>(['Tesla Optimus Gen 2', 'Atlas Pro']);
  const [activeCategory, setActiveCategory] = useState(comparisonData[0].name);

  const handleRobotToggle = (robotName: string) => {
    setSelectedRobots(prev => {
      if (prev.includes(robotName)) {
        return prev.filter(name => name !== robotName);
      }
      if (prev.length < 3) {
        return [...prev, robotName];
      }
      return prev;
    });
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Compare Robots
          </span>
        </h2>

        {/* Robot Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(comparisonData[0].metrics[0].values).map((robotName) => (
            <button
              key={robotName}
              onClick={() => handleRobotToggle(robotName)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                selectedRobots.includes(robotName)
                  ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              {robotName}
            </button>
          ))}
        </div>

        {/* Category Selection */}
        <div className="flex justify-center space-x-4 mb-12">
          {comparisonData.map((category) => (
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

        {/* Comparison Chart */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              {comparisonData
                .find(cat => cat.name === activeCategory)
                ?.metrics.map((metric) => (
                  <div key={metric.name} className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-300">
                      {metric.name} {metric.unit && `(${metric.unit})`}
                    </h3>
                    <div className="grid gap-4">
                      {selectedRobots.map((robotName) => (
                        <div key={robotName} className="relative">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-gray-400">{robotName}</span>
                            <span className="text-sm text-blue-400">
                              {metric.values[robotName]} {metric.unit}
                            </span>
                          </div>
                          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{
                                width: `${(Number(metric.values[robotName]) / Math.max(...Object.values(metric.values).map(Number))) * 100}%`
                              }}
                              className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                              transition={{ duration: 1, ease: "easeOut" }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
