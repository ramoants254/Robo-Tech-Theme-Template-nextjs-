import { NextResponse } from 'next/server';
import type { Robot } from '@/store/robotStore';

// This would typically come from a database
const robots: Robot[] = [
  {
    id: 1,
    name: 'Tesla Optimus Gen 2',
    manufacturer: 'Tesla',
    price: '$20,000',
    description: 'Humanoid robot designed for general purpose tasks. Features advanced AI and natural movement.',
    features: [
      'Adaptive AI Learning',
      'Human-like Movement',
      'Advanced Dexterity',
      'Voice Recognition',
      'Safety Protocols'
    ],
    image: '/images/placeholder-robot.svg',
    status: 'Pre-order'
  },
  {
    id: 2,
    name: 'Spot Enterprise',
    manufacturer: 'Boston Dynamics',
    price: '$75,000',
    description: 'Agile mobile robot for industrial inspection and data collection.',
    features: [
      'All-terrain Mobility',
      'Remote Operation',
      'Autonomous Navigation',
      'Customizable Payloads',
      '360° Perception'
    ],
    image: '/images/placeholder-robot.svg',
    status: 'In Stock'
  },
  {
    id: 3,
    name: 'Atlas Pro',
    manufacturer: 'Boston Dynamics',
    price: 'Contact for Price',
    description: 'Advanced humanoid robot capable of dynamic movement and complex tasks.',
    features: [
      'Parkour Capability',
      'Object Manipulation',
      'Dynamic Balance',
      'Task Learning',
      'Sensor Integration'
    ],
    image: '/images/placeholder-robot.svg',
    status: 'Coming Soon'
  },
  {
    id: 4,
    name: 'Ameca',
    manufacturer: 'Engineered Arts',
    price: '$150,000',
    description: 'The world\'s most advanced human-shaped robot, featuring unprecedented facial expressions and human-like interaction.',
    features: [
      'Natural Facial Expressions',
      'Advanced Social Interaction',
      'Emotional Recognition',
      'Gesture Control',
      'Multi-language Support'
    ],
    image: '/images/placeholder-robot.svg',
    status: 'In Stock'
  },
  {
    id: 5,
    name: 'Stretch',
    manufacturer: 'Boston Dynamics',
    price: '$65,000',
    description: 'Mobile robot designed for warehouse automation and box moving.',
    features: [
      'Smart Gripper Technology',
      'Mobile Base',
      'Computer Vision',
      'Case Handling',
      'Autonomous Operation'
    ],
    image: '/images/placeholder-robot.svg',
    status: 'In Stock'
  },
  {
    id: 6,
    name: 'Digit',
    manufacturer: 'Agility Robotics',
    price: '$250,000',
    description: 'Bipedal robot designed for logistics and last-mile delivery.',
    features: [
      'Bipedal Locomotion',
      'Package Handling',
      'Stairs Navigation',
      'Human Environment Operation',
      'Long Battery Life'
    ],
    image: '/images/placeholder-robot.svg',
    status: 'Pre-order'
  }
];

export async function GET() {
  try {
    // Simulate database delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return NextResponse.json(robots);
  } catch (error) {
    console.error('Error in GET /api/robots:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const robot = await request.json();
    
    // Validate robot data
    if (!robot.name || !robot.manufacturer) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // In a real app, you would save to a database here
    const newRobot = {
      ...robot,
      id: robots.length + 1,
    };
    robots.push(newRobot);

    return NextResponse.json(newRobot, { status: 201 });
  } catch (error) {
    console.error('Error in POST /api/robots:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
