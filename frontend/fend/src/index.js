import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Load Tailwind styles
import App from './App';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container); // Use createRoot as per React 18+
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (e.g., reportWebVitals(console.log))
// Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
