
import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { ProductList } from '../configs/Default';
import "./ProductPage.css";
import CartIcon from "../assets/images/full/cart_icon.svg";

export default function ProductPage() {
    const [productList, setProductList] = useState(ProductList);
    const [selectedProducts, addProducts] = useState([]);

    const handleProductSelect = (product) => {
        addProducts(prevSelectedProducts => [...prevSelectedProducts, product]);
        localStorage.setItem("cart", JSON.stringify(selectedProducts));
    };

    useEffect(() => {
        console.log(selectedProducts);
        return () => {
            console.log(selectedProducts);
            console.log("Component will unmount");
        };
    }, []); 

    return (
        <div className="product-page-background">
            <div className="header-wrapper">
                <h1>Product List</h1>
                <div className="cart-icon-wrapper">
                    <div className="cart-icon">
                        <img src={CartIcon} alt="Cart" />
                        {selectedProducts.length > 0 && (
                            <div className="cart-counter">{selectedProducts.length}</div>
                        )}
                    </div>
                </div>
            </div>
     
            <div className="product-container">
                {productList.map((product, i) => (
                    <ProductCard 
                        key={product.id}
                        product={product}
                        onChange={() => handleProductSelect(product)}
                    />
                ))}
            </div>
           
        </div>
    );
}

