import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import CounterProvider from './CounterProvider';

import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterProvider>
      <App />
    </CounterProvider>
  </StrictMode>
);
