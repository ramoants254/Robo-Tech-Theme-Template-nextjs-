export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'editor';
  avatar: string;
  company?: string;
  position?: string;
  bio?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  preferences?: {
    notifications: boolean;
    newsletter: boolean;
    theme: 'light' | 'dark';
  };
  stats?: {
    posts: number;
    comments: number;
    likes: number;
  };
  joinedAt: string;
  lastActive: string;
}

export const users: User[] = [
  {
    id: '1',
    name: 'Dr. Sarah Chen',
    email: 'sarah.chen@robotech.com',
    role: 'admin',
    avatar: '/images/users/sarah-chen.jpg',
    company: 'RoboTech Industries',
    position: 'Chief Robotics Officer',
    bio: 'Leading expert in industrial robotics with over 15 years of experience in automation and AI integration.',
    social: {
      linkedin: 'https://linkedin.com/in/sarahchen',
      twitter: 'https://twitter.com/drsarahchen',
      github: 'https://github.com/sarahchen'
    },
    preferences: {
      notifications: true,
      newsletter: true,
      theme: 'dark'
    },
    stats: {
      posts: 45,
      comments: 128,
      likes: 892
    },
    joinedAt: '2024-01-01T00:00:00Z',
    lastActive: '2025-02-11T06:30:00Z'
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    email: 'michael.r@robotech.com',
    role: 'editor',
    avatar: '/images/users/michael-rodriguez.jpg',
    company: 'RoboTech Industries',
    position: 'Senior Robotics Engineer',
    bio: 'Specializing in collaborative robots and human-robot interaction systems.',
    social: {
      linkedin: 'https://linkedin.com/in/michaelr',
      github: 'https://github.com/michaelr'
    },
    preferences: {
      notifications: true,
      newsletter: true,
      theme: 'light'
    },
    stats: {
      posts: 28,
      comments: 156,
      likes: 445
    },
    joinedAt: '2024-02-15T00:00:00Z',
    lastActive: '2025-02-10T18:45:00Z'
  },
  {
    id: '3',
    name: 'Dr. James Wilson',
    email: 'james.wilson@robotech.com',
    role: 'editor',
    avatar: '/images/users/james-wilson.jpg',
    company: 'RoboTech Industries',
    position: 'AI Research Director',
    bio: 'Leading research in machine learning applications for robotics and automation systems.',
    social: {
      linkedin: 'https://linkedin.com/in/jameswilson',
      twitter: 'https://twitter.com/drjameswilson',
      github: 'https://github.com/jwilson'
    },
    preferences: {
      notifications: true,
      newsletter: true,
      theme: 'dark'
    },
    stats: {
      posts: 32,
      comments: 89,
      likes: 567
    },
    joinedAt: '2024-03-01T00:00:00Z',
    lastActive: '2025-02-11T09:15:00Z'
  },
  {
    id: '4',
    name: 'Emily Chang',
    email: 'emily.chang@robotech.com',
    role: 'user',
    avatar: '/images/users/emily-chang.jpg',
    company: 'TechCorp Solutions',
    position: 'Automation Specialist',
    bio: 'Implementing robotic solutions for manufacturing and logistics optimization.',
    social: {
      linkedin: 'https://linkedin.com/in/emilychang'
    },
    preferences: {
      notifications: true,
      newsletter: true,
      theme: 'light'
    },
    stats: {
      posts: 12,
      comments: 67,
      likes: 234
    },
    joinedAt: '2024-04-15T00:00:00Z',
    lastActive: '2025-02-10T16:20:00Z'
  }
];

export const roles = {
  admin: {
    name: 'Administrator',
    permissions: [
      'manage_users',
      'manage_content',
      'manage_settings',
      'view_analytics',
      'manage_products',
      'manage_orders'
    ]
  },
  editor: {
    name: 'Editor',
    permissions: [
      'create_content',
      'edit_content',
      'delete_own_content',
      'view_analytics'
    ]
  },
  user: {
    name: 'User',
    permissions: [
      'view_content',
      'create_comments',
      'edit_own_profile'
    ]
  }
};
