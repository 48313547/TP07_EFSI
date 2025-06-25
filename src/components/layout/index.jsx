import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { marcas } from "../../data";
import "./Layout.css";

const getActiveClass = ({ isActive }) => (isActive ? "active" : "");

const Layout = () => {
  return (
    <>
      <header>
        <div className="header-container">
          <div>
          <Link to="/" className="logo">
            MUSIMUNDO
          </Link>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to="/" end className={getActiveClass}>
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink to="/quienes-somos" className={getActiveClass}>
                  Quienes somos?
                </NavLink>
              </li>
              <li className="dropdown">
                <span className="dropdown-label">Productos ▼</span>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink to="/productos" className={getActiveClass}>
                      Todos
                    </NavLink>
                  </li>
                  {marcas.map((marca) => (
                    <li key={marca.id}>
                      <NavLink
                        to={`/productos/${marca.id}`}
                        className={getActiveClass}
                      >
                        {marca.nombre}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>

              <li>
                <NavLink to="/contacto" className={getActiveClass}>
                  Contactanos
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
        &copy; {new Date().getFullYear()} MUSIMUNDO SA. Todos los derechos
        reservados.
      </footer>
    </>
  );
};

export default Layout;
