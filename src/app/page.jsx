'use client';

import { motion } from 'framer-motion';
import { featuredProducts } from './data/recipes';
import Navigation from './components/Navigation';
import Button from './components/Button';
import RecipeCard from './components/RecipeCard';
import { Package, Smartphone, Award, Truck, Shield, MapPin, Mail, Phone, BookOpen, ChefHat, Info } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-100">
      <Navigation currentPath="/" />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Recetas Dulces{' '}
                <span className="text-orange-600">Chilenas</span>{' '}
                Fáciles de Preparar
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Descubre el sabor auténtico de Chile con nuestras cajitas SweetKit.
                Ingredientes pre-medidos y recetas paso a paso para crear deliciosos
                postres tradicionales sin complicaciones.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button href="/recetas" size="lg">
                  <BookOpen size={20} className="mr-2" />
                  Explorar Recetas
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => document.getElementById('como-funciona').scrollIntoView({ behavior: 'smooth' })}
                  icon="chevron-down"
                >
                  Cómo Funciona
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-gradient-to-br from-orange-100 to-pink-100 rounded-2xl p-6">
                  <div className="bg-white rounded-xl p-4 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">SweetKit #001</span>
                      <span className="text-sm text-orange-600 font-semibold">$12.990</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Kuchen de Manzana</h3>
                    <p className="text-sm text-gray-600 mt-1">Tradicional receta alemana con toque chileno</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-orange-600 text-white rounded-full px-6 py-2 font-semibold">
                      ¡Escanea el QR para comenzar!
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="como-funciona" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              ¿Cómo Funciona SweetKit?
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tres simples pasos para disfrutar de auténticas recetas chilenas en tu hogar.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: "📦",
                title: "Elige tu receta",
                description: "Navega nuestro catálogo y selecciona la receta que más te guste. Cada SweetKit incluye todos los ingredientes necesarios."
              },
              {
                step: "02",
                icon: "📱",
                title: "Escanea el QR",
                description: "Cada cajita viene con un código QR único que te lleva directamente a las instrucciones paso a paso."
              },
              {
                step: "03",
                icon: "😋",
                title: "¡Disfruta!",
                description: "Sigue las instrucciones, prepara tu receta y comparte el resultado con familiares y amigos."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <div className="text-5xl mb-4">{item.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir SweetKit?
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hacemos que preparar recetas tradicionales chilenas sea fácil, divertido y accesible para todos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Package,
                title: "Ingredientes Pre-Medidos",
                description: "Todos los ingredientes vienen perfectamente medidos y listos para usar. ¡Sin desperdicios!"
              },
              {
                icon: Smartphone,
                title: "Recetas Interactivas",
                description: "Escanea el código QR y sigue instrucciones paso a paso con videos y tips exclusivos."
              },
              {
                icon: Award,
                title: "Sabores Auténticos",
                description: "Recetas tradicionales chilenas preparadas con ingredientes de primera calidad."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Recetas Destacadas
            </h3>
            <p className="text-xl text-gray-600">
              Descubre nuestras recetas más populares, perfectas para cualquier ocasión.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((recipe, index) => (
              <RecipeCard key={recipe.id} recipe={recipe} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button href="/recetas" variant="secondary" size="lg">
              Ver Todas las Recetas
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              ¿Listo para comenzar tu aventura culinaria?
            </h3>
            <p className="text-xl text-orange-100 mb-8">
              Únete a miles de personas que ya están disfrutando de la repostería chilena de manera fácil y divertida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/recetas" size="lg">
                <ChefHat size={20} className="mr-2" />
                Comprar SweetKit
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => document.getElementById('como-funciona').scrollIntoView({ behavior: 'smooth' })}
                icon="info"
              >
                Cómo Comprar
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
                Descubre el auténtico sabor de Chile con ingredientes pre-medidos y recetas paso a paso.
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
                  <Mail size={16} />
                  hola@sweetkit.cl
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} />
                  +56 9 1234 5678
                </li>
                <li className="flex items-center gap-2">
                  <MapPin size={16} />
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
