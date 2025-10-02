'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { recipes } from '../../data/recipes';
import { Clock, Users, DollarSign, Heart, Printer, Share, ShoppingCart } from 'lucide-react';
import OptimizedImage from '../../components/OptimizedImage';

export default function RecetaDetailPage() {
  const params = useParams();
  const recipeId = parseInt(params.id);
  const recipe = recipes.find(r => r.id === recipeId);

  if (!recipe) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Receta no encontrada</h2>
          <Link
            href="/recetas"
            className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
          >
            Volver al Catálogo
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center">
              <h1 className="text-3xl font-bold text-orange-600">🍪 SweetKit</h1>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-orange-600 transition-colors">
                Inicio
              </Link>
              <Link href="/recetas" className="text-gray-700 hover:text-orange-600 transition-colors">
                Recetas
              </Link>
              <Link href="#sobre-nosotros" className="text-gray-700 hover:text-orange-600 transition-colors">
                Sobre Nosotros
              </Link>
              <Link href="#contacto" className="text-gray-700 hover:text-orange-600 transition-colors">
                Contacto
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex text-sm text-gray-600">
          <Link href="/" className="hover:text-orange-600 transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/recetas" className="hover:text-orange-600 transition-colors">Recetas</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-semibold">{recipe.name}</span>
        </nav>
      </div>

      {/* Recipe Hero */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Recipe Image & Info */}
            <div>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <OptimizedImage 
                  src={recipe.image} 
                  alt={recipe.name}
                  className="h-80 w-full"
                  fallback="🍰"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm font-medium text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                      {recipe.category}
                    </span>
                    <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                      recipe.difficulty === 'Fácil' ? 'bg-green-100 text-green-600' :
                      recipe.difficulty === 'Medio' ? 'bg-yellow-100 text-yellow-600' :
                      'bg-red-100 text-red-600'
                    }`}>
                      {recipe.difficulty}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Clock size={24} className="text-orange-600" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900">{recipe.time.split(' ')[0]}</div>
                      <div className="text-sm text-gray-600">Tiempo</div>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Users size={24} className="text-blue-600" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900">{recipe.servings}</div>
                      <div className="text-sm text-gray-600">Porciones</div>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <DollarSign size={24} className="text-green-600" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900">${recipe.price.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">Precio</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-orange-600 text-white py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors shadow-lg flex items-center justify-center gap-2"
                    >
                      <ShoppingCart size={20} />
                      Comprar SweetKit - ${recipe.price.toLocaleString()}
                    </motion.button>
                    <div className="grid grid-cols-2 gap-2">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="border-2 border-orange-600 text-orange-600 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors flex items-center justify-center gap-2"
                      >
                        <Heart size={18} />
                        Favorito
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="border-2 border-gray-300 text-gray-600 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                        onClick={() => window.print()}
                      >
                        <Printer size={18} />
                        Imprimir
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recipe Content */}
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{recipe.name}</h1>
              <p className="text-xl text-gray-600 mb-8">{recipe.description}</p>

              {/* Ingredients */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  📋 Ingredientes
                  <span className="ml-2 text-sm bg-orange-100 text-orange-600 px-3 py-1 rounded-full">
                    {recipe.ingredients.length} ingredientes
                  </span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {recipe.ingredients.map((ingredient, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-400"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900">{ingredient.name}</h4>
                          {ingredient.description && (
                            <p className="text-sm text-gray-600 mt-1">{ingredient.description}</p>
                          )}
                        </div>
                        <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold ml-2 flex-shrink-0">
                          {ingredient.amount}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tips */}
              {recipe.tips && recipe.tips.length > 0 && (
                <div className="bg-blue-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">💡 Consejos</h3>
                  <ul className="space-y-2">
                    {recipe.tips.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Instructions */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Instrucciones Paso a Paso
            </h2>

            <div className="space-y-6">
              {recipe.steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-2xl p-6 shadow-sm"
                >
                  <div className="flex items-start gap-6">
                    <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-lg">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-700 text-lg leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* QR Code Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¡Tu SweetKit te espera!
            </h3>
            <p className="text-gray-600 mb-6">
              Cada cajita viene con un código QR único que te lleva directamente a esta receta con instrucciones detalladas.
            </p>
            <div className="bg-gray-100 rounded-lg p-8 inline-block">
              <div className="bg-white rounded-lg p-4 border-2 border-dashed border-orange-300">
                <div className="text-center">
                  <div className="text-6xl mb-2">📱</div>
                  <div className="text-orange-600 font-bold text-lg">{recipe.qrCode}</div>
                  <div className="text-sm text-gray-600 mt-2">Escanea este código QR</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Recipes */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Otras recetas que te pueden gustar
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recipes.filter(r => r.id !== recipe.id).slice(0, 3).map((relatedRecipe, index) => (
              <motion.div
                key={relatedRecipe.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <OptimizedImage 
                  src={relatedRecipe.image} 
                  alt={relatedRecipe.name}
                  className="h-32 w-full"
                  fallback="🍰"
                />
                <div className="p-4">
                  <h4 className="font-bold text-gray-900 mb-1">{relatedRecipe.name}</h4>
                  <p className="text-sm text-gray-600 mb-3">{relatedRecipe.description}</p>
                  <Link
                    href={`/recetas/${relatedRecipe.id}`}
                    className="text-orange-600 font-semibold text-sm hover:text-orange-700 transition-colors"
                  >
                    Ver receta →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h4 className="text-2xl font-bold text-orange-400 mb-4">🍪 SweetKit</h4>
            <p className="text-gray-300 mb-6">
              Llevando la tradición de la repostería chilena a tu hogar.
            </p>
            <div className="flex justify-center space-x-6">
              <Link href="/" className="text-gray-300 hover:text-orange-400 transition-colors">
                Inicio
              </Link>
              <Link href="/recetas" className="text-gray-300 hover:text-orange-400 transition-colors">
                Recetas
              </Link>
              <Link href="#contacto" className="text-gray-300 hover:text-orange-400 transition-colors">
                Contacto
              </Link>
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
