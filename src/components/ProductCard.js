import React, { useEffect, useState } from 'react';
import "./ProductCard.css"
import DefaultImage from "../assets/images/full/placeholder-image.png"
import { ProductModel } from '../configs/Default';


export default function ProductCard({
    product= ProductModel,
    onChange
}){
    const [onHover,setOnHover] = useState(false);

    useEffect(() => {
 
        return () => {
            console.log("Component will unmount");
        };
    }, []); 

    return (
        <div className="product-card-wrapper"
        onMouseOver={()=>{
           setOnHover(true)
        }}
        onMouseLeave={()=>{
            setOnHover(false)
        }}
        >
            <img className="product-thumbnail" src={DefaultImage}/>
            <div className="product-info-wrapper">
                <div className="product-title">{product.name}</div>
                <div className="product-price"> 
                    <div className="currency">RM </div>{product.price}
                </div>

                <div className='hover-wrapper'
                onClick={()=>{
                    onChange()
                }}
                style={{
                    display: onHover? "flex": "none"
                }}>
                    <h1> Add Item To Cart</h1>
                </div>

            </div>
        </div>
    );
}
