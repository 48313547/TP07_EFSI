import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { marcas } from '../data';
import './Layout.css';

const Layout = () => {
  return (
    <>
      <header>
        <div>
          <Link to="/" className="logo">
            Celulares
          </Link>
          <nav>
            <ul>
              <li>
                <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/quienes-somos" className={({ isActive }) => (isActive ? 'active' : '')}>
                  Quienes somos
                </NavLink>
              </li>
              <li>
                <span className="dropdown-label">Productos ▼</span>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink to="/productos" className={({ isActive }) => (isActive ? 'active' : '')}>
                      Ver todos
                    </NavLink>
                  </li>
                  {marcas.map(marca => (
                    <li key={marca.id}>
                      <NavLink to={`/productos/${marca.id}`} className={({ isActive }) => (isActive ? 'active' : '')}>
                        {marca.nombre}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <NavLink to="/contacto" className={({ isActive }) => (isActive ? 'active' : '')}>
                  Contacto
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        &copy; {new Date().getFullYear()} Celulares. Todos los derechos reservados.
      </footer>
    </>
  );
};

export default Layout;
