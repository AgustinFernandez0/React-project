import React from "react";
import botinesrugby from "../assets/images/products/botines-rugby-imagen3.jpeg"
import "../assets/css/index.css"


function Product(){
    return(
        <div>
            <h2 className="titulo">Popular</h2>
                    <button type="submit" className="ver-todo"><a href="./products" >Ver todo</a>  <i className="fa-solid fa-arrow-right"></i></button>
                    <div className="articulos"> 
                        <a href="./products/detail/{}">
                            <div className="contenedor-art">
                                <img width="250px" height="290px" alt="product" src={botinesrugby}></img>
                                <p className="nombre-art">Botines de Rugby</p>
                                <div className="descrip-art">
                                    <div className="precio">40.000</div> 
                                        <div className="descuento"> OFF</div>                                                           
                                    <span><i className="fa-regular fa-heart fa-2xl"></i></span>
                                </div>
                            </div>
                        </a>             
                    </div>  
        </div>
    )
}

export default Product;