'use client';

import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import { Environment, OrbitControls, Stars } from '@react-three/drei';

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  features: string[];
  specs: {
    ai: string;
    power: string;
    height: string;
    weight: string;
  };
}

const products: Product[] = [
  {
    id: 1,
    name: "CareBot X1",
    category: "Childcare",
    description: "Quantum AI-powered childcare assistant with advanced neural safety systems and educational capabilities.",
    features: ["Quantum Neural Monitoring", "Holographic Education Interface", "Emotion Recognition AI", "Biometric Tracking"],
    specs: {
      ai: "Neural Core v12.5",
      power: "Quantum Cell",
      height: "1.5 meters",
      weight: "45 kg"
    }
  },
  {
    id: 2,
    name: "LogisticsPro 2000",
    category: "Warehouse",
    description: "Autonomous warehouse robot with quantum computing and molecular manipulation capabilities.",
    features: ["Quantum Navigation", "Molecular Assembly", "Swarm Intelligence", "Zero-G Operations"],
    specs: {
      ai: "Hive Mind v8.0",
      power: "Fusion Core",
      height: "2.0 meters",
      weight: "120 kg"
    }
  },
  {
    id: 3,
    name: "MediBot Assist",
    category: "Healthcare",
    description: "Medical assistance robot with nanoscale precision and quantum diagnostic capabilities.",
    features: ["Nano-Surgery Suite", "Quantum Diagnostics", "Holographic Interface", "Bioprinting"],
    specs: {
      ai: "MediCore v15.0",
      power: "Antimatter Cell",
      height: "1.8 meters",
      weight: "80 kg"
    }
  },
  {
    id: 4,
    name: "SecureBot Guardian",
    category: "Security",
    description: "Advanced security robot with quantum encryption and molecular detection systems.",
    features: ["Quantum Scanning", "Neural Threat Detection", "Holographic Shield", "Time Dilation Field"],
    specs: {
      ai: "Guardian Core v10.0",
      power: "Dark Energy Cell",
      height: "2.2 meters",
      weight: "150 kg"
    }
  }
];

const ProductShowcase: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product>(products[0]);

  return (
    <section className="min-h-screen bg-cyber-darker py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-darker via-cyber-dark to-cyber-darker"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple animate-shimmer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Next-Generation Robotics
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 3D Model Viewer */}
          <motion.div 
            className="h-[600px] glass-panel relative overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Holographic Effect */}
            <div className="absolute inset-0 bg-hologram-texture animate-hologram opacity-50"></div>
            
            <Canvas className="relative z-10">
              <Suspense fallback={null}>
                <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
                <Environment preset="night" />
                <OrbitControls autoRotate autoRotateSpeed={1} />
                {/* Add your 3D robot model here */}
              </Suspense>
            </Canvas>

            {/* Specs Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-cyber-darker to-transparent">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-neon-blue mb-1">AI System</div>
                  <div className="text-gray-300">{selectedProduct.specs.ai}</div>
                </div>
                <div>
                  <div className="text-neon-blue mb-1">Power Source</div>
                  <div className="text-gray-300">{selectedProduct.specs.power}</div>
                </div>
                <div>
                  <div className="text-neon-blue mb-1">Height</div>
                  <div className="text-gray-300">{selectedProduct.specs.height}</div>
                </div>
                <div>
                  <div className="text-neon-blue mb-1">Weight</div>
                  <div className="text-gray-300">{selectedProduct.specs.weight}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Product Details */}
          <div className="space-y-8">
            <div className="flex flex-wrap gap-4">
              {products.map((product) => (
                <motion.button
                  key={product.id}
                  className={`px-6 py-3 rounded-full backdrop-blur-sm transition-all duration-300 ${
                    selectedProduct.id === product.id
                      ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-lg shadow-neon-blue/50'
                      : 'border border-neon-blue/30 hover:border-neon-blue text-gray-300 hover:text-white'
                  }`}
                  onClick={() => setSelectedProduct(product)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {product.category}
                </motion.button>
              ))}
            </div>

            <motion.div
              key={selectedProduct.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-panel p-8 relative overflow-hidden"
            >
              {/* Holographic Effect */}
              <div className="absolute inset-0 bg-hologram-texture animate-hologram opacity-30"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">
                  {selectedProduct.name}
                </h3>
                <p className="text-gray-300 mb-8 text-lg">{selectedProduct.description}</p>
                
                <div className="grid grid-cols-2 gap-6">
                  {selectedProduct.features.map((feature, index) => (
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
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-1 -right-1 w-12 h-12 border-t-2 border-r-2 border-neon-blue animate-pulse-slow"></div>
              <div className="absolute -bottom-1 -left-1 w-12 h-12 border-b-2 border-l-2 border-neon-purple animate-pulse-slow"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
