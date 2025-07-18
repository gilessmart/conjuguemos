import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App.tsx';
import './main.css';

const base = typeof import.meta.env.VITE_BASE_PATH == "string"
  ? import.meta.env.VITE_BASE_PATH
  : undefined;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={base}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
