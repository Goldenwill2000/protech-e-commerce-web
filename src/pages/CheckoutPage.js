import React, { useEffect, useState } from 'react';
import "./CheckoutPage.css"
import { Navigate, useNavigate } from "react-router-dom";


export default function CheckoutPage() {
    const navigate = useNavigate();
    useEffect(() => {
       
    }, []);

    return (
        <div className="checkout-page-background">
           <iframe style={{ border:"none"}}
            src="https://lottie.host/embed/b1e376f9-1e93-490d-b731-f3fb8926b714/BjShctV9kL.json"></iframe>
              <h1 className="shop-now-button" onClick={()=>{
                            navigate("/protech-e-commerce-web/products")
                        }}> BACK TO SHOPPING </h1>
        
        </div>
    );
}
