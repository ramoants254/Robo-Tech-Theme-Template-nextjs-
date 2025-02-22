'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const plans = {
  monthly: [
    {
      name: 'Starter',
      price: '$999',
      period: '/month',
      description: 'Perfect for small businesses starting with automation',
      features: [
        '1 Robot Unit',
        'Basic AI Integration',
        'Standard Support',
        '8/5 Maintenance',
        'Basic Analytics',
        'Remote Monitoring'
      ]
    },
    {
      name: 'Professional',
      price: '$2,499',
      period: '/month',
      description: 'Ideal for growing companies with advanced needs',
      features: [
        '3 Robot Units',
        'Advanced AI Integration',
        'Priority Support',
        '24/7 Maintenance',
        'Advanced Analytics',
        'Remote Control',
        'Custom Integration',
        'Training Sessions'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations requiring full automation',
      features: [
        'Unlimited Robot Units',
        'Full AI Suite',
        'Dedicated Support',
        '24/7 Premium Service',
        'Enterprise Analytics',
        'Full Control Suite',
        'Custom Development',
        'On-site Training',
        'SLA Guarantee'
      ]
    }
  ],
  yearly: [
    {
      name: 'Starter',
      price: '$899',
      period: '/month',
      description: 'Perfect for small businesses starting with automation',
      features: [
        '1 Robot Unit',
        'Basic AI Integration',
        'Standard Support',
        '8/5 Maintenance',
        'Basic Analytics',
        'Remote Monitoring'
      ]
    },
    {
      name: 'Professional',
      price: '$2,249',
      period: '/month',
      description: 'Ideal for growing companies with advanced needs',
      features: [
        '3 Robot Units',
        'Advanced AI Integration',
        'Priority Support',
        '24/7 Maintenance',
        'Advanced Analytics',
        'Remote Control',
        'Custom Integration',
        'Training Sessions'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations requiring full automation',
      features: [
        'Unlimited Robot Units',
        'Full AI Suite',
        'Dedicated Support',
        '24/7 Premium Service',
        'Enterprise Analytics',
        'Full Control Suite',
        'Custom Development',
        'On-site Training',
        'SLA Guarantee'
      ]
    }
  ]
};

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>(
    'monthly'
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Flexible Pricing
          </h1>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your automation needs
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 inline-flex items-center space-x-4 bg-gray-800/50 rounded-lg p-2">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                billingPeriod === 'monthly'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                  : 'text-gray-400'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                billingPeriod === 'yearly'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                  : 'text-gray-400'
              }`}
            >
              Yearly
              <span className="ml-2 text-sm text-blue-400">Save 10%</span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans[billingPeriod].map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 backdrop-blur-sm ${
                plan.popular
                  ? 'ring-2 ring-blue-500 shadow-lg shadow-blue-500/20'
                  : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="inline-block px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + featureIndex * 0.1 }}
                    className="flex items-center space-x-3 text-gray-300"
                  >
                    <svg
                      className="w-5 h-5 text-blue-500 flex-shrink-0"
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
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full px-6 py-3 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              >
                {plan.price === 'Custom' ? 'Contact Us' : 'Get Started'}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400">
              Find answers to common questions about our pricing and services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: 'What is included in the maintenance service?',
                a: 'Our maintenance service includes regular check-ups, software updates, and emergency repairs to ensure your robots operate at peak performance.'
              },
              {
                q: 'Can I upgrade my plan later?',
                a: 'Yes, you can upgrade your plan at any time. The new pricing will be prorated for the remainder of your billing period.'
              },
              {
                q: 'Do you offer custom solutions?',
                a: 'Yes, our Enterprise plan includes custom development and integration services tailored to your specific needs.'
              },
              {
                q: 'What kind of support do you provide?',
                a: 'We offer different levels of support based on your plan, ranging from standard business hours support to 24/7 dedicated assistance.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  {faq.q}
                </h3>
                <p className="text-gray-400">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
