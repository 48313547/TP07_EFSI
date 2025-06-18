import React, { useState } from 'react';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulario enviado (simulado). Gracias por contactarnos.');
  };

  return (
    <div>
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <label>
          Nombre:
          <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Mensaje:
          <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} required />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;
