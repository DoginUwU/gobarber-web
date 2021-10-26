import React, { createContext, useCallback, useContext } from 'react';
import { v4 as uuid } from 'uuid';
import type { ToastMessage } from '../@types/toast';
import ToastContainer from '../components/ToastContainer';

interface ToastContextState {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(toastId: string): void;
}

const ToastContext = createContext<ToastContextState>({} as ToastContextState);

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = React.useState<ToastMessage[]>([]);

  const addToast = useCallback((message: Omit<ToastMessage, 'id'>) => {
    const id = uuid();

    const toast = {
      id,
      ...message,
    };

    setMessages(oldMessages => [...oldMessages, toast]);
  }, []);
  const removeToast = useCallback((toastId: string) => {
    setMessages(oldMessages =>
      oldMessages.filter(message => message.id !== toastId),
    );
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

const useToast = (): ToastContextState => {
  const context = useContext(ToastContext);

  if (!context) throw new Error('useToast must be used within a ToastProvider');

  return context;
};

export { ToastProvider, useToast };
