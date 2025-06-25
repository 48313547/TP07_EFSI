import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { celulares, marcas } from '../../data';
import './Productos.css';

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
        <div className="productos-container">
          {filteredCelulares.map(celular => (
            <div key={celular.id} className="producto-card">
              <Link to={`/producto/${celular.id}`} className="producto-link">
                <img src={celular.fotos[0]} alt={celular.nombre} className="producto-image" />
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
