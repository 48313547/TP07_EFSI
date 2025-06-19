import React from 'react';
import { celulares } from '../data';

function Home() {

  const destacados = celulares.slice(0, 6);

  return (
    <div>
      <h2>Bienvenidos a MUSIMUNDO</h2>
      <p>Encuentra los mejores celulares de las marcas más conocidas.</p>
      <h3>Celulares </h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
        {destacados.map((celular) => (
          <div key={celular.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px', width: 'calc(33% - 10px)' }}>
            <img src={celular.fotos[0]} alt={celular.nombre} style={{ width: '100%', borderRadius: '4px' }} />
            <h4>{celular.nombre}</h4>
            <p>{celular.descripcion}</p>
            <p><strong>Precio:</strong> ${celular.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
