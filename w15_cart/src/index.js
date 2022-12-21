import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App_80 from './App_80';
import { AppProvider_80 } from './Context_80';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider_80>
    <App_80 />
    </AppProvider_80>
  </React.StrictMode>
);
