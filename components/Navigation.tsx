'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const menuItems = [
  { path: '/', label: 'Home' },
  { path: '/robots', label: 'Robots' },
  { path: '/about', label: 'About' }
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="relative">
        {/* Glassmorphism background */}
        <div className="absolute inset-0 bg-gray-900/30 backdrop-blur-md border-b border-white/10" />
        
        {/* Active glow line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        
        {/* Content */}
        <div className="container mx-auto px-4 relative">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/" 
              className="relative group"
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300">
                RoboTech
              </span>
              <div className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-blue-400/0 via-blue-400/70 to-blue-400/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
            
            <div className="hidden md:flex items-center space-x-1">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="relative px-4 py-2"
                >
                  <span className={`relative z-10 text-sm font-medium transition-colors duration-200 ${
                    pathname === item.path 
                      ? 'text-blue-400' 
                      : 'text-gray-300 hover:text-blue-400'
                  }`}>
                    {item.label}
                  </span>
                  {pathname === item.path && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute inset-0 bg-blue-500/10 rounded-full"
                      transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Connect Button */}
            <button className="hidden md:block px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-sm font-medium text-blue-400 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
              Connect →
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
