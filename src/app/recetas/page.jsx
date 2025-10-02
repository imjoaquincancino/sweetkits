'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { recipes, categories } from '../data/recipes';
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Button from '../components/Button';
import RecipeCard from '../components/RecipeCard';
import { Package, Smartphone, Smile } from 'lucide-react';

export default function RecetasPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todas las Recetas');
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

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
              Nuestro Catálogo de Recetas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre nuestra colección completa de recetas dulces chilenas tradicionales.
              Cada SweetKit viene con ingredientes pre-medidos y instrucciones detalladas.
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

          {/* Recipes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRecipes.map((recipe, index) => (
              <RecipeCard key={recipe.id} recipe={recipe} index={index} />
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
                title: "Elige tu receta",
                description: "Navega nuestro catálogo y selecciona la receta que más te guste. Cada SweetKit incluye todos los ingredientes necesarios."
              },
              {
                step: "02",
                icon: Smartphone,
                title: "Escanea el QR",
                description: "Cada cajita viene con un código QR único que te lleva directamente a las instrucciones paso a paso."
              },
              {
                step: "03",
                icon: Smile,
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
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon size={24} className="text-orange-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
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
