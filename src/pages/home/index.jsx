import React from 'react';
import { celulares } from '../../data';
import CelularCard from '../../components/celularCard';
import './Home.css';

function Home() {

  const destacados = celulares.slice(0, 6);

  return (
    <div>
      <h2>Bienvenidos a MUSIMUNDO</h2>
      <p>Encuentra los mejores celulares de las marcas más conocidas.</p>
      <h3>Celulares </h3>
      <div className="celulares-container">
        {destacados.map((celular) => (
          <CelularCard key={celular.id} celular={celular} />
        ))}
      </div>
    </div>
  );
}

export default Home;
