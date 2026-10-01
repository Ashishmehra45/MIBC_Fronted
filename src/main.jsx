import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './i18n';
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 🔴 2. App ko iske andar wrap kar */}
    <HelmetProvider> 
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)