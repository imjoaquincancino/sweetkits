'use client';

import { useCallback } from 'react';

const WHATSAPP_NUMBER = '56940964445';

export function useWhatsApp() {
  const generateOrderMessage = useCallback((items, total) => {
    let message = "¡Hola! Me interesa comprar los siguientes SweetKits:\n\n";
    
    items.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`;
      message += `   Cantidad: ${item.quantity}\n`;
      message += `   Precio unitario: $${item.price.toLocaleString()}\n`;
      message += `   Subtotal: $${(item.price * item.quantity).toLocaleString()}\n\n`;
    });
    
    message += `💰 Total: $${total.toLocaleString()}\n\n`;
    message += "¿Podrían confirmarme la disponibilidad y ayudarme con el proceso de compra? ¡Gracias!";
    
    return message;
  }, []);

  const sendWhatsAppMessage = useCallback((message) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  }, []);

  const sendOrder = useCallback((items, total) => {
    const message = generateOrderMessage(items, total);
    sendWhatsAppMessage(message);
  }, [generateOrderMessage, sendWhatsAppMessage]);

  const sendGeneralMessage = useCallback((customMessage) => {
    const message = customMessage || "¡Hola! Me interesa comprar SweetKits. ¿Podrían ayudarme con más información?";
    sendWhatsAppMessage(message);
  }, [sendWhatsAppMessage]);

  return {
    sendOrder,
    sendGeneralMessage,
    generateOrderMessage,
    whatsappNumber: WHATSAPP_NUMBER
  };
}
