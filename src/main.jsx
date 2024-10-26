/* Node modules */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

/* Components */
import App from './App';
import './index.css';

/* Render the App component */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
