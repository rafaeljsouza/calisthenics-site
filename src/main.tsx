// Importa bibliotecas principais
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importa o componente principal e os estilos globais
import App from './App';
import './index.css';

// Renderiza o componente raiz "App" no elemento HTML com id "root"
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
