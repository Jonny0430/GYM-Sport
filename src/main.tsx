import { createRoot } from 'react-dom/client'
import App from './app'
import './styles/index.css';
import React from 'react';
import { ThemeProvider } from './components/providers/theme-provider';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './components/providers/auth-provider';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const quryClient = new QueryClient()


createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <QueryClientProvider client={quryClient}>
    <ThemeProvider defaultTheme="dark">
      <AuthProvider>
          <App />
      </AuthProvider>
    </ThemeProvider>
    </QueryClientProvider>  
    </BrowserRouter>
  </React.StrictMode>
)
