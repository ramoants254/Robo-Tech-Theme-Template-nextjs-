export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  features: string[];
  specifications: {
    [key: string]: string | number;
  };
  images: string[];
  price: number;
  discountedPrice?: number;
  stock: number;
  rating: number;
  reviews: number;
  tags: string[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'IndustrialBot Pro X1',
    slug: 'industrialbot-pro-x1',
    category: 'Industrial Robots',
    description: 'Advanced industrial robot arm with 6-axis movement and AI-powered control system. Perfect for manufacturing and assembly lines.',
    features: [
      '6-axis movement capability',
      'AI-powered control system',
      'Advanced safety features',
      'Real-time monitoring',
      'Predictive maintenance',
      'Easy programming interface',
      'Remote operation capability'
    ],
    specifications: {
      'Payload Capacity': '20kg',
      'Reach': '1850mm',
      'Repeatability': '±0.03mm',
      'Weight': '250kg',
      'Power Consumption': '2.5kW',
      'Input Voltage': '380-480V',
      'IP Rating': 'IP67'
    },
    images: [
      '/images/products/industrial-bot-1.jpg',
      '/images/products/industrial-bot-2.jpg',
      '/images/products/industrial-bot-3.jpg'
    ],
    price: 45000,
    stock: 10,
    rating: 4.8,
    reviews: 24,
    tags: ['industrial', 'manufacturing', 'assembly', 'automation']
  },
  {
    id: '2',
    name: 'CollabBot Flex',
    slug: 'collabbot-flex',
    category: 'Collaborative Robots',
    description: 'User-friendly collaborative robot designed for safe human-robot interaction. Ideal for small to medium-sized businesses.',
    features: [
      'Force sensing technology',
      'Intuitive programming',
      'Built-in safety system',
      'Flexible deployment',
      'Quick setup wizard',
      'Integrated vision system',
      'Portable design'
    ],
    specifications: {
      'Payload Capacity': '10kg',
      'Reach': '1300mm',
      'Repeatability': '±0.05mm',
      'Weight': '33kg',
      'Power Consumption': '350W',
      'Input Voltage': '110-230V',
      'IP Rating': 'IP54'
    },
    images: [
      '/images/products/collab-bot-1.jpg',
      '/images/products/collab-bot-2.jpg',
      '/images/products/collab-bot-3.jpg'
    ],
    price: 35000,
    discountedPrice: 32000,
    stock: 15,
    rating: 4.9,
    reviews: 42,
    tags: ['collaborative', 'cobot', 'safety', 'flexible']
  },
  {
    id: '3',
    name: 'LogiBot Warehouse',
    slug: 'logibot-warehouse',
    category: 'Logistics Robots',
    description: 'Autonomous mobile robot for warehouse operations. Features advanced navigation and inventory management capabilities.',
    features: [
      'Autonomous navigation',
      'Fleet management system',
      'Obstacle avoidance',
      'Automatic charging',
      'Inventory tracking',
      'Multi-robot coordination',
      'Cloud connectivity'
    ],
    specifications: {
      'Payload Capacity': '150kg',
      'Speed': '2m/s',
      'Battery Life': '12 hours',
      'Weight': '80kg',
      'Charging Time': '2 hours',
      'Navigation': 'SLAM + LiDAR',
      'IP Rating': 'IP54'
    },
    images: [
      '/images/products/logi-bot-1.jpg',
      '/images/products/logi-bot-2.jpg',
      '/images/products/logi-bot-3.jpg'
    ],
    price: 28000,
    stock: 8,
    rating: 4.7,
    reviews: 31,
    tags: ['logistics', 'warehouse', 'autonomous', 'mobile']
  }
];

export const services = [
  {
    id: '1',
    name: 'Robot Installation & Setup',
    description: 'Professional installation and configuration of robotic systems',
    price: 2500,
    duration: '2-3 days',
    includes: [
      'Site assessment',
      'Hardware installation',
      'Software configuration',
      'Safety testing',
      'Staff training',
      'Documentation'
    ]
  },
  {
    id: '2',
    name: 'Maintenance Package',
    description: 'Regular maintenance and support for optimal performance',
    price: 500,
    duration: 'Monthly',
    includes: [
      'Regular inspections',
      'Software updates',
      'Performance optimization',
      'Emergency support',
      'Parts replacement',
      'Monthly reports'
    ]
  },
  {
    id: '3',
    name: 'Custom Programming',
    description: 'Tailored programming solutions for specific automation needs',
    price: 1500,
    duration: 'Project-based',
    includes: [
      'Requirements analysis',
      'Custom programming',
      'Testing and validation',
      'Integration support',
      'Documentation',
      'Training sessions'
    ]
  }
];

export const categories = [
  'Industrial Robots',
  'Collaborative Robots',
  'Logistics Robots',
  'Agricultural Robots',
  'Medical Robots',
  'Service Robots'
];

export const tags = [
  'industrial',
  'collaborative',
  'autonomous',
  'mobile',
  'AI-powered',
  'safety',
  'flexible',
  'manufacturing',
  'logistics',
  'healthcare'
];
