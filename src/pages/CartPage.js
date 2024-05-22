import React, { useEffect, useState } from 'react';
import CartCard from '../components/CartCard';
import "./CartPage.css";
import { Navigate, useNavigate } from "react-router-dom";
import { HideDialog, ShowDialog } from '../utilities/EventBus';
import { GetDialogPack } from '../configs/DialogConstants';

export default function CartPage() {
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const navigate = useNavigate();
   

    useEffect(() => {
        if (localStorage.getItem("cart")) {
            let cachedCart = JSON.parse(localStorage.getItem("cart"));
            setSelectedProducts(cachedCart);
            setTotalPrice(calculateTotalPrice(cachedCart));
        }
    }, []);

    const updateCurrentCart = (product, type) => {
        let selectedProductsCopy = [...selectedProducts];
        let productInCartIndex = selectedProductsCopy.findIndex(p => p.id === product.id);
        let shouldRefresh = false;
    
        if (type === "add") {
            if (productInCartIndex !== -1) {
                selectedProductsCopy[productInCartIndex].quantity += 1;
            } else {
                selectedProductsCopy.push({ ...product, quantity: 1 });
            }
        } else if (type === "remove") {
            if (productInCartIndex !== -1) {
                selectedProductsCopy[productInCartIndex].quantity -= 1;
                if (selectedProductsCopy[productInCartIndex].quantity === 0) {
                    selectedProductsCopy.splice(productInCartIndex, 1);
                    shouldRefresh = true;
                }
            }
        } else if (type === "delete") {
            if (productInCartIndex !== -1) {
                selectedProductsCopy.splice(productInCartIndex, 1);
            }
        }

        setSelectedProducts(selectedProductsCopy);
        setTotalPrice(calculateTotalPrice(selectedProductsCopy));
        localStorage.setItem("cart", JSON.stringify(selectedProductsCopy));

        if (shouldRefresh) {
            window.location.reload();
        }
    };

    const calculateTotalPrice = (products) => {
        return products.reduce((total, product) => {
            return total + (product.price * product.quantity);
        }, 0);
    };

    const clearCart = () =>{
        let emptyCart = []
        setSelectedProducts(emptyCart)
        localStorage.setItem("cart", JSON.stringify(emptyCart));
        setTotalPrice(0)
    }

    return (
        <div className="cart-page-wrapper" >
             <div style={{
                    display:'flex',
                    justifyContent:"space-between",
                    width:"100%",
                    alignItems:'center',
                    position:'fixed',
                    top:0 ,
                    background:"white",
                    zIndex:2,
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)" 
                }}>
                      <h3 style={{opacity:0,pointerEvents:"none"}}>Clear Cart</h3>
                    <h1>My Cart</h1>
                    <h3 className="clear-cart-button" style={{
                        opacity:totalPrice===0? 0:1,
                        pointerEvents:totalPrice===0?"none": 'auto'
                    }}
                        onClick={()=>{
                        // clearCart()
                        ShowDialog(
                            GetDialogPack({
                                showDialog: true,
                                dialogShowPrimaryButton: true,
                                showSecondaryButtonTexts: true,
                                dialogPrimaryButtonLabel: "Clear",
                                dialogSecondaryButtonLabel:"Back",
                                dialogShowSecondaryButton: true,
                                dialogSecondaryButtonCallback: () => {
                              
                                  HideDialog();
                                },
                                dialogTitle: "Caution",
                                dialogMessage:"Your cart will be cleared, would you like to continue",
                                dialogPrimaryButtonCallback: () => {
                                    clearCart()
                                  HideDialog();
                                  
                                },
                            })
                          );
                    }}>{window.innerWidth>768?"Clear Cart":"Clear"}</h3>
                </div>
            <div style={{ padding: "1em", width: '100%', boxSizing: "border-box", marginBottom:"10em", marginTop:"6em" }}>
               

                <div className='cart-card-flex'>
                {selectedProducts.length > 0 ? selectedProducts.map((product, i) => (
                    <CartCard
                        key={i}
                        product={product}
                        onChange={(product, type) => updateCurrentCart(product, type)}
                        onClear={clearCart}
                    />
                )) :
                    <div className="lottie">
                        <iframe style={{ border: "none" }} src="https://lottie.host/embed/23cbd3dc-e900-4e42-ab3a-81d78247bb6b/urBfhI3lZ7.json" />
                        <h1> Cart is Empty </h1>
                        <h1 className="shop-now-button" onClick={()=>{
                            navigate("/products")
                        }}> SHOP NOW </h1>
                    </div>}
                </div>
            </div>
            <div className="price-calculator">
                Total: RM {totalPrice}
                <div onClick={()=>{
                    navigate("/checkout")
                    clearCart()
                }}className={`checkout-button ${totalPrice===0?"disabled-button":""}`}>
                    Checkout
                </div>
            </div>
        </div>
    );
}
