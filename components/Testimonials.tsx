'use client';

import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  company: string;
  quote: string;
  author: string;
  role: string;
  image: string;
  stats: {
    efficiency: number;
    satisfaction: number;
    reliability: number;
  };
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    company: "TechCare Facilities",
    quote: "The CareBot X1's quantum neural network has revolutionized childcare. Parents are amazed by its ability to simultaneously educate and protect through molecular-level monitoring.",
    author: "Dr. Sarah Chen",
    role: "Director of Quantum Operations",
    image: "/testimonials/techcare.jpg",
    stats: {
      efficiency: 98,
      satisfaction: 99,
      reliability: 99.9
    }
  },
  {
    id: 2,
    company: "Global Logistics Corp",
    quote: "LogisticsPro 2000's swarm intelligence and zero-gravity capabilities have increased our space station efficiency by 300%. The quantum coordination is beyond anything we've seen.",
    author: "Michael Rodriguez",
    role: "Chief of Space Operations",
    image: "/testimonials/logistics.jpg",
    stats: {
      efficiency: 300,
      satisfaction: 98,
      reliability: 99.8
    }
  },
  {
    id: 3,
    company: "Metropolitan Med-Tech",
    quote: "MediBot Assist's nano-surgical precision and quantum diagnostics have revolutionized our approach to medicine. It's like having a thousand expert surgeons in one entity.",
    author: "Dr. Emily Watson",
    role: "Director of Quantum Medicine",
    image: "/testimonials/hospital.jpg",
    stats: {
      efficiency: 250,
      satisfaction: 100,
      reliability: 99.99
    }
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-cyber-darker relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-darker via-cyber-dark to-cyber-darker"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neon-blue rounded-full"
            animate={{
              x: [Math.random() * 100, Math.random() * 100],
              y: [Math.random() * 100, Math.random() * 100],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink animate-shimmer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Quantum Success Stories
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="glass-panel relative overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Holographic Effect */}
              <div className="absolute inset-0 bg-hologram-texture animate-hologram opacity-30"></div>

              {/* Content */}
              <div className="relative z-10 p-8">
                {/* Company Logo Area */}
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">
                    {testimonial.company}
                  </h3>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple opacity-20 animate-pulse"></div>
                </div>

                {/* Quote */}
                <div className="relative mb-8">
                  <div className="absolute -top-4 -left-2 text-6xl text-neon-blue opacity-20">"</div>
                  <p className="text-gray-300 italic relative z-10">{testimonial.quote}</p>
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-sm text-neon-blue">{testimonial.role}</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-neon-blue/20">
                  <div>
                    <div className="text-xs text-gray-400 mb-1">Efficiency</div>
                    <div className="text-lg font-bold text-neon-green">
                      +{testimonial.stats.efficiency}%
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-1">Satisfaction</div>
                    <div className="text-lg font-bold text-neon-yellow">
                      {testimonial.stats.satisfaction}%
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-1">Reliability</div>
                    <div className="text-lg font-bold text-neon-pink">
                      {testimonial.stats.reliability}%
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-1 -right-1 w-8 h-8 border-t border-r border-neon-blue/50 opacity-50"></div>
                <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b border-l border-neon-purple/50 opacity-50"></div>
              </div>

              {/* Hover Effects */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10"></div>
                <div className="absolute inset-0 bg-cyber-grid opacity-20 animate-matrix"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
