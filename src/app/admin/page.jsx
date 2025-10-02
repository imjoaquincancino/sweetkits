'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { QrCode, Lock, Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';

export default function AdminPage() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUnlock = () => {
    if (password === 'sweetkit2025') {
      setIsUnlocked(true);
      setError('');
    } else {
      setError('Contraseña incorrecta');
    }
  };

  if (!isUnlocked) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-100 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full mx-4"
        >
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock size={32} className="text-orange-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Área de Administración</h2>
            <p className="text-gray-600 mb-6">Ingresa la contraseña para acceder a la gestión de códigos QR</p>
            
            <div className="space-y-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contraseña"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                onKeyPress={(e) => e.key === 'Enter' && handleUnlock()}
              />
              
              {error && (
                <p className="text-red-600 text-sm text-center">{error}</p>
              )}
              
              <button
                onClick={handleUnlock}
                className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
              >
                Acceder
              </button>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <Link 
                href="/" 
                className="text-orange-600 hover:text-orange-700 font-medium"
              >
                ← Volver al inicio
              </Link>
            </div>
          </div>
        </motion.div>
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
            Administración SweetKit
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Gestiona los códigos QR para las cajas SweetKit
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <QrCode size={32} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Códigos QR</h3>
              <p className="text-gray-600 mb-4">Ver y descargar todos los códigos QR generados</p>
              <Link
                href="/admin/qr-codes"
                className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors inline-block"
              >
                Gestionar QR
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Vista Previa</h3>
              <p className="text-gray-600 mb-4">Ver cómo se ven las cajas SweetKit con QR</p>
              <Link
                href="/"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
              >
                Ver Página
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <EyeOff size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cerrar Sesión</h3>
              <p className="text-gray-600 mb-4">Salir del área de administración</p>
              <button
                onClick={() => setIsUnlocked(false)}
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Cerrar
              </button>
            </div>
          </motion.div>
        </div>

        <div className="mt-8 text-center">
          <Link 
            href="/" 
            className="text-orange-600 hover:text-orange-700 font-medium"
          >
            ← Volver al sitio principal
          </Link>
        </div>
      </div>
    </div>
  );
}
