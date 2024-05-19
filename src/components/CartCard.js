import React, { useState } from 'react';
import "./ProductCard.css";
import { ProductList } from '../configs/Default';
import "./CartCard.css";
import DefaultImage from "../assets/images/full/placeholder-image.png"

export default function CartCard({ products = ProductList }) {
    const [productCounts, setProductCounts] = useState(products.map(() => 1));

    const handleIncrement = (index) => {
        const newCounts = [...productCounts];
        newCounts[index] += 1;
        setProductCounts(newCounts);
    };

    const handleDecrement = (index) => {
        const newCounts = [...productCounts];
        if (newCounts[index] > 1) {
            newCounts[index] -= 1;
            setProductCounts(newCounts);
        }
    };

    return (
        <div className="cart-card-wrapper">
            {products.map((product, index) => (
                <div className="cart-item-wrapper" key={product.id}>
                    <img className="cart-item-thumbnail" src={product.imageUrl} alt={product.name} />
                    <div className="cart-item-details">
                        <h1>{product.name}</h1>
                        <h1 className="cart-price">RM {product.price}</h1>
                    </div>
                    <div className="cart-item-counter">
                            <button onClick={() => handleDecrement(index)}>-</button>
                            <span>{productCounts[index]}</span>
                            <button onClick={() => handleIncrement(index)}>+</button>
                        </div>
                </div>
            ))}
        </div>
    );
}
