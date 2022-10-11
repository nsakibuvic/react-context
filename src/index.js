import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import ProductsProvider from './context/context-store'


ReactDOM.render(
   <ProductsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ProductsProvider>,
  document.getElementById('root')
);
