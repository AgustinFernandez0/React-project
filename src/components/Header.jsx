import React from "react";
import logo from "../assets/images/logo.jpeg"
import Head from "./Head";
import "../assets/css/index.css"

function Header(){
    return( 
    <div>
        <Head />
        <div className="nav-bar">
            <div className="logo"><a href="/"><img alt="logo" width="100px" src={logo}></img></a></div>
            <div className="burguer"><i className="fa-solid fa-bars"></i></div>    
            <div className="iconos">
            <a href="/productcart"><i className="fa-solid fa-cart-shopping" ></i></a>
            <i className="fa-solid fa-heart" ></i>
            <a href="/users/login"><i className="fa-solid fa-user-large" ></i></a>
            </div>
        </div>
        <ol className="barra-cat">
            <li><a href="/hombre">Hombre</a></li>
            <li><a href="/mujer">Mujer</a></li>
            <li><a href="/infantil">Infantil</a></li>
            <li><a href="/deporte">Deporte</a></li>
            <li><a href="/marca">Marca</a></li>
            <li><a href="/accesorios">Accesorios</a></li>        
        </ol>

    </div>
)};

export default Header;