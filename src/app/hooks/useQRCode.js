'use client';

import { useState, useEffect } from 'react';

export function useQRCode(recipeId) {
  const [qrCode, setQrCode] = useState(null);
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateQRCode = async () => {
    if (!recipeId) return;
    
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/qr?recipeId=${recipeId}`);
      const data = await response.json();

      if (data.success) {
        setQrCode(data.qrCode);
        setUrl(data.url);
      } else {
        setError(data.error || 'Error generating QR code');
      }
    } catch (err) {
      setError('Failed to generate QR code');
      console.error('QR Code generation error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (recipeId) {
      generateQRCode();
    }
  }, [recipeId]);

  return {
    qrCode,
    url,
    isLoading,
    error,
    generateQRCode
  };
}
