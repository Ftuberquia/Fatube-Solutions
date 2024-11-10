import React from "react";
import { SiGmail } from "react-icons/si";
import { FaFacebookSquare, FaWhatsappSquare, FaQuoteLeft, FaEnvelope, FaPhone } from "react-icons/fa";
import './ContactSocials.css';

const ContactSocials = () => {
    return (
        <div className="contact-socials">
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
            <div className="contact-tab">
                <div className="contact-buttons">
                    <button>
                        <FaQuoteLeft /> Cotizar
                    </button>
                    <button>
                        <FaEnvelope /> Contactar
                    </button>
                </div>
                <div className="contact-links">
                    <a href="mailto:info@fatubesolutions.com"><FaEnvelope /> Email</a>
                    <a href="tel:+123456789"><FaPhone /> Teléfono</a>
                </div>
            </div>
        </div>
    );
};

export default ContactSocials;
