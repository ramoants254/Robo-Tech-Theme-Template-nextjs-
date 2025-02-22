'use client';

import { useEffect, useRef } from 'react';

class AnimatedCircle {
  x: number;
  y: number;
  radius: number;
  color: string;
  dx: number;
  dy: number;
  canvas: HTMLCanvasElement;
  maxRadius: number;
  minRadius: number;
  glowIntensity: number;
  glowDirection: number;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.radius = Math.random() * 2 + 1;
    this.minRadius = this.radius;
    this.maxRadius = this.radius + 2;
    this.x = Math.random() * (canvas.width - this.radius * 2) + this.radius;
    this.y = Math.random() * (canvas.height - this.radius * 2) + this.radius;
    this.dx = (Math.random() - 0.5) * 1;
    this.dy = (Math.random() - 0.5) * 1;
    this.color = `hsl(${Math.random() * 60 + 200}, 70%, 50%)`;
    this.glowIntensity = 0;
    this.glowDirection = 1;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    
    // Create gradient for glow effect
    const gradient = ctx.createRadialGradient(
      this.x, this.y, this.radius * 0.5,
      this.x, this.y, this.radius * 2
    );
    gradient.addColorStop(0, this.color);
    gradient.addColorStop(1, `rgba(0, 0, 0, 0)`);
    
    ctx.fillStyle = gradient;
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 15 + this.glowIntensity * 5;
    ctx.fill();
    ctx.closePath();
  }

  update(mouse: { x: number; y: number; radius: number }) {
    if (this.x + this.radius > this.canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > this.canvas.height || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    // Interactive effect with mouse
    const dx = mouse.x - this.x;
    const dy = mouse.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < mouse.radius) {
      const angle = Math.atan2(dy, dx);
      const force = (mouse.radius - distance) / mouse.radius;
      this.dx -= Math.cos(angle) * force * 0.5;
      this.dy -= Math.sin(angle) * force * 0.5;
      this.radius = this.maxRadius;
    } else {
      this.radius = this.minRadius;
    }

    // Pulsing glow effect
    this.glowIntensity += 0.05 * this.glowDirection;
    if (this.glowIntensity >= 1) this.glowDirection = -1;
    if (this.glowIntensity <= 0) this.glowDirection = 1;
  }
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const circlesRef = useRef<AnimatedCircle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, radius: 100 });
  const rafRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initCircles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const initCircles = () => {
      if (!canvas) return;
      circlesRef.current = Array(50)
        .fill(null)
        .map(() => new AnimatedCircle(canvas));
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.fillStyle = 'rgba(10, 10, 20, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      circlesRef.current.forEach(circle => {
        circle.update(mouseRef.current);
        circle.draw(ctx);
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
}
