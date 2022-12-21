import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App_80 from './App_80';
import { MenuContext } from './MenuContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MenuContext>
    <App_80 />
    </MenuContext>
  </React.StrictMode>
);

