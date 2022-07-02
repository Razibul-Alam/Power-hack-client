import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'antd/dist/antd.css';
import ProviderWrapper from './Provider-Wrapper/ProviderWrapper';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProviderWrapper>
    <App />
    </ProviderWrapper>
   
  </React.StrictMode>
);

