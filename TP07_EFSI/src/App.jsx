import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import QuienesSomos from './pages/QuienesSomos';
import Productos from './pages/Productos';
import ProductoDetalle from './pages/ProductoDetalle';
import Contacto from './pages/Contacto';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="quienes-somos" element={<QuienesSomos />} />
          <Route path="productos" element={<Productos />} />
          <Route path="productos/:idMarca" element={<Productos />} />
          <Route path="producto/:idCelular" element={<ProductoDetalle />} />
          <Route path="contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
