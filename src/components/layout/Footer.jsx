import React from 'react';
import Input from '../Pages/Register/Input';
import Icons from './Icons';
import { Link } from 'react-router-dom';
import './Footer.scss';

function Footer(props) {
    return (
        <div className="footer">
            <div className="contact">
                <h3>NECESITAS AYUDA?</h3>
                <h4>0264 123 4567</h4>
                <h4>enquiry@geekshubstravels.com</h4>
                <small>Lun-Vie. 9:30 - 19:00 Sab: 10:00 - 14:00</small>
            </div>
            <div className="information">
                <h3>INFORMACIÓN</h3>
                <Link className="footer-link">Quienes somos</Link>
                <Link className="footer-link">Preguntas frecuentes</Link>
                <Link className="footer-link">Política de privacidad</Link>
                <Link className="footer-link">Condiciones generales</Link>
                <Link className="footer-link">Aviso legal</Link>
                <Link className="footer-link">Contacto</Link>
                <Link className="footer-link">Programa de puntos</Link>
            </div>
            <div className="newsletter">
                <h3>SUSCRÍEBETE A LA NEWSLETTER</h3>
                <Input type="email" placeholder="Correo electrónico" />
                <Input className="suscribe-button" type="submit" value="Suscribirse" />
                <button className="button">SUSCRÍBETE</button>
                <Icons />
            </div>
            <div className="copy">
                <hr></hr>
                <small>GeeksHubs Travels 2018 Todos los derechos reservados.</small>
            </div>
        </div>
    );
}

export default Footer;