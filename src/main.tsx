import { createRoot } from 'react-dom/client'
import App from './app'
import './styles/index.css';
import React from 'react';
import { ThemeProvider } from './components/providers/theme-provider';


createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark">
       <App />
    </ThemeProvider>
  </React.StrictMode>
)
