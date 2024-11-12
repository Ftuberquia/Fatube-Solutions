import React from 'react';
import './About.css';
import ContactSocials from './ContactSocials';


const About = () => {
  return (
    <div className="about-container">
      <ContactSocials />
      <div className="about-content">
        <h1 className="services-title">Somos FatubeSolutions</h1>
        <h2>Sobre Nosotros</h2>
        <p>
          FatubeSolutions es una empresa innovadora y dinámica, fundada recientemente con la misión de transformar y optimizar soluciones tecnológicas en el mercado. Nuestro equipo joven y apasionado está decidido a superar desafíos y alcanzar nuevas alturas, siempre con un enfoque en la excelencia y el compromiso con nuestros clientes.
        </p>

        <h2>Misión</h2>
        <p>
          Nuestra misión es proporcionar soluciones tecnológicas de vanguardia que impulsen el crecimiento y la eficiencia de nuestros clientes. Nos esforzamos por ofrecer productos y servicios que no solo cumplan, sino que superen las expectativas, fomentando un entorno de innovación y mejora continua.
        </p>

        <h2>Visión</h2>
        <p>
          Nuestra visión es ser líderes en el sector de la tecnología, reconocidos por nuestra capacidad para adaptar y evolucionar en un mercado en constante cambio. Aspiramos a ser la primera opción para empresas que buscan soluciones tecnológicas integrales y personalizadas, contribuyendo significativamente a su éxito.
        </p>

        <h2>Valores</h2>
        <ul>
          <li><strong>Innovación:</strong> Fomentamos la creatividad y la búsqueda constante de nuevas ideas para mantenernos a la vanguardia.</li>
          <li><strong>Compromiso:</strong> Nos dedicamos a cumplir nuestras promesas y a trabajar con integridad y responsabilidad.</li>
          <li><strong>Colaboración:</strong> Creemos en la importancia del trabajo en equipo y en la construcción de relaciones sólidas y duraderas.</li>
          <li><strong>Excelencia:</strong> Nos esforzamos por alcanzar la más alta calidad en todo lo que hacemos.</li>
        </ul>

        <h2>Servicios</h2>
        <ul>
          <li>Desarrollo de Software Personalizado</li>
          <li>Consultoría Tecnológica</li>
          <li>Soluciones de Ciberseguridad</li>
          <li>Integración de Sistemas</li>
          <li>Soporte y Mantenimiento</li>
        </ul>
      </div>

    </div>
  );
};

export default About;

