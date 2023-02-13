import React from "react";
import banner from "../assets/images/banner.jpg"
//import botinesrugby from "../assets/images/products/botines-rugby-imagen3.jpeg"
import Product from "./Product";
import ProductOffer from "./ProfuctOffer";


function Body(){
    return(
        <div>
                <img className="banner" width="100%" src={banner} alt="banner"></img>
                <div className="categorias">
                    <div className="start-icon"><i className="fa-solid fa-futbol fa-border fa-2xl"></i></div>
                    <div className="start-icon"><i className="fa-solid fa-basketball fa-border fa-2xl" ></i></div>
                    <div className="start-icon"><i className="fa-solid fa-football fa-border fa-2xl" ></i></div>
                    <div className="start-icon"><i className="fa-solid fa-baseball fa-border fa-2xl" ></i></div>
                </div>

                <main>
                    <Product />
                    <ProductOffer />
                      
                </main>
        </div>
    )
};

export default Body; 