import React, { useState, useEffect } from 'react';
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
  // {
  //   title: 'Desarrollo de videojuegos',
  //   description: 'Creamos videojuegos innovadores y atractivos. Cada proyecto es único, y nos adaptamos a las necesidades y presupuestos de nuestros clientes, proporcionando diferentes planes para que tu visión se haga realidad de la manera más asequible.',
  // },
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
    }, 5000); // Cambia de slide cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="home-section">
      <div className="slide-section">
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
        <div className="card-sale">
          <h1>Promosiones</h1>
        </div>
        </div>
        <div className="boton-cotiz">Cotizacion</div>
    </section>
  );
};

export default Home;
