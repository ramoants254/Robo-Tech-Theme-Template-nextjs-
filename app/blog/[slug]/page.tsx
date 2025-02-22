'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const blogPosts = {
  'future-of-industrial-robotics': {
    title: 'The Future of Industrial Robotics',
    author: 'Dr. Sarah Chen',
    date: 'Feb 10, 2025',
    readTime: '5 min read',
    category: 'Industry Trends',
    image: '/blog/industrial-robots.jpg',
    content: `
      <h2>The Evolution of Industrial Robotics</h2>
      <p>The industrial robotics sector is undergoing a revolutionary transformation. With the advent of AI and machine learning, robots are becoming more intelligent, adaptable, and capable of handling complex tasks that were once thought impossible for automation.</p>

      <h2>Key Trends Shaping the Future</h2>
      <ul>
        <li>Artificial Intelligence Integration</li>
        <li>Collaborative Robots (Cobots)</li>
        <li>Advanced Sensor Technologies</li>
        <li>Cloud Robotics</li>
      </ul>

      <h2>Impact on Manufacturing</h2>
      <p>The integration of advanced robotics in manufacturing is leading to unprecedented levels of efficiency and precision. Companies adopting these technologies are seeing significant improvements in:</p>
      <ul>
        <li>Production Speed</li>
        <li>Quality Control</li>
        <li>Worker Safety</li>
        <li>Cost Efficiency</li>
      </ul>

      <h2>Looking Ahead</h2>
      <p>As we look to the future, we can expect to see even more revolutionary developments in industrial robotics. The combination of 5G networks, edge computing, and advanced AI will enable new applications that we're only beginning to imagine.</p>
    `
  },
  'ai-and-robotics': {
    title: 'AI and Robotics: A Perfect Partnership',
    author: 'James Wilson',
    date: 'Feb 8, 2025',
    readTime: '4 min read',
    category: 'Technology',
    image: '/blog/ai-robotics.jpg',
    content: `
      <h2>The Synergy of AI and Robotics</h2>
      <p>The combination of artificial intelligence and robotics is creating unprecedented opportunities for automation and innovation. This partnership is revolutionizing industries from manufacturing to healthcare.</p>

      <h2>Key Applications</h2>
      <ul>
        <li>Computer Vision for Quality Control</li>
        <li>Natural Language Processing for Human-Robot Interaction</li>
        <li>Reinforcement Learning for Complex Tasks</li>
        <li>Predictive Maintenance</li>
      </ul>

      <h2>Real-World Impact</h2>
      <p>Companies implementing AI-powered robotics are seeing remarkable improvements in:</p>
      <ul>
        <li>Operational Efficiency</li>
        <li>Cost Reduction</li>
        <li>Safety Standards</li>
        <li>Innovation Capabilities</li>
      </ul>

      <h2>Future Prospects</h2>
      <p>The future of AI and robotics holds endless possibilities. As these technologies continue to evolve, we'll see even more sophisticated applications and solutions emerge.</p>
    `
  }
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white">Post Not Found</h1>
          <Link
            href="/blog"
            className="mt-8 inline-block text-blue-500 hover:text-blue-400"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            href="/blog"
            className="text-blue-500 hover:text-blue-400 flex items-center space-x-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>Back to Blog</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-8"
        >
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-8">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              {post.title}
            </motion.h1>

            <div className="flex items-center justify-center space-x-4 text-gray-400">
              <span>{post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-invert prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author Bio */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-16 p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl backdrop-blur-sm"
          >
            <div className="flex items-center space-x-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src="/team/placeholder.jpg"
                  alt={post.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {post.author}
                </h3>
                <p className="text-gray-400">
                  Expert in Robotics and Automation
                </p>
              </div>
            </div>
          </motion.div>

          {/* Share Buttons */}
          <div className="flex items-center justify-center space-x-6 mt-12">
            {['Twitter', 'LinkedIn', 'Facebook'].map((platform) => (
              <motion.button
                key={platform}
                whileHover={{ y: -3 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Share on {platform}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </article>
    </div>
  );
}
