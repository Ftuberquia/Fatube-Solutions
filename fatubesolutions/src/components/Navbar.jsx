import React, { useState } from 'react';
import logo from '../assets/Fatube-logo.png';
import { Link } from 'react-router-dom';
import { HiArrowCircleDown } from 'react-icons/hi';
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
            <li><Link to="/">Inicio</Link></li>
            <li
              className="services-menu"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/services">Servicios</Link>
              <HiArrowCircleDown style={{ marginLeft: '5px', color: '#f0d964', marginTop: '1px', cursor: 'pointer' }} />
              {showServices && (
                <div className="services-dropdown">
                  <ul>
                    <li><Link to="/services#diseno-web">Diseño de páginas web</Link></li>
                    <li><Link to="/services#desarrollo-aplicaciones-moviles">Desarrollo de aplicaciones móviles</Link></li>
                    <li><Link to="/services#software-empresarial">Desarrollo de software empresarial</Link></li>
                    <li><Link to="/services#desarrollo-videojuegos">Desarrollo de videojuegos</Link></li>
                    <li><Link to="/services#consultoria-tecnologia">Consultoría en tecnología</Link></li>
                    <li><Link to="/services#ciberseguridad">Ciberseguridad</Link></li>
                    <li><Link to="/services#analitica-datos">Analítica de datos</Link></li>
                    <li><Link to="/services#iot">IoT (Internet de las Cosas)</Link></li>
                    <li><Link to="/services#diseno-ux-ui">Diseño UX/UI</Link></li>
                    <li><Link to="/services#ecommerce">E-commerce</Link></li>
                    <li><Link to="/services#hosting-mantenimiento">Hosting y mantenimiento</Link></li>
                    <li><Link to="/services#marketing-digital">Marketing digital</Link></li>
                    <li><Link to="/services#automatizacion-atencion-cliente">Automatización y atención al cliente</Link></li>
                  </ul>
                </div>
              )}
            </li>
            <li><Link to="#contact">Contáctar</Link></li>
            <li><Link to="/about">Sobre Fatube</Link></li>
            <li><Link to="#portfolio">Portafolio</Link></li>
          </ul>
        </div>
      </div>
      {/* <div className="nav-container-service">
        <Link to="/servicios/diseno-web">Diseño de Páginas Web</Link> |
        <Link to="/servicios/software-empresarial">Software Empresarial</Link> |
        <Link to="/servicios/consultoria">Consultoría Tecnológica</Link> |
        <Link to="/servicios/ciberseguridad">Ciberseguridad</Link> |
        <Link to="/servicios/analitica-de-datos">Analítica de datos</Link> |
        <Link to="/servicios/e-commerce">E-commerce</Link> |
        <Link to="/servicios/automatizacion-y-atencion-al-cliente">Automatización y atención al cliente</Link>
      </div> */}
    </nav>
  );
};

export default Navbar;
