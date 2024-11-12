import React, { useState } from 'react';
import './ContactInfo.css';

function ContactInfo() {
    const [formData, setFormData] = useState({
        name: '',
        country: '',
        city: '',
        email: '',
        phone: '',
        service: [],
        comments: '',
        captcha: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        country: '',
        city: '',
        email: '',
        phone: '',
        comments: '',
    });

    const services = [
        "Desarrollo de Software Personalizado",
        "Consultoría Tecnológica",
        "Soluciones de Ciberseguridad",
        "Integración de Sistemas",
        "Soporte y Mantenimiento"
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (value.length === 0) {
            setErrors({ ...errors, [name]: `${name} es un campo requerido.` });
        } else {
            setErrors({ ...errors, [name]: '' });
        }
    };

    return (
        <div className="contact-info-container">
            <div className="presentation">
                <h2>En FatubeSolutions…</h2>
                <p>
                    Estamos aquí para responder a todas tus preguntas y brindarte la asesoría que necesitas. Ya sea que estés interesado en nuestros servicios, estamos listos para ofrecerte soluciones personalizadas.
                </p>
            </div>

            <div className="contact-form-container">
                <div className="contact-form">
                    <h3>Contáctanos</h3>
                    <form>
                        {["name", "country", "city", "email", "phone"].map((field) => (
                            <div key={field} className="form-group">
                                <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                                <input
                                    type="text"
                                    name={field}
                                    value={formData[field]}
                                    onChange={handleInputChange}
                                    required
                                />
                                {errors[field] && <p className="error-text">{errors[field]}</p>}
                            </div>
                        ))}

                        <div className="form-group">
                            <label>Servicios</label>
                            {services.map((service, index) => (
                                <div key={index} className="checkbox-group">
                                    <input
                                        type="checkbox"
                                        name="service"
                                        value={service}
                                        onChange={handleInputChange}
                                    />
                                    <span>{service}</span>
                                </div>
                            ))}
                        </div>

                        <div className="form-group">
                            <label>Comentarios Adicionales</label>
                            <textarea
                                name="comments"
                                value={formData.comments}
                                onChange={handleInputChange}
                            />
                            {errors.comments && <p className="error-text">{errors.comments}</p>}
                        </div>

                        <div className="form-group">
                            <label>Verificación Captcha</label>
                            <input
                                type="text"
                                name="captcha"
                                value={formData.captcha}
                                onChange={handleInputChange}
                            />
                            {errors.captcha && <p className="error-text">{errors.captcha}</p>}
                        </div>

                        <button type="submit">Enviar</button>
                    </form>
                </div>

                <div className="contact-info">
                    <div className="info-card">
                        <h4>Ubicación</h4>
                        <p>Medellín, Colombia</p>
                    </div>
                    <div className="info-card">
                        <h4>Horario de Atención</h4>
                        <p>Lunes a Viernes, 9 AM - 6 PM</p>
                    </div>
                    <div className="info-card">
                        <h4>Contáctanos</h4>
                        <ul>
                            <li>Email: contacto@fatubesolutions.com</li>
                            <li>WhatsApp: +57 123 456 7890</li>
                            <li>Teléfono: +57 123 456 7890</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactInfo;
