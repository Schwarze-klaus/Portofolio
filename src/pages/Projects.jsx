import React from 'react';
import { motion } from 'framer-motion';
import { Database } from 'lucide-react';

const projects = [
  {
    title: "Système d'information et gestion d'utilisateurs sous Linux",
    place: 'Institut de Management et des Sciences Appliquées, Libreville',
    tech: ['Linux', 'Shell', 'Gestion utilisateurs'],
  },
  {
    title: "Serveur de fichiers et gestion d'utilisateurs sous Windows",
    place: 'Institut de Management et des Sciences Appliquées, Libreville',
    tech: ['Windows Server', 'Gestion utilisateurs'],
  },
  {
    title: "Application web de consultation médicale en ligne",
    place: 'Institut de Management et des Sciences Appliquées, Libreville',
    tech: ['React', 'Web'],
  },
  {
    title: "Gestionnaire de tâches en PHP",
    place: 'Institut de Management et des Sciences Appliquées, Libreville',
    tech: ['PHP', 'Web'],
  },
];

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function Projects() {
  return (
    <motion.section
      className="max-w-4xl mx-auto bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl shadow-lg p-8 mt-32 mb-16"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <motion.h1 className="text-3xl font-bold mb-8 flex items-center gap-2" variants={fadeInUp}><Database size={28} /> Projets réalisés</motion.h1>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={staggerContainer}>
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-2 hover:scale-105 transition-transform duration-300"
            variants={fadeInUp}
            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(80,80,200,0.10)' }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <h4 className="text-lg font-bold text-blue-700">{proj.title}</h4>
            <div className="text-gray-600 text-sm">{proj.place}</div>
            <div className="flex flex-wrap gap-2 mt-2">
              {proj.tech.map((t, j) => (
                <span key={j} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-semibold">{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
} 