import React, { useState } from 'react';
import logo from '../assets/Fatube-logo.png';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [showServices, setShowServices] = useState(false);

  const handleMouseEnter = () => {
    setShowServices(true);
  };

  const handleMouseLeave = () => {
    setShowServices(false);
  };

  return (
    <nav>
      <div className="nav-container-contact">Contactanos</div>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Fatube Logo" />
        </div>
        <div className="container-links">
          <ul className="menu">
            <li><a href="#home">Inicio</a></li>
            <li
              className="services-menu"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="#services">Servicios</Link>
              {showServices && (
                <div className="services-dropdown">
                  <ul>
                    <li><Link to="/servicios/diseno-web" target="_blank">Diseño de Páginas Web</Link></li>
                    <li><Link to="/servicios/hosting y mantenimiento" target="_blank">Hosting y mantenimiento</Link></li>
                    <li><Link to="/servicios/marketing digital" target="_blank">Marketing digital</Link></li>
                    <li><Link to="/servicios/diseño UX/UI" target="_blank">Diseño UX/UI</Link></li>
                    <li><Link to="/servicios/software-empresarial" target="_blank">Software Empresarial</Link></li>
                    <li><Link to="/servicios/consultoria" target="_blank">Consultoría Tecnológica</Link></li>
                    <li><Link to="/servicios/ciberseguridad" target="_blank">Ciberseguridad</Link></li>
                    <li><Link to="/servicios/analítica-de-datos" target="_blank">Analítica de datos</Link></li>
                    <li><Link to="/servicios/aplicaciones móviles" target="_blank">Aplicaciones móviles</Link></li>
                    <li><Link to="/servicios/desarrollo de video juegos" target="_blank">Desarrollo de video juegos</Link></li>
                    <li><Link to="/servicios/IoT (Internet de las Cosas)" target="_blank">IoT (Internet de las Cosas)</Link></li>
                    <li><Link to="/servicios/automatización-y-atención-al-cliente" target="_blank">Automatización y atención al cliente</Link></li>
                  </ul>
                </div>
              )}
            </li>
            <li><a href="#contact">Contáctar</a></li>
            <li><a href="#about">Sobre Fatube</a></li>
            <li><a href="#portfolio">Portafolio</a></li>
          </ul>
        </div>
      </div>
      <div className="nav-container-service">
        <a href="/servicios/diseno-web" target="_blank">Diseño de Páginas Web</a> |
        <a href="/servicios/software-empresarial" target="_blank">Software Empresarial</a> |
        <a href="/servicios/consultoria" target="_blank">Consultoría Tecnológica</a> |
        <a href="/servicios/ciberseguridad" target="_blank">Ciberseguridad</a> |
        <a href="/servicios/Analítica de datos" target="_blank">Analítica de datos</a> |
        <a href="/servicios/E-commerce" target="_blank">E-commerce</a> |
        <a href="/servicios/Automatización y atención al cliente" target="_blank">Automatización y atención al cliente</a>
      </div>
    </nav>
  );
};

export default Navbar;
