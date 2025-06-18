import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { celulares, marcas } from '../data';

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
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {celular.fotos.map((foto, index) => (
          <img key={index} src={foto} alt={`${celular.nombre} ${index + 1}`} style={{ width: '200px', borderRadius: '8px' }} />
        ))}
      </div>
      <Link to={celular.marcaId ? `/productos/${celular.marcaId}` : '/productos'}>Volver a productos</Link>
    </div>
  );
};

export default ProductoDetalle;
