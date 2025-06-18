import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { marcas } from '../data';

const Layout = () => {
  return (
    <>
      <header style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link to="/" style={{ fontWeight: 'bold', fontSize: '24px', textDecoration: 'none' }}>
            Celulares
          </Link>
          <nav>
            <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', margin: 0, padding: 0 }}>
              <li>
                <NavLink to="/" end style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/quienes-somos" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
                  Quienes somos
                </NavLink>
              </li>
              <li style={{ position: 'relative' }}>
                <span style={{ cursor: 'pointer', fontWeight: 'bold' }}>Productos ▼</span>
                <ul style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  backgroundColor: 'white',
                  border: '1px solid #ccc',
                  padding: '5px 10px',
                  margin: 0,
                  listStyle: 'none',
                  minWidth: '150px',
                  zIndex: 1000,
                  display: 'none'
                }}
                className="dropdown-menu"
                >
                  <li>
                    <NavLink to="/productos" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal', display: 'block', padding: '5px 0' })}>
                      Ver todos
                    </NavLink>
                  </li>
                  {marcas.map(marca => (
                    <li key={marca.id}>
                      <NavLink to={`/productos/${marca.id}`} style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal', display: 'block', padding: '5px 0' })}>
                        {marca.nombre}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <NavLink to="/contacto" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
                  Contacto
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main style={{ padding: '20px' }}>
        <Outlet />
      </main>
      <footer style={{ padding: '10px', borderTop: '1px solid #ccc', textAlign: 'center' }}>
        &copy; {new Date().getFullYear()} Celulares. Todos los derechos reservados.
      </footer>

      <style>{`
        header nav ul li:hover > ul.dropdown-menu {
          display: block;
        }
      `}</style>
    </>
  );
};

export default Layout;
