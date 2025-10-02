'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Button from '../components/Button';
import LoadingSpinner from '../components/LoadingSpinner';
import { useCart } from '../hooks/useCart';
import { useWhatsApp } from '../hooks/useWhatsApp';
import { 
  ShoppingCart, 
  Plus, 
  Minus, 
  Trash2, 
  MessageCircle, 
  Truck, 
  Shield, 
  RefreshCw 
} from 'lucide-react';

export default function CarritoPage() {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getTotalPrice, getTotalItems } = useCart();
  const { sendOrder, sendGeneralMessage } = useWhatsApp();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId);
    } else {
      updateQuantity(itemId, newQuantity);
    }
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    
    const total = getTotalPrice();
    sendOrder(cartItems, total);
  };

  const handleGeneralContact = () => {
    sendGeneralMessage();
  };

  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-100 flex items-center justify-center">
        <LoadingSpinner message="Cargando carrito..." />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-100">
      <Navigation currentPath="/carrito" />

      {/* Header */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <ShoppingCart size={48} className="text-orange-600" />
              Mi Carrito
            </h1>
            <p className="text-xl text-gray-600">
              Revisa tus SweetKits seleccionados y completa tu compra
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cart Content */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {cartItems.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-20"
            >
              <div className="bg-white rounded-2xl shadow-lg p-12 max-w-md mx-auto">
                <ShoppingCart size={64} className="text-gray-300 mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Tu carrito está vacío</h2>
                <p className="text-gray-600 mb-8">
                  Agrega algunos SweetKits deliciosos para comenzar tu pedido
                </p>
                <Button href="/recetas" variant="primary" size="lg">
                  Explorar Recetas
                </Button>
              </div>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  {cartItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white rounded-2xl shadow-lg p-6"
                    >
                      <div className="flex items-center gap-6">
                        {/* Product Image */}
                        <div className="w-24 h-24 bg-gradient-to-br from-orange-200 to-pink-200 rounded-xl flex items-center justify-center flex-shrink-0">
                          <span className="text-2xl">🍰</span>
                        </div>

                        {/* Product Info */}
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                          <p className="text-gray-600 text-sm mb-2">{item.category}</p>
                          <p className="text-2xl font-bold text-orange-600">
                            ${item.price.toLocaleString()}
                          </p>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="text-lg font-semibold text-gray-900 min-w-[2rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                          >
                            <Plus size={16} />
                          </button>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center hover:bg-red-200 transition-colors text-red-600"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Clear Cart Button */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-6 text-center"
                >
                  <Button
                    onClick={clearCart}
                    variant="ghost"
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 size={16} className="mr-2" />
                    Vaciar Carrito
                  </Button>
                </motion.div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white rounded-2xl shadow-lg p-6 sticky top-6"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Resumen del Pedido</h2>
                  
                  {/* Order Details */}
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-gray-600">
                      <span>Productos ({getTotalItems()})</span>
                      <span>${getTotalPrice().toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Envío</span>
                      <span className="text-green-600 font-semibold">Gratis</span>
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex justify-between text-xl font-bold text-gray-900">
                        <span>Total</span>
                        <span>${getTotalPrice().toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <Button
                    onClick={handleCheckout}
                    variant="primary"
                    size="lg"
                    className="w-full mb-4"
                  >
                    <MessageCircle size={20} className="mr-2" />
                    Comprar por WhatsApp
                  </Button>

                  {/* General Contact Button */}
                  <Button
                    onClick={handleGeneralContact}
                    variant="outline"
                    size="lg"
                    className="w-full mb-6"
                  >
                    <MessageCircle size={20} className="mr-2" />
                    Consultar Disponibilidad
                  </Button>

                  {/* Service Features */}
                  <div className="space-y-4 pt-6 border-t border-gray-200">
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <Truck size={16} className="text-orange-600" />
                      <span>Envío gratis en Puerto Varas</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <Shield size={16} className="text-orange-600" />
                      <span>Pago seguro contra entrega</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <RefreshCw size={16} className="text-orange-600" />
                      <span>Respuesta rápida por WhatsApp</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
