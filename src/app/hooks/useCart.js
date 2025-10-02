import { useState, useEffect } from 'react';

export function useCart() {
  const [cart, setCart] = useState([]);

  // Cargar carrito desde localStorage al montar
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedCart = localStorage.getItem('sweetkit-cart');
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    }
  }, []);

  // Guardar carrito en localStorage cuando cambie
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('sweetkit-cart', JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (recipe) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === recipe.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === recipe.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...recipe, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const updateCartQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return {
    cart,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    clearCart,
    cartTotal,
    cartItemsCount,
  };
}
