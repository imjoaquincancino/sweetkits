'use client';

import { motion } from 'framer-motion';
import { QrCode, Download, Share, Smartphone } from 'lucide-react';
import { useQRCode } from '../hooks/useQRCode';

export default function QRCodeBadge({ recipeId, recipeName, size = 'sm', showActions = false }) {
  const { qrCode, url, isLoading, error } = useQRCode(recipeId);

  const handleDownload = () => {
    if (qrCode) {
      const link = document.createElement('a');
      link.download = `sweetkit-${recipeName?.toLowerCase().replace(/\s+/g, '-')}-qr.png`;
      link.href = qrCode;
      link.click();
    }
  };

  const handleShare = async () => {
    if (navigator.share && url) {
      try {
        await navigator.share({
          title: `SweetKit - ${recipeName}`,
          text: `¡Mira esta deliciosa receta de ${recipeName}!`,
          url: url
        });
      } catch (err) {
        navigator.clipboard.writeText(url);
      }
    } else if (url) {
      navigator.clipboard.writeText(url);
    }
  };

  if (isLoading) {
    return (
      <div className={`bg-white rounded-lg shadow-md p-2 flex items-center justify-center ${size === 'sm' ? 'w-16 h-16' : 'w-24 h-24'}`}>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-4 h-4 border-2 border-orange-600 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (error || !qrCode) {
    return (
      <div className={`bg-gray-100 rounded-lg shadow-md p-2 flex items-center justify-center ${size === 'sm' ? 'w-16 h-16' : 'w-24 h-24'}`}>
        <QrCode size={size === 'sm' ? 16 : 24} className="text-gray-400" />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`bg-white rounded-lg shadow-md p-2 relative group ${size === 'sm' ? 'w-16 h-16' : 'w-24 h-24'}`}
    >
      <img
        src={qrCode}
        alt={`Código QR para ${recipeName}`}
        className="w-full h-full object-contain"
      />
      
      {showActions && (
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="flex gap-1">
            <button
              onClick={handleDownload}
              className="p-1 bg-white rounded-full hover:bg-gray-100 transition-colors"
              title="Descargar QR"
            >
              <Download size={12} className="text-gray-700" />
            </button>
            <button
              onClick={handleShare}
              className="p-1 bg-white rounded-full hover:bg-gray-100 transition-colors"
              title="Compartir"
            >
              <Share size={12} className="text-gray-700" />
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
}
