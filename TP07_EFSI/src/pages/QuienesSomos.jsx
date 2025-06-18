import React from 'react';

const QuienesSomos = () => {
  return (
    <div>
      <h2>Quienes Somos</h2>
      <p>Somos una empresa líder en la venta de celulares, comprometidos con ofrecer los mejores productos y atención a nuestros clientes.</p>
      <h3>Nuestras oficinas comerciales</h3>
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
        <img src="https://example.com/oficina1.jpg" alt="Oficina 1" style={{ width: '300px', borderRadius: '8px' }} />
        <img src="https://example.com/oficina2.jpg" alt="Oficina 2" style={{ width: '300px', borderRadius: '8px' }} />
        <img src="https://example.com/oficina3.jpg" alt="Oficina 3" style={{ width: '300px', borderRadius: '8px' }} />
      </div>
    </div>
  );
};

export default QuienesSomos;
