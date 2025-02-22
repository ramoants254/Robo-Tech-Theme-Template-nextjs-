'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief Technology Officer',
    image: '/team/sarah-chen.jpg',
    bio: 'Ph.D. in Robotics from MIT, 15+ years experience in industrial automation and AI.',
    specialties: ['Artificial Intelligence', 'Robot Control Systems', 'Machine Learning'],
    social: {
      linkedin: 'https://linkedin.com/in/sarah-chen',
      twitter: 'https://twitter.com/sarahchen',
      github: 'https://github.com/sarahchen'
    }
  },
  {
    name: 'James Wilson',
    role: 'Lead Robotics Engineer',
    image: '/team/james-wilson.jpg',
    bio: 'Former SpaceX engineer with expertise in mechanical design and control systems.',
    specialties: ['Mechanical Design', 'Control Systems', 'Prototype Development'],
    social: {
      linkedin: 'https://linkedin.com/in/james-wilson',
      twitter: 'https://twitter.com/jameswilson',
      github: 'https://github.com/jameswilson'
    }
  },
  {
    name: 'Dr. Emily Brooks',
    role: 'Head of AI Research',
    image: '/team/emily-brooks.jpg',
    bio: 'Leading researcher in reinforcement learning and computer vision.',
    specialties: ['Deep Learning', 'Computer Vision', 'Neural Networks'],
    social: {
      linkedin: 'https://linkedin.com/in/emily-brooks',
      twitter: 'https://twitter.com/emilybrooks',
      github: 'https://github.com/emilybrooks'
    }
  },
  {
    name: 'Michael Chang',
    role: 'Senior Software Architect',
    image: '/team/michael-chang.jpg',
    bio: 'Full-stack developer with focus on scalable robotics software systems.',
    specialties: ['Software Architecture', 'Cloud Robotics', 'DevOps'],
    social: {
      linkedin: 'https://linkedin.com/in/michael-chang',
      twitter: 'https://twitter.com/michaelchang',
      github: 'https://github.com/michaelchang'
    }
  }
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Meet Our Team
          </h1>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            World-class experts in robotics, AI, and automation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 backdrop-blur-sm"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative w-48 h-48 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-1"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-2xl"
                  />
                </motion.div>

                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {member.name}
                  </h2>
                  <p className="text-blue-400 font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-400 mb-4">{member.bio}</p>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-300 mb-2">
                      Specialties
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center md:justify-start space-x-4">
                    {Object.entries(member.social).map(([platform, url]) => (
                      <motion.a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -3 }}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <span className="capitalize">{platform}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Our Team Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-12 text-center backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white mb-6">
              Join Our Team
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals passionate about
              robotics and innovation. Check out our open positions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-colors"
            >
              View Open Positions
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
