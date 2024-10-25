import React from 'react';
import mailIcon from '../assets/iconoemail3d.png';
import whatsappIcon from '../assets/iconowhatsapp3d.png';
import facebookIcon from '../assets/iconofacebook3d.png';
import linkedinIcon from '../assets/logolinkedin.png';
import githubIcon from '../assets/logogithub.png';
import logo from '../assets/Fatube-logo.png'

import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container-contact">contactanos</div>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Fatube Logo" />
        </div>
        <div className="container-links">
          {/* <div className="contact-links">
            <a href="mailto:correo@example.com" className="icon-mail"><img src={mailIcon} alt="Correo" /></a>
            <a href="https://wa.me/1234567890" className="icon-whatsapp"><img src={whatsappIcon} alt="WhatsApp" /></a>
            <a href="https://facebook.com/tunombre" className="icon-facebook"><img src={facebookIcon} alt="Facebook" /></a>
            <a href="https://linkedin.com/in/tunombre" className="icon-linkedin"><img src={linkedinIcon} alt="LinkedIn" /></a>
            <a href="https://github.com/tunombre" className="icon-github"><img src={githubIcon} alt="GitHub" /></a>
          </div> */}
          <ul className="menu">
            <li><a href="#home">Inicio</a></li>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#contact">Contáctame</a></li>
            <li><a href="#about">Sobre Fatube</a></li>
            <li><a href="#portfolio">Portafolio</a></li>
          </ul>
        </div>
      </div>
      <div className="nav-container-contact">Paginas Web | Desarrollo aplicaciones | Sofotware empresarial | Consultoria Tegnologica | Ciberseguridad</div>
    </nav>
  );
};

export default Navbar;
