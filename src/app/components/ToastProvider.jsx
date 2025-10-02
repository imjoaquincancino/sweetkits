'use client';

import { createContext, useContext } from 'react';
import { useToast } from '../hooks/useToast';
import Toast from './Toast';

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const toastHook = useToast();

  return (
    <ToastContext.Provider value={toastHook}>
      {children}
      <Toast
        message={toastHook.toast?.message}
        type={toastHook.toast?.type}
        isVisible={!!toastHook.toast}
        onClose={toastHook.clearToast}
      />
    </ToastContext.Provider>
  );
}

export function useToastContext() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToastContext debe ser usado dentro de un ToastProvider');
  }
  return context;
}
