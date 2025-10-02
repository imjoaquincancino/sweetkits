'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Button from '../components/Button';
import { 
  Heart, 
  Users, 
  Target, 
  Award, 
  MapPin, 
  Clock, 
  MessageCircle,
  Mail,
  Phone,
  Instagram,
  Facebook
} from 'lucide-react';
import { useWhatsApp } from '../hooks/useWhatsApp';

export default function SobreNosotrosPage() {
  const { sendGeneralMessage } = useWhatsApp();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-100">
      <Navigation currentPath="/sobre-nosotros" />

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
              Sobre Nosotros
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conoce la historia detrás de SweetKit y nuestra pasión por llevar la repostería chilena a tu hogar
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Nuestra Historia
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  SweetKit nació en el corazón de Puerto Varas, donde la tradición culinaria chilena se mezcla con la innovación moderna. 
                  Como estudiantes de emprendimiento, nos dimos cuenta de que muchas personas querían preparar postres tradicionales 
                  pero se sentían abrumadas por la complejidad de las recetas y la dificultad para encontrar ingredientes.
                </p>
                <p>
                  Decidimos crear una solución que combinara la autenticidad de las recetas chilenas con la conveniencia moderna. 
                  Así nació SweetKit: cajitas con ingredientes pre-medidos y códigos QR que te llevan directamente a instrucciones 
                  paso a paso, haciendo que la repostería sea accesible para todos.
                </p>
                <p>
                  Hoy, estamos orgullosos de ser parte de la feria de emprendimiento de nuestro colegio, compartiendo nuestra pasión 
                  por la repostería chilena y ayudando a las familias a crear momentos dulces juntos.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-orange-100 to-pink-100 rounded-2xl p-8"
            >
              <div className="text-center">
                <div className="w-32 h-32 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-6xl">🍪</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">SweetKit</h3>
                <p className="text-gray-600 mb-6">
                  Llevando la tradición de la repostería chilena a tu hogar de manera fácil y divertida
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-orange-600">2025</div>
                    <div className="text-sm text-gray-600">Año de Fundación</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-600">5+</div>
                    <div className="text-sm text-gray-600">Recetas Disponibles</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
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
              Nuestros Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los principios que guían todo lo que hacemos en SweetKit
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Pasión por la Tradición",
                description: "Respetamos y preservamos las recetas tradicionales chilenas, manteniendo su autenticidad mientras las hacemos accesibles para todos.",
                color: "red"
              },
              {
                icon: Users,
                title: "Accesibilidad",
                description: "Creemos que la repostería debe ser para todos. Por eso simplificamos el proceso sin comprometer la calidad o el sabor.",
                color: "blue"
              },
              {
                icon: Target,
                title: "Innovación",
                description: "Utilizamos tecnología moderna (códigos QR) para hacer que las recetas tradicionales sean más fáciles de seguir y entender.",
                color: "green"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center"
              >
                <div className={`w-16 h-16 bg-${value.color}-100 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <value.icon size={32} className={`text-${value.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Nuestro Equipo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estudiantes apasionados por el emprendimiento y la repostería chilena
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Equipo SweetKit",
                role: "Fundadores",
                description: "Estudiantes de emprendimiento de Puerto Varas, apasionados por la repostería chilena y la innovación.",
                image: "👨‍🎓"
              },
              {
                name: "Comunidad Local",
                role: "Inspiración",
                description: "Las familias de Puerto Varas que nos inspiraron a crear SweetKit y nos ayudan a perfeccionar nuestras recetas.",
                image: "👨‍👩‍👧‍👦"
              },
              {
                name: "Nuestros Clientes",
                role: "Motivación",
                description: "Cada persona que prueba nuestros SweetKits nos motiva a seguir innovando y mejorando nuestra propuesta.",
                image: "😊"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-8 text-center"
              >
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-orange-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SweetKit Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              ¿Por qué elegir SweetKit?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Porque creemos que la repostería debe ser una experiencia divertida, accesible y deliciosa para toda la familia
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {[
                { icon: Award, text: "Recetas Auténticas" },
                { icon: Clock, text: "Fácil de Preparar" },
                { icon: Heart, text: "Para Toda la Familia" },
                { icon: Target, text: "Ingredientes Frescos" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon size={32} className="text-white" />
                  </div>
                  <p className="text-lg font-semibold">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              ¿Quieres saber más sobre nosotros?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contáctanos y conoce más sobre nuestra historia y nuestros productos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => sendGeneralMessage("¡Hola! Me interesa conocer más sobre SweetKit y su historia. ¿Podrían contarme más?")}
                variant="primary"
                size="lg"
              >
                <MessageCircle size={20} className="mr-2" />
                Contactar por WhatsApp
              </Button>
              <Button
                href="/contacto"
                variant="secondary"
                size="lg"
              >
                Ver Información de Contacto
              </Button>
            </div>
          </motion.div>
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
                <li><Link href="/como-comprar" className="text-gray-300 hover:text-orange-400 transition-colors">Cómo Comprar</Link></li>
                <li><Link href="/sobre-nosotros" className="text-orange-400">Sobre Nosotros</Link></li>
                <li><Link href="/contacto" className="text-gray-300 hover:text-orange-400 transition-colors">Contacto</Link></li>
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
