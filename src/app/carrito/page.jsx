'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useCart } from '../hooks/useCart';
import Navigation from '../components/Navigation';
import Button from '../components/Button';
import { Truck, Shield, RefreshCw } from 'lucide-react';

export default function CarritoPage() {
  const {
    cart,
    cartTotal,
    cartItemsCount,
    updateCartQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const shipping = cartTotal > 25000 ? 0 : 3000;
  const total = cartTotal + shipping;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-100">
      <Navigation currentPath="/carrito" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Tu Carrito</h1>
          <p className="text-xl text-gray-600">
            {cartItemsCount === 0 
              ? 'Tu carrito está vacío' 
              : `${cartItemsCount} ${cartItemsCount === 1 ? 'producto' : 'productos'} en tu carrito`
            }
          </p>
        </motion.div>

        {cart.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center py-16"
          >
            <div className="w-32 h-32 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-6xl">🛒</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tu carrito está vacío</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Explora nuestras deliciosas recetas y agrega algunos SweetKits a tu carrito.
            </p>
            <Button href="/recetas" size="lg">
              Explorar Recetas
            </Button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Lista de productos */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Productos</h2>
                <div className="space-y-4">
                  {cart.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-200 to-pink-200 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">🍰</span>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{item.name}</h3>
                        <p className="text-sm text-gray-600">{item.category}</p>
                        <p className="text-lg font-bold text-orange-600">${item.price.toLocaleString()}</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                        >
                          −
                        </Button>
                        <span className="w-12 text-center font-bold text-lg">{item.quantity}</span>
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </Button>
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        🗑️
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Resumen del pedido */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-6 sticky top-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Resumen del Pedido</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal ({cartItemsCount} productos)</span>
                    <span className="font-semibold">${cartTotal.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Envío</span>
                    <span className="font-semibold">
                      {shipping === 0 ? 'Gratis' : `$${shipping.toLocaleString()}`}
                    </span>
                  </div>
                  
                  {shipping > 0 && (
                    <p className="text-sm text-orange-600">
                      ¡Agrega ${(25000 - cartTotal).toLocaleString()} más para envío gratis!
                    </p>
                  )}
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-xl font-bold">
                      <span>Total</span>
                      <span className="text-orange-600">${total.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <Button
                  variant="gradient"
                  size="lg"
                  className="w-full mb-4"
                  disabled={cart.length === 0}
                  icon="credit-card"
                >
                  {cart.length === 0 ? 'Agrega productos al carrito' : `Proceder al Pago - $${total.toLocaleString()}`}
                </Button>

                <div className="space-y-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearCart}
                    className="w-full text-red-600 hover:text-red-700 hover:bg-red-50"
                    icon="trash-2"
                  >
                    Vaciar Carrito
                  </Button>
                  <Button href="/recetas" variant="ghost" size="sm" className="w-full" icon="arrow-left">
                    Continuar Comprando
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </div>

      {/* Features */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck size={32} className="text-green-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Envío Rápido</h4>
              <p className="text-gray-600">Entrega en 24-48 horas en Puerto Varas y alrededores</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={32} className="text-blue-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Compra Segura</h4>
              <p className="text-gray-600">Tus datos están protegidos con encriptación SSL</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <RefreshCw size={32} className="text-orange-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Devoluciones</h4>
              <p className="text-gray-600">30 días para cambios y devoluciones sin costo</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">SweetKit</h3>
              <p className="text-gray-300 mb-4">
                Hacemos que preparar recetas tradicionales chilenas sea fácil, divertido y accesible para todos.
              </p>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Enlaces Rápidos</h5>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-300 hover:text-orange-400 transition-colors">Inicio</Link></li>
                <li><Link href="/recetas" className="text-gray-300 hover:text-orange-400 transition-colors">Recetas</Link></li>
                <li><Link href="#como-comprar" className="text-gray-300 hover:text-orange-400 transition-colors">Cómo Comprar</Link></li>
                <li><Link href="#contacto" className="text-gray-300 hover:text-orange-400 transition-colors">Contacto</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Contacto</h5>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span>📧</span>
                  hola@sweetkit.cl
                </li>
                <li className="flex items-center gap-2">
                  <span>📱</span>
                  +56 9 1234 5678
                </li>
                <li className="flex items-center gap-2">
                  <span>📍</span>
                  Puerto Varas, Chile
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 SweetKit. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}