import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { celulares, marcas } from '../data';

const Productos = () => {
  const { idMarca } = useParams();

  const filteredCelulares = idMarca
    ? celulares.filter(celular => celular.marcaId === parseInt(idMarca))
    : celulares;

  const marcaNombre = idMarca
    ? marcas.find(marca => marca.id === parseInt(idMarca))?.nombre
    : null;

  return (
    <div>
      <h2>Productos {marcaNombre ? `- ${marcaNombre}` : ''}</h2>
      {filteredCelulares.length === 0 ? (
        <p>No hay celulares de esta marca</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
          {filteredCelulares.map(celular => (
            <div key={celular.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px', width: 'calc(33% - 10px)' }}>
              <Link to={`/producto/${celular.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src={celular.fotos[0]} alt={celular.nombre} style={{ width: '100%', borderRadius: '4px' }} />
                <h4>{celular.nombre}</h4>
                <p>{celular.descripcion}</p>
                <p><strong>Precio:</strong> ${celular.precio}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Productos;
