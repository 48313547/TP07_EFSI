import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/';
import Home from './pages/home/';
import QuienesSomos from './pages/quienesSomos/';
import Productos from './pages/productos/';
import ProductoDetalle from './pages/productosDetalle/';
import Contacto from './pages/contacto/Contacto';
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
