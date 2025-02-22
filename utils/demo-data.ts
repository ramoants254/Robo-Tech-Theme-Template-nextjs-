import { blogPosts } from '@/data/blog-posts';
import { products, services } from '@/data/products';
import { users } from '@/data/users';

// Types for analytics data
interface AnalyticsData {
  visitors: number;
  pageViews: number;
  bounceRate: number;
  averageSessionDuration: number;
}

interface SalesData {
  revenue: number;
  orders: number;
  customers: number;
  averageOrderValue: number;
}

interface DemoData {
  analytics: {
    daily: AnalyticsData[];
    weekly: AnalyticsData[];
    monthly: AnalyticsData[];
  };
  sales: {
    daily: SalesData[];
    weekly: SalesData[];
    monthly: SalesData[];
  };
  popularProducts: typeof products;
  recentOrders: Array<{
    id: string;
    product: string;
    customer: string;
    amount: number;
    status: 'completed' | 'pending' | 'failed';
    date: string;
  }>;
  activities: Array<{
    id: string;
    user: string;
    action: string;
    target: string;
    date: string;
  }>;
}

// Generate random analytics data
const generateAnalyticsData = (days: number): AnalyticsData[] => {
  return Array.from({ length: days }, (_, i) => ({
    visitors: Math.floor(Math.random() * 1000) + 500,
    pageViews: Math.floor(Math.random() * 3000) + 1000,
    bounceRate: Math.random() * 20 + 30,
    averageSessionDuration: Math.random() * 180 + 120,
  }));
};

// Generate random sales data
const generateSalesData = (days: number): SalesData[] => {
  return Array.from({ length: days }, (_, i) => ({
    revenue: Math.floor(Math.random() * 10000) + 5000,
    orders: Math.floor(Math.random() * 50) + 20,
    customers: Math.floor(Math.random() * 40) + 15,
    averageOrderValue: Math.floor(Math.random() * 300) + 100,
  }));
};

// Generate recent orders
const generateRecentOrders = () => {
  return Array.from({ length: 20 }, (_, i) => ({
    id: \`order_\${Math.random().toString(36).substr(2, 9)}\`,
    product: products[Math.floor(Math.random() * products.length)].name,
    customer: users[Math.floor(Math.random() * users.length)].name,
    amount: Math.floor(Math.random() * 5000) + 1000,
    status: ['completed', 'pending', 'failed'][Math.floor(Math.random() * 3)] as 'completed' | 'pending' | 'failed',
    date: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(),
  }));
};

// Generate user activities
const generateActivities = () => {
  const actions = [
    'created a post',
    'updated their profile',
    'commented on',
    'liked',
    'shared',
    'downloaded',
  ];

  const targets = [
    'a blog post',
    'a product page',
    'the documentation',
    'a service page',
    'the newsletter',
    'the contact form',
  ];

  return Array.from({ length: 30 }, (_, i) => ({
    id: \`activity_\${Math.random().toString(36).substr(2, 9)}\`,
    user: users[Math.floor(Math.random() * users.length)].name,
    action: actions[Math.floor(Math.random() * actions.length)],
    target: targets[Math.floor(Math.random() * targets.length)],
    date: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(),
  }));
};

// Export demo data
export const demoData: DemoData = {
  analytics: {
    daily: generateAnalyticsData(30),
    weekly: generateAnalyticsData(12),
    monthly: generateAnalyticsData(12),
  },
  sales: {
    daily: generateSalesData(30),
    weekly: generateSalesData(12),
    monthly: generateSalesData(12),
  },
  popularProducts: products.sort(() => Math.random() - 0.5).slice(0, 5),
  recentOrders: generateRecentOrders(),
  activities: generateActivities(),
};

// Helper functions for data access
export const getDashboardStats = () => {
  const today = demoData.analytics.daily[demoData.analytics.daily.length - 1];
  const todaySales = demoData.sales.daily[demoData.sales.daily.length - 1];

  return {
    totalVisitors: today.visitors,
    totalRevenue: todaySales.revenue,
    totalOrders: todaySales.orders,
    averageOrderValue: todaySales.averageOrderValue,
    bounceRate: today.bounceRate,
    activeUsers: Math.floor(today.visitors * 0.4),
  };
};

export const getPopularContent = () => {
  return {
    posts: blogPosts.sort(() => Math.random() - 0.5).slice(0, 5),
    products: products.sort(() => Math.random() - 0.5).slice(0, 5),
    services: services.sort(() => Math.random() - 0.5).slice(0, 3),
  };
};

export const getRecentActivity = (limit = 10) => {
  return demoData.activities.slice(0, limit);
};

export const getAnalyticsTrends = () => {
  const periods = ['daily', 'weekly', 'monthly'] as const;
  const metrics = {} as Record<typeof periods[number], {
    visitors: number[];
    revenue: number[];
    orders: number[];
  }>;

  periods.forEach(period => {
    metrics[period] = {
      visitors: demoData.analytics[period].map(d => d.visitors),
      revenue: demoData.sales[period].map(d => d.revenue),
      orders: demoData.sales[period].map(d => d.orders),
    };
  });

  return metrics;
};
