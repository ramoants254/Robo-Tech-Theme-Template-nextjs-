'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

interface Stats {
  totalVisitors: number;
  activeUsers: number;
  conversions: number;
  revenue: number;
}

interface RecentActivity {
  id: string;
  type: 'contact' | 'purchase' | 'visit';
  user: string;
  date: string;
  details: string;
}

export default function AdminDashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [stats, setStats] = useState<Stats>({
    totalVisitors: 15234,
    activeUsers: 1432,
    conversions: 523,
    revenue: 52300
  });
  const [activities, setActivities] = useState<RecentActivity[]>([
    {
      id: '1',
      type: 'contact',
      user: 'john@example.com',
      date: '2025-02-11',
      details: 'Submitted contact form regarding industrial automation'
    },
    {
      id: '2',
      type: 'purchase',
      user: 'company@example.com',
      date: '2025-02-11',
      details: 'Purchased Enterprise plan'
    },
    {
      id: '3',
      type: 'visit',
      user: 'Anonymous',
      date: '2025-02-11',
      details: 'Viewed pricing page'
    }
  ]);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [loading, user, router]);

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-2">
            Welcome back, {user.name}
          </h1>
          <p className="text-gray-400">
            Here's what's happening with your website
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              title: 'Total Visitors',
              value: stats.totalVisitors.toLocaleString(),
              change: '+12.5%'
            },
            {
              title: 'Active Users',
              value: stats.activeUsers.toLocaleString(),
              change: '+5.2%'
            },
            {
              title: 'Conversions',
              value: stats.conversions.toLocaleString(),
              change: '+8.1%'
            },
            {
              title: 'Revenue',
              value: `$${stats.revenue.toLocaleString()}`,
              change: '+15.3%'
            }
          ].map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 backdrop-blur-sm"
            >
              <h3 className="text-gray-400 font-medium mb-2">{stat.title}</h3>
              <div className="flex items-baseline justify-between">
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <span className="text-green-500 text-sm font-medium">
                  {stat.change}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 backdrop-blur-sm"
        >
          <h2 className="text-xl font-bold text-white mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      activity.type === 'contact'
                        ? 'bg-blue-500/20 text-blue-500'
                        : activity.type === 'purchase'
                        ? 'bg-green-500/20 text-green-500'
                        : 'bg-purple-500/20 text-purple-500'
                    }`}
                  >
                    {activity.type === 'contact' ? (
                      '📧'
                    ) : activity.type === 'purchase' ? (
                      '💰'
                    ) : (
                      '👀'
                    )}
                  </div>
                  <div>
                    <p className="text-white font-medium">{activity.user}</p>
                    <p className="text-gray-400 text-sm">{activity.details}</p>
                  </div>
                </div>
                <span className="text-gray-400 text-sm">{activity.date}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            {
              title: 'Create Blog Post',
              icon: '📝',
              description: 'Write and publish a new article'
            },
            {
              title: 'View Analytics',
              icon: '📊',
              description: 'Detailed website statistics'
            },
            {
              title: 'Manage Users',
              icon: '👥',
              description: 'View and manage user accounts'
            }
          ].map((action) => (
            <motion.button
              key={action.title}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 text-left backdrop-blur-sm"
            >
              <div className="text-3xl mb-4">{action.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {action.title}
              </h3>
              <p className="text-gray-400">{action.description}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
