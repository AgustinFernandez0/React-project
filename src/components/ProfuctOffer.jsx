import React from "react";
import pelota from "../assets/images/products/pelota-imagen3.jpg"

function ProductOffer(){
    return(
        <div>
            <h2 className="titulo">Ofertas</h2>
                    <button type="submit" className="ver-todo"><a href="./products" >Ver todo</a>  <i className="fa-solid fa-arrow-right"></i></button>
                                    
                    <div className="articulos">
                            <a href="./products/detail/pelota">
                                <div className="contenedor-art">
                                    <img width="250px" alt="imagen" height="290px" src={pelota}></img>
                                        <p className="nombre-art">Pelota Al rhila</p>
                                    <div className="descrip-art">
                                        <p className="precio">$32.000</p>
                                            <div className="descuento">10% OFF</div>
                                        <span><i className="fa-regular fa-heart fa-2xl"></i></span>
                                    </div>
                                </div>
                            </a>
                    </div>

        </div>
    )
}

export default ProductOffer;