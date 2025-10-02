'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { QrCode, Download, RefreshCw, Eye, Trash2 } from 'lucide-react';
import { recipes } from '../../data/recipes';

export default function QRCodesAdminPage() {
  const [qrCodes, setQrCodes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchQRCodes = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const promises = recipes.map(recipe => 
        fetch(`/api/qr?recipeId=${recipe.id}`)
          .then(res => res.json())
          .then(data => ({ ...data, recipe }))
      );

      const results = await Promise.all(promises);
      setQrCodes(results);
    } catch (err) {
      setError('Error al cargar códigos QR');
      console.error('Error fetching QR codes:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchQRCodes();
  }, []);

  const handleDownload = (qrCode, recipeName) => {
    const link = document.createElement('a');
    link.download = `sweetkit-${recipeName?.toLowerCase().replace(/\s+/g, '-')}-qr.png`;
    link.href = qrCode;
    link.click();
  };

  const handleDownloadAll = () => {
    qrCodes.forEach(({ qrCode, recipe }) => {
      setTimeout(() => {
        handleDownload(qrCode, recipe.name);
      }, 500);
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-100 flex items-center justify-center">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          >
            <RefreshCw size={48} className="text-orange-600 mx-auto mb-4" />
          </motion.div>
          <p className="text-xl font-medium text-gray-700">Cargando códigos QR...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl font-medium text-red-600 mb-4">{error}</p>
          <button
            onClick={fetchQRCodes}
            className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-100">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <QrCode size={40} className="text-orange-600" />
            Administración de Códigos QR
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Gestiona todos los códigos QR de las recetas SweetKit
          </p>
        </motion.div>

        <div className="mb-6 flex justify-center">
          <button
            onClick={handleDownloadAll}
            className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors flex items-center gap-2"
          >
            <Download size={20} />
            Descargar Todos
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {qrCodes.map(({ qrCode, url, recipe }, index) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{recipe.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{recipe.category}</p>
                
                <div className="mb-4">
                  <img
                    src={qrCode}
                    alt={`QR Code para ${recipe.name}`}
                    className="mx-auto rounded-lg shadow-md"
                    style={{ maxWidth: '150px', height: 'auto' }}
                  />
                </div>

                <div className="space-y-2">
                  <p className="text-xs text-gray-500 break-all">{url}</p>
                  
                  <div className="flex gap-2 justify-center">
                    <button
                      onClick={() => handleDownload(qrCode, recipe.name)}
                      className="flex items-center gap-1 bg-orange-600 text-white px-3 py-2 rounded-lg hover:bg-orange-700 transition-colors text-sm"
                    >
                      <Download size={14} />
                      Descargar
                    </button>
                    
                    <button
                      onClick={() => window.open(url, '_blank')}
                      className="flex items-center gap-1 bg-gray-600 text-white px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors text-sm"
                    >
                      <Eye size={14} />
                      Ver
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
