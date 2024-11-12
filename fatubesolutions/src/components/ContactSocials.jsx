import React from "react";
import { SiGmail } from "react-icons/si";
import { FaFacebookSquare, FaWhatsappSquare, FaQuoteLeft, FaEnvelope, FaPhone, FaInstagramSquare, FaQuestionCircle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
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
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram">
                    <FaInstagramSquare className="social-icon" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="linkedin">
                    <FaLinkedin className="social-icon" />
                </a>
            </div>

            <div className="contact-tab">
                {/* Iconos visibles cuando está contraído */}
                <div className="icon-only">
                    <FaEnvelope />
                    <FaPhone />
                    <FaWhatsappSquare />
                    <FaQuoteLeft />
                    <FaQuestionCircle />
                </div>

                {/* Botones con descripción que aparecen al hacer hover */}
                <div className="contact-buttons">
                    <a href="mailto:info@fatubesolutions.com" target="_blank" rel="noopener noreferrer">
                        <FaEnvelope />
                        <span>Correo</span>
                    </a>
                    <a href="tel:+123456789" target="_blank" rel="noopener noreferrer">
                        <FaPhone />
                        <span>Teléfono</span>
                    </a>
                    <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer">
                        <FaWhatsappSquare />
                        <span>WhatsApp</span>
                    </a>
                    <a href="/cotizar" target="_blank" rel="noopener noreferrer">
                        <FaQuoteLeft />
                        <span>Cotizar</span>
                    </a>
                    <a href="/ayuda" target="_blank" rel="noopener noreferrer">
                        <FaQuestionCircle />
                        <span>Ayuda</span>
                    </a>
                </div>
            </div>

        </div>
    );
}

export default ContactSocials;
