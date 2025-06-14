import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/yourFormId'; // Remplace par ton endpoint Formspree
const email = 'yacoubahjunior76@gmail.com';
const phone = '+24174031774';
const whatsappLink = 'https://wa.me/24174031774';

function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width={props.width || 20} height={props.height || 20} {...props}>
      <g>
        <path d="M12 2C6.477 2 2 6.037 2 11.07c0 1.954.573 3.77 1.56 5.308L2 22l5.8-1.515A10.13 10.13 0 0 0 12 20.14c5.523 0 10-4.037 10-9.07C22 6.037 17.523 2 12 2Zm0 16.14c-1.56 0-3.08-.41-4.39-1.19l-.31-.18-3.44.9.92-3.35-.2-.32A7.98 7.98 0 0 1 4 11.07C4 7.14 7.58 4 12 4s8 3.14 8 7.07-3.58 7.07-8 7.07Zm4.32-5.38c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.42-1.34-1.66-.14-.24-.02-.36.1-.48.1-.1.22-.26.34-.4.12-.14.16-.24.24-.4.08-.16.04-.3-0.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.42-.54-.42-.14 0-.3-.02-.46-.02-.16 0-.42.06-.64.3-.22.24-.86.84-.86 2.04 0 1.2.88 2.36 1 2.52.12.16 1.74 2.66 4.22 3.62.59.2 1.05.32 1.41.4.59.12 1.12.1 1.54.06.47-.04 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" fill="currentColor"/>
      </g>
    </svg>
  );
}

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const data = new FormData(e.target);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setSent(true);
      } else {
        setError("Erreur lors de l'envoi. Réessaie plus tard.");
      }
    } catch (err) {
      setError("Erreur lors de l'envoi. Réessaie plus tard.");
    }
    setLoading(false);
  };

  return (
    <motion.section
      className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-32 mb-16 flex flex-col md:flex-row gap-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Colonne gauche */}
      <div className="flex-1 flex flex-col justify-center mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Contactez-moi pour un stage !</h1>
        <p className="text-gray-700 mb-8">
          Je suis <span className="font-semibold">étudiant en Génie Logiciel et Administration des Systèmes d'Information</span>, à la recherche d'opportunités de stage pour développer mes compétences et contribuer à des projets innovants. <br />
          N'hésitez pas à me contacter par mail, WhatsApp ou via le formulaire ci-contre. Je serai ravi d'échanger avec vous et d'étudier toute proposition.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.a
            href={`mailto:${email}`}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.08 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <Mail size={20} /> Envoyer un mail
          </motion.a>
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.08 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <WhatsAppIcon width={20} height={20} /> WhatsApp
          </motion.a>
        </div>
      </div>
      {/* Colonne droite : formulaire */}
      <div className="flex-1">
        {sent ? (
          <div className="text-green-600 text-xl font-semibold flex flex-col items-center justify-center h-full">Merci pour votre message !<br />Je vous répondrai rapidement.</div>
        ) : (
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 mb-1">Nom</label>
              <input name="name" type="text" required className="w-full border-b border-gray-300 focus:border-blue-600 outline-none py-2 px-1" placeholder="Votre nom" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">E-mail</label>
              <input name="email" type="email" required className="w-full border-b border-gray-300 focus:border-blue-600 outline-none py-2 px-1" placeholder="votre@email.com" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Téléphone</label>
              <input name="phone" type="tel" required className="w-full border-b border-gray-300 focus:border-blue-600 outline-none py-2 px-1" placeholder="Votre numéro" />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Message</label>
              <textarea name="message" required rows={4} className="w-full border-b border-gray-300 focus:border-blue-600 outline-none py-2 px-1 resize-none" placeholder="Tapez ici..." />
            </div>
            {error && <div className="text-red-600 text-sm">{error}</div>}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 text-lg mt-2"
              disabled={loading}
            >
              {loading ? 'Envoi en cours...' : 'SOUMETTRE MAINTENANT'}
            </button>
          </form>
        )}
      </div>
    </motion.section>
  );
} 