import React, { useState, useEffect } from 'react';
import { celulares } from '../data';

const carouselImages = [
  'https://example.com/carousel1.jpg',
  'https://example.com/carousel2.jpg',
  'https://example.com/carousel3.jpg'
];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [randomCelulares, setRandomCelulares] = useState([]);

  useEffect(() => {
    // Carousel image change every 3 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Select 6 random celulares
    const shuffled = [...celulares].sort(() => 0.5 - Math.random());
    setRandomCelulares(shuffled.slice(0, 6));
  }, []);

  return (
    <div>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <img
          src={carouselImages[currentImageIndex]}
          alt="Carousel"
          style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
        />
      </div>
      <h2>Bienvenidos a Celulares</h2>
      <p>Encuentra los mejores celulares de las marcas más reconocidas.</p>
      <h3>Celulares destacados</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
        {randomCelulares.map((celular) => (
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
};

export default Home;
