import React, { useState } from 'react';
import "./ProductCard.css";
import "./CartCard.css";
import DefaultImage from "../assets/images/full/placeholder-image.png";
import DeleteIcon from "../assets/images/full/delete_icon.svg";
export default function CartCard({ product, onChange, onRemove }) {
    // State to hold the quantity for each product
    const [productQuantity, setProductQuantity] = useState(product.quantity);

    // Function to handle incrementing the quantity for a specific product
    const handleIncrement = (product) => {
        const maxStock = product.stock;
        // Check if incrementing exceeds the maximum stock
        if (productQuantity < maxStock) {
            setProductQuantity(productQuantity + 1);
            onChange(product, "add")
        }
    };

    // Function to handle decrementing the quantity for a specific product
    const handleDecrement = (product) => {
        // Check if decrementing would result in a quantity less than 1
        if (productQuantity > 0) {
            setProductQuantity(productQuantity - 1);
            onChange(product, "remove")
        }  
    };

    const handleDelete = () => {
        onChange(product, "delete");
    };

    return (
        <div className="cart-card-wrapper">
            <div className="cart-item-wrapper" key={product.id}>
                <img className="cart-item-thumbnail" src={product.imageUrl || DefaultImage} alt={product.name} />
                <div className="cart-item-details">
                    <h1>{product.name}</h1>
                    <h1 className="cart-price">RM {product.price}</h1>
                </div>
                
            </div>
            <div className='bottom-card-wrapper'>
                <img src={DeleteIcon} onClick={handleDelete}/>
                <div className="cart-item-counter">
                        <button className="quantity-button" style={{
                            borderRadius:"12px 0px 0px 12px"
                        }} onClick={()=>handleDecrement(product)}>-</button>
                        <span>{productQuantity}</span>
                        <button className="quantity-button"  style={{
                            borderRadius:"0px 12px 12px 0px"
                        }}onClick={()=>handleIncrement(product)}>+</button>
                    </div>
            </div>
        </div>
    );
}