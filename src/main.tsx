import { createRoot } from 'react-dom/client'
import App from './app'
import './styles/index.css';
import React from 'react';
import { ThemeProvider } from './components/providers/theme-provider';
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider defaultTheme="dark">
       <App />
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
