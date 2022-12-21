import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App_80 from './App_80';
import {BlogContextProvider_80} from './BlogContext_80';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BlogContextProvider_80>
      <App_80 />
    </BlogContextProvider_80>
  </React.StrictMode>
);
