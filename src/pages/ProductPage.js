import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { ProductList } from '../configs/Default';
import "./ProductPage.css";
import CartIcon from "../assets/images/full/cart_icon.svg";
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ProductPage() {
    const [productList, setProductList] = useState(ProductList);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const navigate = useNavigate();
    const notify = () => toast("Added Item To Cart");

    const handleProductSelect = (product) => {
        notify()
        let selectedProductsCopy = [...selectedProducts];
        let productInCart = selectedProductsCopy.find(p => p.id === product.id);

        if (productInCart) {
            productInCart.quantity += 1;
        } else {
            selectedProductsCopy.push({ ...product, quantity: 1 });
        }

        setSelectedProducts(selectedProductsCopy);
        localStorage.setItem("cart", JSON.stringify(selectedProductsCopy));
    };



    useEffect(() => {
        if (localStorage.getItem("cart")) {
            let cachedCart = JSON.parse(localStorage.getItem("cart"));
            setSelectedProducts(cachedCart);
        }
        return () => {
            console.log("Component will unmount");
        };
    }, []);

    return (
        <div className="product-page-background">
            <div className="header-wrapper" style={{
                position:"fixed",
                background:"white",
                zIndex:2
                
            }}>
                <h1>Product List</h1>
                <div className="cart-icon-wrapper">
                    <div className="cart-icon" onClick={() => {
                        navigate("/cart")
                    }}>
                        <img src={CartIcon} alt="Cart" />
                        {selectedProducts.length > 0 && (
                            <div className="cart-counter">{selectedProducts.length}</div>
                        )}
                    </div>
                </div>
            </div>

            <div className="product-container">
                {productList.map((product,i) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onChange={() => 
                         

                            handleProductSelect(product)
                        }
                    />
                ))}
            </div>
               <ToastContainer
               position="bottom-right"
               autoClose={1000}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick
               rtl={false}
               pauseOnFocusLoss
               draggable
               pauseOnHover
             
                />
        </div>
    );
}
