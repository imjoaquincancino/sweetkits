'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useCart } from '../hooks/useCart';
import { useFavorites } from '../hooks/useFavorites';
import { useToast } from '../hooks/useToast';
import { useState, useEffect } from 'react';
import { Clock, Users, DollarSign, Heart, ShoppingCart, ChefHat } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

export default function RecipeCard({ recipe, index = 0 }) {
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const { showSuccess } = useToast();
  const [isClient, setIsClient] = useState(false);

  // Solo usar los hooks después de que el componente se monte en el cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(recipe);
    showSuccess(`${recipe.name} agregado al carrito`);
  };

  const handleToggleFavorite = (e) => {
    e.preventDefault();
    toggleFavorite(recipe);
  };

  // Si no estamos en el cliente aún, mostrar versión básica
  if (!isClient) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
      >
        {/* Recipe Image */}
        <div className="relative h-48 group-hover:scale-110 transition-transform duration-300">
          <OptimizedImage 
            src={recipe.image} 
            alt={recipe.name}
            className="w-full h-full"
            fallback="🍰"
          />
          {/* Price Badge */}
          <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg flex items-center gap-1">
            <DollarSign size={14} />
            {recipe.price.toLocaleString()}
          </div>
        </div>

        {/* Recipe Content */}
        <div className="p-6">
          {/* Category & Difficulty */}
          <div className="flex items-center gap-2 mb-3">
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

          {/* Recipe Name */}
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
            {recipe.name}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {recipe.description}
          </p>

          {/* Recipe Stats */}
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

          {/* Action Buttons */}
          <div className="flex gap-2">
            <Link href={`/recetas/${recipe.id}`} className="flex-1">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
              >
                Ver Receta
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-3 border-2 border-orange-600 text-orange-600 rounded-lg font-semibold hover:bg-orange-50 transition-colors flex items-center justify-center gap-2"
              disabled
            >
              <ShoppingCart size={18} />
            </motion.button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
    >
      {/* Recipe Image */}
      <div className="relative h-48 group-hover:scale-110 transition-transform duration-300">
        <OptimizedImage 
          src={recipe.image} 
          alt={recipe.name}
          className="w-full h-full"
          fallback="🍰"
        />

        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg flex items-center gap-1">
          <DollarSign size={14} />
          {recipe.price.toLocaleString()}
        </div>

        {/* Favorite Button */}
        <button
          onClick={handleToggleFavorite}
          className={`absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
            isFavorite(recipe.id)
              ? 'bg-red-500 text-white hover:bg-red-600'
              : 'bg-white/80 text-gray-600 hover:bg-white hover:text-red-500'
          }`}
          aria-label={isFavorite(recipe.id) ? 'Quitar de favoritos' : 'Agregar a favoritos'}
        >
          <Heart size={20} className={isFavorite(recipe.id) ? 'fill-current' : ''} />
        </button>
      </div>

      {/* Recipe Content */}
      <div className="p-6">
        {/* Category & Difficulty */}
        <div className="flex items-center gap-2 mb-3">
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

        {/* Recipe Name */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
          {recipe.name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {recipe.description}
        </p>

        {/* Recipe Stats */}
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

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Link href={`/recetas/${recipe.id}`} className="flex-1">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              Ver Receta
            </motion.button>
          </Link>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleAddToCart}
            className="px-4 py-3 border-2 border-orange-600 text-orange-600 rounded-lg font-semibold hover:bg-orange-50 transition-colors flex items-center justify-center gap-2"
            aria-label="Agregar al carrito"
          >
            <ShoppingCart size={18} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}