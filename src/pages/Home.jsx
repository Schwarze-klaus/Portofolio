import React from 'react';
import { motion } from 'framer-motion';

const funFacts = [
  { label: 'Projets réalisés', value: 4 },
  { label: 'Technos maîtrisées', value: 2 },
  { label: 'Toujours motivé !', value: 1 },
];

export default function Home() {
  return (
    <motion.section
      className="min-h-screen flex flex-col justify-center items-center text-center pt-32 pb-16"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {/* Photo de profil avec halo animé */}
      <motion.div
        className="relative mb-8 flex justify-center"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, type: 'spring', stiffness: 120 }}
      >
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 blur-3xl opacity-80 animate-pulse"
          style={{ zIndex: 1, filter: 'blur(60px)' }}
        />
        <motion.img
          src="/WhatsApp Image 2025-06-14 à 22.26.10_b0d89876.jpg"
          alt="Fabrice Junior NGOUNGOULOU YACOUBAH"
          className="relative w-40 h-40 md:w-56 md:h-56 object-cover rounded-full border-4 border-white shadow-2xl z-10 transition-transform duration-300"
          whileHover={{ scale: 1.08, boxShadow: '0 0 60px 10px #7c3aed55' }}
        />
      </motion.div>
      <motion.h1
        className="text-5xl md:text-7xl font-bold text-gray-900 mb-2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
      >Fabrice Junior</motion.h1>
      <motion.h2
        className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
      >NGOUNGOULOU YACOUBAH</motion.h2>
      <motion.p
        className="max-w-xl mx-auto text-lg md:text-2xl text-gray-700 mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
      >Génie logiciel et administration de système d'information</motion.p>
      {/* Fun Facts animés */}
      <motion.div
        className="flex flex-wrap justify-center gap-8 mt-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
          }
        }}
      >
        {funFacts.map((fact, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-xl shadow-lg px-8 py-6 flex flex-col items-center min-w-[140px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 + i * 0.15 }}
          >
            <span className="text-3xl md:text-4xl font-bold text-blue-600 mb-1 animate-bounce">{fact.value}+</span>
            <span className="text-gray-700 font-semibold text-sm md:text-base text-center">{fact.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
} 