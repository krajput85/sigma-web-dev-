import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Optional: if you use custom styles
import App from './App';

// React 18+ root API
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
