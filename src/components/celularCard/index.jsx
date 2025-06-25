import React from 'react';
import './CelularCard.css';

const CelularCard = ({ celular }) => {
  return (
    <div className="celular-card">
      <img src={celular.fotos[0]} alt={celular.nombre} className="celular-image" />
      <h4>{celular.nombre}</h4>
      <p>{celular.descripcion}</p>
      <p><strong>Precio:</strong> ${celular.precio}</p>
    </div>
  );
};

export default CelularCard;
