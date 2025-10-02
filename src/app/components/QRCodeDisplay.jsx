'use client';

import { motion } from 'framer-motion';
import { QrCode, Download, Share, RefreshCw } from 'lucide-react';
import { useQRCode } from '../hooks/useQRCode';

export default function QRCodeDisplay({ recipeId, recipeName, className = '' }) {
  const { qrCode, url, isLoading, error, generateQRCode } = useQRCode(recipeId);

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
        // Fallback: copiar al portapapeles
        navigator.clipboard.writeText(url);
      }
    } else if (url) {
      // Fallback: copiar al portapapeles
      navigator.clipboard.writeText(url);
    }
  };

  if (isLoading) {
    return (
      <div className={`flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-lg ${className}`}>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        >
          <RefreshCw size={32} className="text-orange-600" />
        </motion.div>
        <p className="mt-4 text-gray-600 font-medium">Generando código QR...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-lg ${className}`}>
        <QrCode size={48} className="text-red-500 mb-4" />
        <p className="text-red-600 font-medium mb-4">Error al generar código QR</p>
        <button
          onClick={generateQRCode}
          className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
        >
          Reintentar
        </button>
      </div>
    );
  }

  if (!qrCode) {
    return (
      <div className={`flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-lg ${className}`}>
        <QrCode size={48} className="text-gray-400 mb-4" />
        <p className="text-gray-600 font-medium">No se pudo generar el código QR</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`bg-white rounded-2xl shadow-lg p-6 ${className}`}
    >
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
          <QrCode size={24} className="text-orange-600" />
          Código QR SweetKit
        </h3>
        
        <div className="mb-6">
          <img
            src={qrCode}
            alt={`Código QR para ${recipeName}`}
            className="mx-auto rounded-lg shadow-md"
            style={{ maxWidth: '250px', height: 'auto' }}
          />
        </div>

        <div className="space-y-3">
          <p className="text-sm text-gray-600">
            Escanea este código para ver la receta completa
          </p>
          
          <div className="flex gap-2 justify-center">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors text-sm"
            >
              <Download size={16} />
              Descargar
            </button>
            
            <button
              onClick={handleShare}
              className="flex items-center gap-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors text-sm"
            >
              <Share size={16} />
              Compartir
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
