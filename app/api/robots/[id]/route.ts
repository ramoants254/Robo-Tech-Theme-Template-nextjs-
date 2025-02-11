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
  // ... other robots
];

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id);
    const robot = robots.find(r => r.id === id);

    if (!robot) {
      return NextResponse.json(
        { error: 'Robot not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(robot);
  } catch (error) {
    console.error(`Error in GET /api/robots/${params.id}:`, error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id);
    const robotIndex = robots.findIndex(r => r.id === id);

    if (robotIndex === -1) {
      return NextResponse.json(
        { error: 'Robot not found' },
        { status: 404 }
      );
    }

    const update = await request.json();
    const updatedRobot = {
      ...robots[robotIndex],
      ...update,
    };

    // In a real app, you would update the database here
    robots[robotIndex] = updatedRobot;

    return NextResponse.json(updatedRobot);
  } catch (error) {
    console.error(`Error in PATCH /api/robots/${params.id}:`, error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
