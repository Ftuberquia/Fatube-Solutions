import React from 'react';
// import mailIcon from '../assets/mail.png';
// import whatsappIcon from '../assets/whatsapp.png';
// import facebookIcon from '../assets/facebook.png';
import linkedinIcon from '../assets/logolinkedin.png';
import githubIcon from '../assets/logogithub.png';
import logo from '../assets/Fatube-logo.png'

import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Fatube Logo" />
        </div>
        <div className="container-links">
          <div className="contact-links">
            {/* <a href="mailto:correo@example.com"><img src={mailIcon} alt="Correo" /></a>
            <a href="https://wa.me/1234567890"><img src={whatsappIcon} alt="WhatsApp" /></a>
            <a href="https://facebook.com/tunombre"><img src={facebookIcon} alt="Facebook" /></a> */}
            <a href="https://linkedin.com/in/tunombre"><img src={linkedinIcon} alt="LinkedIn" /></a>
            <a href="https://github.com/tunombre"><img src={githubIcon} alt="GitHub" /></a>
          </div>
          <ul className="menu">
            <li><a href="#home">Inicio</a></li>
            <li><a href="#about">Sobre Mí</a></li>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#portfolio">Portafolio</a></li>
            <li><a href="#contact">Contáctame</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
