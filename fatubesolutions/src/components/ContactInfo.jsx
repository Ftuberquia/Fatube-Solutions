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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (value.length === 0) {
            setErrors({ ...errors, [name]: `${name} es un campo requerido.` });
        } else {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const handleServiciosChange = (e) => {
        const { value, checked } = e.target;
        setFormData((prevData) => {
            const servicios = checked
                ? [...prevData.servicios, value]
                : prevData.servicios.filter((servicio) => servicio !== value);
            return { ...prevData, servicios };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes enviar los datos a un servidor o guardarlos localmente
        console.log('Datos enviados:', formData);
        // Ejemplo: guardarlos en localStorage
        localStorage.setItem('formData', JSON.stringify(formData));
    };

    return (
        <div className="contact-info-container">
            <div className="presentation">
                <h2>Contactos FatubeSolutions</h2>
                <p>
                    ¡Hola! Estamos encantados de ayudarte a alcanzar tus objetivos. Nuestro equipo está listo para responder a todas tus preguntas y ofrecerte la asesoría que necesitas y soluciones personalizadas. ¡No dudes en contactarnos a través de nuestros medios o redes sociales, y empecemos a trabajar juntos para hacer realidad tus proyectos!
                </p>
            </div>

            <div className="contact-form-container">
                <div className="contact-form">
                    <h3>Contáctanos</h3>
                    <form onSubmit={handleSubmit}>

                        {["name", "country", "city", "email", "phone"].map((field) => (
                            <div key={field} className="form-group">
                                <input
                                    type="text"
                                    name={field}
                                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                                    value={formData[field]}
                                    onChange={handleChange}
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
                                        onChange={handleServiciosChange}
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
                                onChange={handleChange}
                            />
                            {errors.comments && <p className="error-text">{errors.comments}</p>}
                        </div>

                        <div className="form-group">
                            <label>Verificación Captcha</label>
                            <input
                                type="text"
                                name="captcha"
                                value={formData.captcha}
                                onChange={handleChange}
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
