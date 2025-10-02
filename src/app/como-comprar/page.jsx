'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Button from '../components/Button';
import { 
  ShoppingCart, 
  MessageCircle, 
  CreditCard, 
  Truck, 
  Shield, 
  Clock, 
  CheckCircle,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function ComoComprarPage() {
  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(
      "¡Hola! Me interesa comprar SweetKits. ¿Podrían ayudarme con más información sobre los productos disponibles y precios?"
    );
    const whatsappUrl = `https://wa.me/56940964445?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-100">
      <Navigation currentPath="/como-comprar" />

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Cómo Comprar
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Obtén tus SweetKits de manera fácil y rápida. Te guiamos paso a paso para que puedas disfrutar de nuestras deliciosas recetas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Proceso de Compra
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sigue estos simples pasos para obtener tus SweetKits
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                icon: ShoppingCart,
                title: "Elige tus SweetKits",
                description: "Navega por nuestro catálogo y selecciona los SweetKits que más te gusten. Puedes ver todas las recetas disponibles y sus precios.",
                color: "orange"
              },
              {
                step: "02",
                icon: MessageCircle,
                title: "Contacta vía WhatsApp",
                description: "Envía un mensaje por WhatsApp con los SweetKits que deseas comprar. Te responderemos rápidamente con la disponibilidad.",
                color: "green"
              },
              {
                step: "03",
                icon: CreditCard,
                title: "Confirma tu pedido",
                description: "Te enviaremos los detalles del pedido y las opciones de pago. Puedes pagar por transferencia bancaria o efectivo.",
                color: "blue"
              },
              {
                step: "04",
                icon: Truck,
                title: "Recibe tu pedido",
                description: "Te entregamos tus SweetKits en Puerto Varas o coordinamos el envío según tu ubicación. ¡Disfruta cocinando!",
                color: "purple"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`bg-${item.color}-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6`}>
                  {item.step}
                </div>
                <div className={`w-12 h-12 bg-${item.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <item.icon size={24} className={`text-${item.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              ¿Listo para comprar?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Contáctanos por WhatsApp y te ayudaremos con tu pedido
            </p>
            <Button
              onClick={handleWhatsAppOrder}
              variant="secondary"
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100"
            >
              <MessageCircle size={24} className="mr-2" />
              Comprar por WhatsApp
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Métodos de Pago
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Aceptamos diferentes formas de pago para tu comodidad
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: CreditCard,
                title: "Transferencia Bancaria",
                description: "Pago seguro por transferencia bancaria. Te enviamos los datos para realizar el pago.",
                features: ["Pago seguro", "Confirmación inmediata", "Sin comisiones"]
              },
              {
                icon: Shield,
                title: "Efectivo",
                description: "Pago en efectivo al momento de la entrega. Perfecto para compras locales.",
                features: ["Pago al recibir", "Sin comisiones", "Entrega inmediata"]
              },
              {
                icon: Clock,
                title: "Pago Contra Entrega",
                description: "Paga cuando recibas tu pedido. Ideal para tu primera compra.",
                features: ["Pago seguro", "Verificación de producto", "Flexibilidad total"]
              }
            ].map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <method.icon size={32} className="text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{method.title}</h3>
                <p className="text-gray-600 mb-6">{method.description}</p>
                <ul className="space-y-2">
                  {method.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle size={16} className="text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Información de Entrega
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Te entregamos tus SweetKits de manera rápida y segura
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Truck size={24} className="text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Entrega en Puerto Varas</h3>
                  <p className="text-gray-600">Entregamos gratis en Puerto Varas y alrededores. Tiempo de entrega: 1-2 días hábiles.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Otras Ciudades</h3>
                  <p className="text-gray-600">Coordinamos envíos a otras ciudades de Chile. Consulta costos y tiempos de entrega.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock size={24} className="text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Horarios de Entrega</h3>
                  <p className="text-gray-600">Lunes a Viernes: 9:00 - 18:00 hrs. Sábados: 9:00 - 14:00 hrs.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-orange-50 to-pink-100 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MessageCircle size={20} className="text-green-600" />
                  <span className="text-gray-700">+56 9 4096 4445</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-orange-600" />
                  <span className="text-gray-700">hola@sweetkit.cl</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-blue-600" />
                  <span className="text-gray-700">Puerto Varas, Chile</span>
                </div>
              </div>
              
              <div className="mt-8">
                <Button
                  onClick={handleWhatsAppOrder}
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  <MessageCircle size={20} className="mr-2" />
                  Contactar por WhatsApp
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h4 className="text-2xl font-bold text-orange-400 mb-4">🍪 SweetKit</h4>
              <p className="text-gray-300 mb-4">
                Llevando la tradición de la repostería chilena a tu hogar de manera fácil y divertida.
              </p>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Enlaces Rápidos</h5>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-300 hover:text-orange-400 transition-colors">Inicio</Link></li>
                <li><Link href="/recetas" className="text-gray-300 hover:text-orange-400 transition-colors">Recetas</Link></li>
                <li><Link href="/como-comprar" className="text-orange-400">Cómo Comprar</Link></li>
                <li><Link href="#contacto" className="text-gray-300 hover:text-orange-400 transition-colors">Contacto</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Contacto</h5>
              <ul className="space-y-2 text-gray-300">
                <li>📧 hola@sweetkit.cl</li>
                <li>📱 +56 9 4096 4445</li>
                <li>📍 Puerto Varas, Chile</li>
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
