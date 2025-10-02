'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { CheckCircle, AlertCircle, Info, XCircle } from 'lucide-react';

export default function Toast({ message, type = 'success', isVisible, onClose, duration = 3000 }) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  const types = {
    success: {
      bgColor: 'bg-green-500',
      icon: CheckCircle,
      textColor: 'text-white',
    },
    error: {
      bgColor: 'bg-red-500',
      icon: XCircle,
      textColor: 'text-white',
    },
    warning: {
      bgColor: 'bg-yellow-500',
      icon: AlertCircle,
      textColor: 'text-white',
    },
    info: {
      bgColor: 'bg-blue-500',
      icon: Info,
      textColor: 'text-white',
    },
  };

  const config = types[type];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.3 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className={`fixed bottom-4 right-4 ${config.bgColor} ${config.textColor} px-6 py-4 rounded-lg shadow-lg z-50 max-w-sm`}
        >
          <div className="flex items-center gap-3">
            <config.icon size={20} className="flex-shrink-0" />
            <p className="font-semibold flex-1">{message}</p>
            <button
              onClick={onClose}
              className="ml-auto text-white hover:text-gray-200 font-bold text-lg flex-shrink-0"
              aria-label="Cerrar notificación"
            >
              ×
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
