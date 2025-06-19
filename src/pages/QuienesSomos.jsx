import React from 'react';

const QuienesSomos = () => {
  return (
    <div>
      <h2>Quienes Somos</h2>
      <p>Somos una empresa que vende celulares y electrodomesticos</p>
      <h3>Nuestras oficinas </h3>
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
        <img src="https://resizer.iproimg.com/unsafe/1280x/filters:format(webp):quality(85):max_bytes(102400)/https://assets.iprofesional.com/assets/jpeg/2024/07/580547.jpeg" alt="Oficina 1" style={{ width: '300px', borderRadius: '8px' }} />
        <img src="https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2016/07/14152407/1219.jpg" alt="Oficina 2" style={{ width: '300px', borderRadius: '8px' }} />
        <img src="https://media.ambito.com/p/49f0cf12a2baabafb61786d078b984fa/adjuntos/239/imagenes/039/394/0039394560/1200x675/smart/pag10-musimundo_optjpeg.jpeg" alt="Oficina 3" style={{ width: '300px', borderRadius: '8px' }} />
      </div>
    </div>
  );
};

export default QuienesSomos;
