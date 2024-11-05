import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaFacebookSquare, FaWhatsappSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import './Services.css';

const servicesData = [
    { id: 'diseno-web', title: 'Diseño de páginas web', description: 'Somos una agencia de Diseño de páginas web a medida. Sabemos que cada cliente tiene necesidades y presupuestos diferentes, por este motivo hemos creado diferentes planes que se adaptarán a tu bolsillo.' },
    { id: 'desarrollo-aplicaciones-moviles', title: 'Desarrollo de aplicaciones móviles', description: 'Ofrecemos desarrollo de aplicaciones móviles personalizadas. Cada cliente tiene necesidades únicas, por lo que hemos diseñado distintos planes que se adaptan a diferentes presupuestos, garantizando la mejor relación calidad-precio.' },
    { id: 'software-empresarial', title: 'Desarrollo de software empresarial', description: 'Nos especializamos en el desarrollo de software empresarial a medida. Sabemos que cada empresa tiene sus propias necesidades y presupuestos, por lo que hemos creado planes flexibles para adaptarnos a tus requerimientos específicos y mejorar la eficiencia de tu negocio.' },
    { id: 'desarrollo-videojuegos', title: 'Desarrollo de videojuegos', description: 'Creamos videojuegos innovadores y atractivos. Cada proyecto es único, y nos adaptamos a las necesidades y presupuestos de nuestros clientes, proporcionando diferentes planes para que tu visión se haga realidad de la manera más asequible.' },
    { id: 'consultoria-tecnologia', title: 'Consultoría en tecnología', description: 'Ofrecemos servicios de consultoría tecnológica personalizados. Entendemos que cada negocio tiene necesidades y presupuestos distintos, por eso hemos diseñado diversos planes que se ajustan a tu situación particular, ayudándote a implementar las mejores soluciones tecnológicas.' },
    { id: 'ciberseguridad', title: 'Ciberseguridad', description: 'Nos especializamos en soluciones de ciberseguridad a medida. Sabemos que la seguridad de la información es crucial y que cada cliente tiene diferentes necesidades y presupuestos. Por eso, hemos desarrollado distintos planes que se adaptan a tus requerimientos específicos para proteger tus datos de manera eficaz.' },
    { id: 'analitica-datos', title: 'Analítica de datos', description: 'Ofrecemos soluciones de analítica de datos personalizadas. Cada cliente tiene necesidades específicas, por lo que hemos desarrollado diferentes planes que se ajustan a sus presupuestos, proporcionando insights valiosos para la toma de decisiones.' },
    { id: 'iot', title: 'IoT (Internet de las Cosas)', description: 'Desarrollamos e implementamos soluciones de IoT a medida. Entendemos que cada cliente tiene requerimientos únicos, por eso hemos creado diversos planes que se adaptan a distintos presupuestos y necesidades tecnológicas.' },
    { id: 'diseno-ux-ui', title: 'Diseño UX/UI', description: 'Creamos experiencias de usuario (UX) y interfaces de usuario (UI) que destacan. Adaptamos nuestros servicios a las necesidades y presupuestos de cada cliente, asegurando un diseño atractivo y funcional.' },
    { id: 'ecommerce', title: 'E-commerce', description: 'Ofrecemos soluciones integrales de comercio electrónico. Sabemos que cada negocio tiene sus propias necesidades y presupuestos, por lo que hemos diseñado planes flexibles que se ajustan a tus objetivos y recursos.' },
    { id: 'hosting-mantenimiento', title: 'Hosting y mantenimiento', description: 'Proveemos servicios de hosting y mantenimiento personalizados. Cada cliente tiene diferentes requerimientos y presupuestos, por lo que hemos desarrollado diversos planes que aseguran el mejor rendimiento y soporte para tus sistemas.' },
    { id: 'marketing-digital', title: 'Marketing digital', description: 'Desarrollamos estrategias de marketing digital personalizadas. Cada cliente tiene objetivos y presupuestos únicos, por lo que hemos creado distintos planes para maximizar tu presencia online de la manera más efectiva.' },
    { id: 'automatizacion-atencion-cliente', title: 'Automatización y atención al cliente', description: 'Implementamos soluciones de automatización para mejorar la atención al cliente. Sabemos que cada empresa tiene procesos y presupuestos diferentes, por eso hemos diseñado planes flexibles que se adaptan a tus necesidades, asegurando una atención al cliente eficiente y de alta calidad.' },
];

const Services = () => {
    const location = useLocation();

    useEffect(() => {
        const serviceId = location.hash.replace('#', '');
        if (serviceId) {
            const element = document.getElementById(serviceId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, [location]);

    return (
        <div className="services-container">
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

            <h1 className="services-title">Servicios FatubeSolutions</h1>
            <div className="services-cards">
                {servicesData.map(service => (
                    <div key={service.id} id={service.id} className="service-card">
                        <h2 className="service-title">{service.title}</h2>
                        <p className="service-description">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
