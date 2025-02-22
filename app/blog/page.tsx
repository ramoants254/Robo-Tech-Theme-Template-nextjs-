'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Industrial Robotics',
    excerpt:
      'Explore how advanced robotics is transforming manufacturing and industrial processes...',
    image: '/blog/industrial-robots.jpg',
    category: 'Industry Trends',
    author: 'Dr. Sarah Chen',
    date: 'Feb 10, 2025',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'AI and Robotics: A Perfect Partnership',
    excerpt:
      'Discover how artificial intelligence is enhancing robotic capabilities and decision-making...',
    image: '/blog/ai-robotics.jpg',
    category: 'Technology',
    author: 'James Wilson',
    date: 'Feb 8, 2025',
    readTime: '4 min read'
  },
  {
    id: 3,
    title: 'Robotics in Healthcare',
    excerpt:
      'Learn about the revolutionary impact of robotics in modern healthcare and patient care...',
    image: '/blog/healthcare-robots.jpg',
    category: 'Healthcare',
    author: 'Dr. Emily Brooks',
    date: 'Feb 5, 2025',
    readTime: '6 min read'
  },
  {
    id: 4,
    title: 'The Rise of Collaborative Robots',
    excerpt:
      'Understanding the growing trend of cobots and their impact on workplace safety...',
    image: '/blog/collaborative-robots.jpg',
    category: 'Innovation',
    author: 'Michael Chang',
    date: 'Feb 3, 2025',
    readTime: '4 min read'
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Latest Insights
          </h1>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Stay updated with the latest trends and innovations in robotics and
            automation
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-16"
        >
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden">
            <Image
              src="/blog/featured-post.jpg"
              alt="Featured post"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-semibold mb-4">
                Featured
              </span>
              <h2 className="text-3xl font-bold text-white mb-4">
                The Next Generation of Humanoid Robots
              </h2>
              <p className="text-gray-300 mb-4 max-w-2xl">
                An in-depth look at the latest advancements in humanoid robotics
                and their potential impact on society...
              </p>
              <div className="flex items-center space-x-4 text-gray-400">
                <span>By John Doe</span>
                <span>•</span>
                <span>Feb 11, 2025</span>
                <span>•</span>
                <span>8 min read</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/10 transition-shadow"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                  <span>{post.category}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gray-700" />
                    <span className="text-sm text-gray-400">{post.author}</span>
                  </div>
                  <span className="text-sm text-gray-400">{post.date}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-12 text-center backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights in robotics and
              automation
            </p>
            <form className="max-w-md mx-auto flex space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white focus:outline-none focus:border-blue-500 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-colors"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
