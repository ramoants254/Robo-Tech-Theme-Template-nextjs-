'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const faqs = [
  {
    category: 'General',
    questions: [
      {
        q: 'What types of robots do you offer?',
        a: 'We offer a wide range of robots including industrial automation robots, collaborative robots (cobots), autonomous mobile robots (AMRs), and custom-designed robots for specific applications.'
      },
      {
        q: 'How long does implementation typically take?',
        a: 'Implementation time varies depending on the complexity of your project. Simple implementations can take 2-4 weeks, while more complex solutions might take 2-3 months.'
      },
      {
        q: 'Do you provide training for our staff?',
        a: 'Yes, we provide comprehensive training programs for your staff, including operation, maintenance, and basic troubleshooting.'
      }
    ]
  },
  {
    category: 'Technical',
    questions: [
      {
        q: 'What programming languages do your robots support?',
        a: 'Our robots support multiple programming languages including Python, C++, and our proprietary visual programming interface.'
      },
      {
        q: 'Can your robots integrate with our existing systems?',
        a: 'Yes, our robots are designed with open APIs and standard protocols to integrate seamlessly with most existing industrial and business systems.'
      },
      {
        q: 'What safety features are included?',
        a: 'Our robots include advanced safety features such as collision detection, emergency stops, speed monitoring, and safety-rated monitored stops.'
      }
    ]
  },
  {
    category: 'Support',
    questions: [
      {
        q: 'What kind of support do you offer?',
        a: 'We offer 24/7 technical support, regular maintenance, software updates, and emergency response services depending on your service plan.'
      },
      {
        q: 'How quickly can we get technical assistance?',
        a: 'Response times vary by service level. Premium support customers receive responses within 1 hour, while standard support is within 4 business hours.'
      },
      {
        q: 'Do you offer remote support?',
        a: 'Yes, we provide remote diagnostics and support for software issues. For hardware issues, we can dispatch technicians to your location.'
      }
    ]
  },
  {
    category: 'Pricing',
    questions: [
      {
        q: 'What payment methods do you accept?',
        a: 'We accept all major credit cards, wire transfers, and purchase orders for enterprise customers.'
      },
      {
        q: 'Do you offer financing options?',
        a: 'Yes, we offer flexible financing options including leasing and payment plans for qualified customers.'
      },
      {
        q: 'Are there any hidden costs?',
        a: 'No, we are transparent about all costs. Your quote will include hardware, software, implementation, training, and ongoing support costs.'
      }
    ]
  }
];

export default function FAQPage() {
  const [expandedCategory, setExpandedCategory] = useState<string>('General');
  const [expandedQuestions, setExpandedQuestions] = useState<string[]>([]);

  const toggleQuestion = (question: string) => {
    setExpandedQuestions((prev) =>
      prev.includes(question)
        ? prev.filter((q) => q !== question)
        : [...prev, question]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Find answers to common questions about our robotics solutions
          </p>
        </motion.div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {faqs.map((category) => (
            <motion.button
              key={category.category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setExpandedCategory(category.category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                expandedCategory === category.category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                  : 'bg-gray-800/50 text-gray-400 hover:text-white'
              }`}
            >
              {category.category}
            </motion.button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-6">
          {faqs
            .find((cat) => cat.category === expandedCategory)
            ?.questions.map((faq, index) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm"
              >
                <button
                  onClick={() => toggleQuestion(faq.q)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="text-lg font-semibold text-white">
                    {faq.q}
                  </span>
                  <svg
                    className={`w-6 h-6 text-gray-400 transform transition-transform ${
                      expandedQuestions.includes(faq.q) ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {expandedQuestions.includes(faq.q) && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-400">{faq.a}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-12 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Our team is here to help. Contact us for detailed information about
              our robotics solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-colors"
            >
              Contact Support
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
