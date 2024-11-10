import React, { useState, useEffect } from 'react';
import { FaFacebookSquare, FaWhatsappSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaQuoteLeft, FaEnvelope, FaPhone } from 'react-icons/fa';

import './Home.css';

const slides = [
  {
    title: 'Diseño de páginas web',
    description: 'Somos una agencia de Diseño de páginas web a medida. Sabemos que cada cliente tiene necesidades y presupuestos diferentes, por este motivo hemos creado diferentes planes que se adaptarán a tu bolsillo.',
  },
  {
    title: 'Desarrollo de aplicaciones móviles',
    description: 'Ofrecemos desarrollo de aplicaciones móviles personalizadas. Cada cliente tiene necesidades únicas, por lo que hemos diseñado distintos planes que se adaptan a diferentes presupuestos, garantizando la mejor relación calidad-precio.',
  },
  {
    title: 'Desarrollo de software empresarial',
    description: 'Nos especializamos en el desarrollo de software empresarial a medida. Sabemos que cada empresa tiene sus propias necesidades y presupuestos, por lo que hemos creado planes flexibles para adaptarnos a tus requerimientos específicos y mejorar la eficiencia de tu negocio.',
  },
  {
    title: 'Marketing digital',
    description: 'Desarrollamos estrategias de marketing digital personalizadas. Cada cliente tiene objetivos y presupuestos únicos, por lo que hemos creado distintos planes para maximizar tu presencia online de la manera más efectiva.',
  },
  {
    title: 'Consultoría en tecnología',
    description: 'Ofrecemos servicios de consultoría tecnológica personalizados. Entendemos que cada negocio tiene necesidades y presupuestos distintos, por eso hemos diseñado diversos planes que se ajustan a tu situación particular, ayudándote a implementar las mejores soluciones tecnológicas.',
  },
  {
    title: 'Ciberseguridad',
    description: 'Nos especializamos en soluciones de ciberseguridad a medida. Sabemos que la seguridad de la información es crucial y que cada cliente tiene diferentes necesidades y presupuestos. Por eso, hemos desarrollado distintos planes que se adaptan a tus requerimientos específicos para proteger tus datos de manera eficaz.',
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="home-section">
      <div className="social-icons">
        <a href="mailto:tucorreo@correo.com" target="_blank" rel="noopener noreferrer" className="gmail">
          <SiGmail className="social-icon" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="facebook">
          <FaFacebookSquare className="social-icon" />
        </a>
        <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer" className="whatsapp">
          <FaWhatsappSquare className="social-icon" />
        </a>
      </div>
      <h1 className="services-title">Bienvenidos a FatubeSolutions</h1>
      <div className="slide-section">
        <div className="card-presentation">
          <h1>Elige! FatubeSolutions como tu proveedor de servicios tecnológicos</h1>
          <p>En FatubeSolutions, contamos con un equipo de expertos y especialistas en tecnología y servicios informáticos, con una sólida experiencia en gestionar soluciones de TI para empresas. Nuestro objetivo es ofrecer soluciones integrales y personalizadas que generen un verdadero valor agregado, optimizando recursos y aumentando la rentabilidad de tu empresa. Por ello, nos destacamos por:</p>
          <p>Experiencia, Alta calidad, Flexibilidad, Puntualidad, Confidencialidad</p>
        </div>
        <div className="slider">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
            >
              <div className="card-service">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
      <div className="contact-tab">
        <div className="contact-buttons">
          <button>
            <FaQuoteLeft /> Cotizar
          </button>
          <button>
            <FaEnvelope /> Contactar
          </button>
          <div className="contact-links">
            <a href="mailto:info@fatubesolutions.com"><FaEnvelope /> Email</a>
            <a href="tel:+123456789"><FaPhone /> Teléfono</a>
          </div>
        </div>
      </div>

      <div className="boton-cotiz">Cotizacion</div>
    </section>
  );
};

export default Home;
