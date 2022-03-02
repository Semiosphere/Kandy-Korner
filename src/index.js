import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { KandyKorner } from './components/KandyKorner';
import reportWebVitals from './reportWebVitals';
import { LocationList } from './components/locations/LocationList'
import { ProductList } from './components/products/ProductList'

ReactDOM.render(
  <React.StrictMode>
    <KandyKorner />
    <LocationList />
    <ProductList />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
