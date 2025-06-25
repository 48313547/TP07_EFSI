import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { celulares, marcas } from '../../data';
import './ProductoDetalle.css';

const ProductoDetalle = () => {
  const { idCelular } = useParams();
  const celular = celulares.find(c => c.id === parseInt(idCelular));

  if (!celular) {
    return <p>Celular no encontrado.</p>;
  }

  const marca = marcas.find(m => m.id === celular.marcaId);

  return (
    <div>
      <h2>{celular.nombre}</h2>
      <p><strong>Marca:</strong> {marca ? marca.nombre : 'Desconocida'}</p>
      <p>{celular.descripcion}</p>
      <p><strong>Precio:</strong> ${celular.precio}</p>
      <div className="fotos-container">
        {celular.fotos.map((foto, index) => (
          <img key={index} src={foto} alt={`${celular.nombre} ${index + 1}`} className="foto-image" />
        ))}
      </div>
      <Link to={celular.marcaId ? `/productos/${celular.marcaId}` : '/productos'}>Volver a productos</Link>
    </div>
  );
};

export default ProductoDetalle;
