import { useState, useEffect } from 'react';

export function useFavorites() {
  const [favorites, setFavorites] = useState([]);

  // Cargar favoritos desde localStorage al montar
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedFavorites = localStorage.getItem('sweetkit-favorites');
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
    }
  }, []);

  // Guardar favoritos en localStorage cuando cambien
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('sweetkit-favorites', JSON.stringify(favorites));
    }
  }, [favorites]);

  const addToFavorites = (recipe) => {
    setFavorites(prevFavorites => {
      if (prevFavorites.some(fav => fav.id === recipe.id)) {
        return prevFavorites;
      }
      return [...prevFavorites, recipe];
    });
  };

  const removeFromFavorites = (id) => {
    setFavorites(prevFavorites => prevFavorites.filter(fav => fav.id !== id));
  };

  const toggleFavorite = (recipe) => {
    if (favorites.some(fav => fav.id === recipe.id)) {
      removeFromFavorites(recipe.id);
    } else {
      addToFavorites(recipe);
    }
  };

  const isFavorite = (id) => {
    return favorites.some(fav => fav.id === id);
  };

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
    toggleFavorite,
    isFavorite,
  };
}
