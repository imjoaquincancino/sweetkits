'use client';

import { motion } from 'framer-motion';
import { RefreshCw } from 'lucide-react';

export default function LoadingSpinner({ size = 'md', message = 'Cargando...' }) {
  const iconSizes = {
    sm: 16,
    md: 24,
    lg: 32,
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      >
        <RefreshCw size={iconSizes[size]} className="text-orange-600" />
      </motion.div>
      {message && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-600 font-medium"
        >
          {message}
        </motion.p>
      )}
    </div>
  );
}
