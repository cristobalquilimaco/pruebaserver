import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton: React.FC = () => {
  const whatsappNumber = '+1234567890';
  const message = '¡Hola! Me gustaría obtener más información sobre sus servicios de marketing digital.';
  
  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6 group-hover:animate-bounce" />
      <div className="absolute -top-12 right-0 bg-dark text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        ¿Hablamos por WhatsApp?
      </div>
    </motion.button>
  );
};

export default WhatsAppButton;