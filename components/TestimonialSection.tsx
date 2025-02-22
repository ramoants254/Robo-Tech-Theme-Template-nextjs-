'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Dr. Sarah Chen',
    role: 'Chief of Robotics, SpaceX',
    image: 'https://placehold.co/200x200/1a1a1a/0088ff?text=SC',
    content: 'The Tesla Optimus has revolutionized our manufacturing process. The adaptive AI learning capabilities are truly groundbreaking.',
    rating: 5
  },
  {
    id: 2,
    name: 'James Rodriguez',
    role: 'Head of Operations, Boston Dynamics',
    image: 'https://placehold.co/200x200/1a1a1a/0088ff?text=JR',
    content: 'Spot Enterprise has exceeded our expectations in industrial inspections. The autonomous navigation is unmatched.',
    rating: 5
  },
  {
    id: 3,
    name: 'Dr. Emily Watson',
    role: 'Medical Director, Mayo Clinic',
    image: 'https://placehold.co/200x200/1a1a1a/0088ff?text=EW',
    content: 'The precision of the surgical assistance robots is remarkable. They have helped us achieve unprecedented accuracy.',
    rating: 5
  }
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [autoplay]);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Trusted by Industry Leaders
          </span>
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl" />
          <div className="absolute inset-0 backdrop-blur-sm rounded-2xl" />

          {/* Content */}
          <div className="relative p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col items-center text-center space-y-6"
              >
                <motion.img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-20 h-20 rounded-full border-2 border-blue-500/20"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                />
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-white">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-blue-400">
                    {testimonials[currentIndex].role}
                  </p>
                </div>

                <p className="text-gray-300 text-lg max-w-2xl">
                  "{testimonials[currentIndex].content}"
                </p>

                <div className="flex space-x-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="text-yellow-400"
                    >
                      ★
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setAutoplay(false);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-blue-400 w-6'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
