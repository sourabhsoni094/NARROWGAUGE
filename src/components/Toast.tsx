import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4500);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <aside
      aria-label="Notification"
      className="fixed bottom-6 right-6 z-50 max-w-md bg-[#161616] border border-accent-champagne/50 p-4 shadow-2xl flex items-start gap-3 animate-fade-in"
    >
      <CheckCircle2 className="w-5 h-5 text-accent-champagne shrink-0 mt-0.5" />
      <div className="flex-1 text-xs text-[#F5F2EA] leading-relaxed">
        {message}
      </div>
      <button
        onClick={onClose}
        className="text-[#9B9B9B] hover:text-[#F5F2EA] p-0.5"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </aside>
  );
};
