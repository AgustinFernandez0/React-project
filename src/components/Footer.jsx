import React from "react";
import Head from "./Head";



function Footer(){
    return(
        <div className="contenedor-footer">
            <Head />
            <div className="telefonos-contacto">
                <div className="contacto"><span><i className="fa-solid fa-phone"></i></span> 0800-111-1234</div>
                <div className="contacto"><span><i className="fa-brands fa-whatsapp"></i></span> +54 9 11 1234-5678</div>
            </div>       
        
            <div className="bottom">
                <details className="atencion-cliente">
                    <summary>
                       <b>Horarios de atencion al cliente</b>
                    </summary>
                    <ul className="inside-summary">
                        <li><p>Lunes a viernes de 08:30hs a 18:30hs.</p></li>
                        <li><p>Sabados de 09hs a 17.30hs</p></li>
                    </ul>
                </details>
                <details className="aboutus">
                    <summary>
                        <b>Sobre Nosotros</b>
                    </summary>
                    <article className="inside-summary">
                        Somos una empresa ficticia creada a partir de un grupo de estudiantes de DigitalHouse. Nuestro propósito es crear una página con una interfaz gráfica y experiencia
                        agradable al usuario, dándole mucha importancia a la operabilidad y funcionalidad del proyecto.
                    </article>
                </details>
            </div>
            <div className="redes">
                <i className="fa-brands fa-instagram fa-2xl"></i>
                <i className="fa-brands fa-facebook fa-2xl"></i>
                <i className="fa-brands fa-twitter fa-2xl"></i>
            </div>
            <p className="copyright">@copyright 2022 DH sports</p>
        </div>
    )
};

export default Footer;