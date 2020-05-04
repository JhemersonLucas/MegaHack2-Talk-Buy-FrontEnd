import React from 'react';
import { ToastProvider } from './Toast';
import { GlobalProvider } from './Global';

const AppProvider: React.FC = ({ children }) => (
  <GlobalProvider>
    <ToastProvider>{children}</ToastProvider>
  </GlobalProvider>
);

export default AppProvider;
