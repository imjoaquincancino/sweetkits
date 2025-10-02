'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { recipes, categories } from '../data/recipes';
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Button from '../components/Button';
import RecipeCard from '../components/RecipeCard';
import { Package, Smartphone, Smile, Clock, Users, QrCode } from 'lucide-react';
import QRCodeBadge from '../components/QRCodeBadge';
import OptimizedImage from '../components/OptimizedImage';
import { useWhatsApp } from '../hooks/useWhatsApp';

export default function RecetasPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todas las Recetas');
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const { sendGeneralMessage } = useWhatsApp();

  const handleCategoryFilter = (categoryName) => {
    setSelectedCategory(categoryName);
    if (categoryName === 'Todas las Recetas') {
      setFilteredRecipes(recipes);
    } else {
      setFilteredRecipes(recipes.filter(recipe => recipe.category === categoryName));
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-100">
      <Navigation currentPath="/recetas" />

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nuestros SweetKits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre nuestra colección completa de SweetKits con recetas dulces chilenas tradicionales.
              Cada caja incluye ingredientes pre-medidos y un código QR para acceder a las instrucciones.
            </p>
          </motion.div>

          {/* Categories Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Button
              variant={selectedCategory === 'Todas las Recetas' ? 'primary' : 'secondary'}
              onClick={() => handleCategoryFilter('Todas las Recetas')}
            >
              Todas las Recetas
            </Button>
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.name ? 'primary' : 'secondary'}
                onClick={() => handleCategoryFilter(category.name)}
              >
                {category.icon} {category.name}
              </Button>
            ))}
          </motion.div>

          {/* SweetKits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRecipes.map((recipe, index) => (
              <motion.div
                key={recipe.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* SweetKit Box Visual */}
                <div className="relative h-48 overflow-hidden">
                  {/* Recipe Image Background */}
                  <OptimizedImage
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-full object-cover"
                    fallback="🍰"
                  />
                  
                  {/* SweetKit Brand Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-orange-600 text-white px-3 py-1 rounded-lg text-sm font-bold inline-block mb-2">
                        SweetKit
                      </div>
                      <p className="text-white font-medium text-sm">{recipe.name}</p>
                    </div>
                  </div>
                  
                  {/* QR Code Badge */}
                  <div className="absolute top-4 right-4">
                    <QRCodeBadge 
                      recipeId={recipe.id} 
                      recipeName={recipe.name}
                      size="sm"
                      showActions={true}
                    />
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{recipe.name}</h4>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{recipe.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Clock size={16} />
                      {recipe.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users size={16} />
                      {recipe.servings} porciones
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-orange-600">
                      ${recipe.price.toLocaleString()}
                    </span>
                    <div className="flex gap-2">
                      <Button href={`/recetas/${recipe.id}`} variant="outline" size="sm">
                        Ver Receta
                      </Button>
                      <Button 
                        onClick={() => sendGeneralMessage(`¡Hola! Me interesa comprar el SweetKit de ${recipe.name}. ¿Podrían ayudarme con más información?`)}
                        variant="primary" 
                        size="sm"
                      >
                        Comprar
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              ¿Cómo funciona SweetKit?
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tres simples pasos para disfrutar de auténticas recetas chilenas en tu hogar.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: Package,
                title: "Compra tu SweetKit",
                description: "Elige la receta que más te guste. Recibirás una caja con ingredientes pre-medidos y un código QR."
              },
              {
                step: "02",
                icon: Smartphone,
                title: "Escanea el QR de tu caja",
                description: "Abre tu SweetKit y escanea el código QR que viene en la caja para acceder a la receta completa.",
                showQR: true
              },
              {
                step: "03",
                icon: Smile,
                title: "¡Cocina y disfruta!",
                description: "Sigue las instrucciones paso a paso, usa los ingredientes de tu caja y crea una delicia única."
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
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon size={24} className="text-orange-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600 mb-4">{item.description}</p>
                {item.showQR && (
                  <div className="mt-4 flex flex-col items-center">
                    <div className="mb-2">
                      <QRCodeBadge 
                        recipeId={1} 
                        recipeName="Kuchen de Manzana"
                        size="md"
                        showActions={false}
                      />
                    </div>
                    <p className="text-xs text-gray-500 text-center">
                      Escanea este código QR<br/>que viene en tu caja
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
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
              ¿No sabes cuál elegir?
            </h3>
            <p className="text-xl text-orange-100 mb-8">
              Prueba nuestro pack de descubrimiento con 3 recetas diferentes por un precio especial.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Comprar Pack Descubrimiento
            </motion.button>
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
                <li><Link href="/recetas" className="text-orange-400">Recetas</Link></li>
                <li><Link href="#como-comprar" className="text-gray-300 hover:text-orange-400 transition-colors">Cómo Comprar</Link></li>
                <li><Link href="#contacto" className="text-gray-300 hover:text-orange-400 transition-colors">Contacto</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Contacto</h5>
              <ul className="space-y-2 text-gray-300">
                <li>📧 hola@sweetkit.cl</li>
                <li>📱 +56 9 1234 5678</li>
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
