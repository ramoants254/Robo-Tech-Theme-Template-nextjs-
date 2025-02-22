'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface SearchResult {
  type: 'blog' | 'service' | 'product';
  title: string;
  description: string;
  url: string;
}

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Mock search results - in a real app, this would be an API call
  const searchContent = async (searchQuery: string) => {
    setLoading(true);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const mockResults: SearchResult[] = [
      {
        type: 'blog',
        title: 'The Future of Industrial Robotics',
        description: 'Exploring the latest trends in industrial automation...',
        url: '/blog/future-of-industrial-robotics'
      },
      {
        type: 'service',
        title: 'Industrial Automation',
        description: 'Complete robotics solutions for manufacturing...',
        url: '/services#industrial-automation'
      },
      {
        type: 'product',
        title: 'RoboArm X1',
        description: 'Advanced robotic arm for precision manufacturing...',
        url: '/products/roboarm-x1'
      }
    ].filter((result) =>
      result.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setResults(mockResults);
    setLoading(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (query) {
      searchContent(query);
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center space-x-2 px-4 py-2 text-gray-400 hover:text-white transition-colors"
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
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <span>Search</span>
        <span className="text-sm text-gray-500">⌘K</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed inset-x-4 top-24 max-w-2xl mx-auto bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-2xl shadow-2xl backdrop-blur-sm z-50"
            >
              <div className="p-4">
                <div className="flex items-center space-x-4 p-2 bg-gray-800/50 rounded-lg">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for anything..."
                    className="flex-1 bg-transparent border-0 focus:ring-0 text-white placeholder-gray-400"
                    autoFocus
                  />
                  <kbd className="hidden sm:block px-2 py-1 text-xs text-gray-400 bg-gray-700 rounded">
                    ESC
                  </kbd>
                </div>

                <div className="mt-4">
                  {loading ? (
                    <div className="text-center py-12">
                      <div className="animate-spin w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full mx-auto" />
                      <p className="text-gray-400 mt-2">Searching...</p>
                    </div>
                  ) : results.length > 0 ? (
                    <div className="space-y-2">
                      {results.map((result) => (
                        <Link
                          key={result.url}
                          href={result.url}
                          onClick={() => setIsOpen(false)}
                        >
                          <motion.div
                            whileHover={{ x: 4 }}
                            className="p-4 hover:bg-gray-800/50 rounded-lg cursor-pointer"
                          >
                            <div className="flex items-center space-x-2">
                              <span
                                className={`text-sm px-2 py-1 rounded ${
                                  result.type === 'blog'
                                    ? 'bg-blue-500/20 text-blue-500'
                                    : result.type === 'service'
                                    ? 'bg-green-500/20 text-green-500'
                                    : 'bg-purple-500/20 text-purple-500'
                                }`}
                              >
                                {result.type}
                              </span>
                              <h3 className="text-white font-medium">
                                {result.title}
                              </h3>
                            </div>
                            <p className="text-gray-400 text-sm mt-1">
                              {result.description}
                            </p>
                          </motion.div>
                        </Link>
                      ))}
                    </div>
                  ) : query ? (
                    <div className="text-center py-12">
                      <p className="text-gray-400">No results found</p>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-gray-400">
                        Start typing to search...
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
