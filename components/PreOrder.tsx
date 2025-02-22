'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Plan {
  id: number;
  name: string;
  price: string;
  description: string;
  features: string[];
  specs: {
    ai: string;
    power: string;
    updates: string;
    warranty: string;
  };
}

const plans: Plan[] = [
  {
    id: 1,
    name: "Quantum Standard",
    price: "49,999",
    description: "Perfect for businesses starting their journey into quantum robotics",
    features: [
      "Neural Core AI System",
      "Quantum Processing Unit",
      "Holographic Interface",
      "Basic Molecular Assembly",
      "Neural Network Training",
      "Quantum Encryption"
    ],
    specs: {
      ai: "Neural Core v12.5",
      power: "Quantum Cell (500 TW)",
      updates: "Monthly Neural Updates",
      warranty: "5-Year Quantum Shield"
    }
  },
  {
    id: 2,
    name: "Quantum Professional",
    price: "149,999",
    description: "Advanced capabilities for demanding quantum operations",
    features: [
      "Advanced Neural Matrix",
      "Quantum Teleportation Ready",
      "Multi-Dimensional Interface",
      "Advanced Molecular Engineering",
      "Custom Neural Training",
      "Time-Space Encryption",
      "Zero-Point Energy Module"
    ],
    specs: {
      ai: "Neural Matrix Pro v15.0",
      power: "Fusion Core (2,000 TW)",
      updates: "Weekly Neural Updates",
      warranty: "10-Year Quantum Shield"
    }
  },
  {
    id: 3,
    name: "Quantum Enterprise",
    price: "Custom",
    description: "Unlimited quantum potential for large-scale operations",
    features: [
      "Quantum Consciousness AI",
      "Reality Manipulation Suite",
      "Dimensional Gateway Access",
      "Universal Molecular Control",
      "Infinite Neural Evolution",
      "Quantum Realm Security",
      "Dark Energy Harvesting",
      "Time Dilation Controls"
    ],
    specs: {
      ai: "Quantum Mind v20.0",
      power: "Dark Energy Core (∞ TW)",
      updates: "Real-time Neural Evolution",
      warranty: "Lifetime Quantum Shield"
    }
  }
];

const PreOrder: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  return (
    <section className="py-20 bg-cyber-darker relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-darker via-cyber-dark to-cyber-darker"></div>

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
              scale: [1, 2, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink animate-shimmer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Quantum Pre-Order
        </motion.h2>

        <motion.p
          className="text-xl text-center text-gray-400 mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Step into the future with our revolutionary quantum-powered robots. Choose the plan that aligns with your dimensional needs.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className={`glass-panel relative overflow-hidden group cursor-pointer ${
                selectedPlan === plan.id ? 'ring-2 ring-neon-blue' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              onClick={() => setSelectedPlan(plan.id)}
              onHoverStart={() => setHoveredPlan(plan.id)}
              onHoverEnd={() => setHoveredPlan(null)}
            >
              {/* Holographic Effect */}
              <div className="absolute inset-0 bg-hologram-texture animate-hologram opacity-30"></div>

              {/* Content */}
              <div className="relative z-10 p-8">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">
                    {plan.name}
                  </h3>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <div className="mb-8">
                  <div className="text-4xl font-bold text-white mb-2">
                    ${plan.price}
                    {plan.price !== "Custom" && (
                      <span className="text-lg text-gray-400 ml-2">USD</span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse"></div>
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-4 mb-8 pt-6 border-t border-neon-blue/20">
                  <div>
                    <div className="text-xs text-gray-400 mb-1">AI System</div>
                    <div className="text-sm text-neon-blue">{plan.specs.ai}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-1">Power Source</div>
                    <div className="text-sm text-neon-green">{plan.specs.power}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-1">Updates</div>
                    <div className="text-sm text-neon-yellow">{plan.specs.updates}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-1">Warranty</div>
                    <div className="text-sm text-neon-pink">{plan.specs.warranty}</div>
                  </div>
                </div>

                <motion.button
                  className="w-full py-4 rounded-full relative overflow-hidden group"
                  style={{
                    background: 'linear-gradient(90deg, #00f3ff, #bf00ff)',
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 font-bold">
                    Initialize Quantum Order
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-1 -right-1 w-12 h-12 border-t-2 border-r-2 border-neon-blue animate-pulse-slow"></div>
              <div className="absolute -bottom-1 -left-1 w-12 h-12 border-b-2 border-l-2 border-neon-purple animate-pulse-slow"></div>

              {/* Hover Effect */}
              {hoveredPlan === plan.id && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        <motion.p 
          className="text-center mt-12 text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          * All prices include quantum entanglement setup and neural network initialization.
          <br />
          Dimensional transport fees calculated at checkout based on your space-time coordinates.
        </motion.p>
      </div>
    </section>
  );
};

export default PreOrder;
