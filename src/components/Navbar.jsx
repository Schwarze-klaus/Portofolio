import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { to: '/', label: 'Accueil' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/projets', label: 'Projets' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full z-50 bg-white/90 shadow-lg backdrop-blur-md"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer">Fabrice Junior</Link>
        <div className="hidden md:flex gap-8">
          {NAV_ITEMS.map(item => (
            <Link
              key={item.to}
              to={item.to}
              className={`uppercase font-semibold transition-colors duration-300 ${location.pathname === item.to ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="block w-6 h-1 bg-blue-600 mb-1 rounded"></span>
          <span className="block w-6 h-1 bg-blue-600 mb-1 rounded"></span>
          <span className="block w-6 h-1 bg-blue-600 rounded"></span>
        </button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg rounded-b-xl px-6 py-4 flex flex-col gap-4"
          >
            {NAV_ITEMS.map(item => (
              <Link
                key={item.to}
                to={item.to}
                className={`uppercase font-semibold text-left ${location.pathname === item.to ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
} 