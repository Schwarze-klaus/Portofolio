import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, User, Award } from 'lucide-react';

const personalInfo = [
  { icon: Mail, label: 'yacoubahjunior76@gmail.com' },
  { icon: Phone, label: '+24174031774' },
  { icon: MapPin, label: 'PK8 Libreville' },
];

const timeline = [
  {
    year: '2022-2023',
    title: 'Baccalauréat Scientifique D',
    place: 'Lycée Ba Oumar, Libreville',
    desc: "Diplôme obtenu en 2023, compétences en mathématiques, biologie, géologie et sciences physiques. Développement de la pensée analytique et de la méthodologie scientifique."
  },
  {
    year: '2023-2026',
    title: 'Licence Génie Logiciel & Admin. Systèmes',
    place: 'Institut de Management et des Sciences Appliquées',
    desc: "Formation en développement d'application web et mobile, gestion de bases de données et administration des systèmes. Approfondissement en architecture des SI."
  }
];

const testimonials = [
  {
    name: 'Prof. M. Arny',
    role: 'Enseignant',
    text: "Fabrice est un étudiant sérieux, curieux et passionné par l'informatique. Il se démarque par sa capacité à apprendre vite et à s'adapter aux nouveaux défis."
  },
  {
    name: 'A. ELLA',
    role: 'Camarade de promo',
    text: "Toujours prêt à aider, Fabrice a un vrai esprit d'équipe et une grande motivation pour réussir dans le développement logiciel."
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function About() {
  return (
    <motion.section
      className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-32 mb-16"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2"><User size={28} /> À propos</h1>
      <p className="text-gray-700 text-lg mb-6">
        Étudiant en licence 2 de génie logiciel et administration des systèmes d'information à l'Institut de Management et des Sciences Appliquées, passionné par le développement logiciel et la création d'applications innovantes. J'acquiers actuellement des compétences en programmation et en développement d'interfaces utilisateur à travers mes cours et projets académiques. Je suis motivé par les défis technologiques et cherche à comprendre les meilleures pratiques en matière de développement et d'optimisation des systèmes d'information. Enthousiaste à l'idée d'appliquer mes connaissances théoriques dans des projets concrets, je suis prêt à apprendre et à contribuer de manière significative dans un environnement professionnel.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {personalInfo.map((info, i) => (
          <div key={i} className="flex items-center gap-2 text-gray-700">
            {React.createElement(info.icon, { size: 20, className: 'text-blue-600' })}
            <span>{info.label}</span>
          </div>
        ))}
      </div>
      {/* Timeline animée */}
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><Award size={22} /> Parcours</h2>
      <ol className="relative border-l-4 border-blue-200 ml-4 mb-10">
        {timeline.map((item, i) => (
          <motion.li
            key={i}
            className="mb-10 ml-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="absolute -left-5 flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full ring-4 ring-white animate-bounce">
              <Award className="text-white" size={20} />
            </span>
            <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
            <div className="text-gray-700 font-semibold">{item.place}</div>
            <div className="text-gray-500 text-sm mb-2">{item.year}</div>
            <p className="text-gray-600">{item.desc}</p>
          </motion.li>
        ))}
      </ol>
      {/* Testimonials */}
      <h2 className="text-xl font-bold mb-4">Témoignages</h2>
      <div className="flex flex-col md:flex-row gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl shadow-md p-6 flex-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 * i, ease: 'easeOut' }}
          >
            <div className="font-bold text-blue-700 mb-1">{t.name}</div>
            <div className="text-xs text-gray-500 mb-2">{t.role}</div>
            <div className="italic text-gray-700">"{t.text}"</div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
} 