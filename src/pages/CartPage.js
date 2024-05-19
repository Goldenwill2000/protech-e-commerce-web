
import React, { useEffect, useState } from 'react';
import CartCard from '../components/CartCard';
import "./CartPage.css";



export default function CartPage() {
    const [selectedProducts, addProducts] = useState([]);
  
    useEffect(() => {
        return () => {
  
         console.log("Component will unmount");
        };
    }, []); 

    return (
        <div className="cart-page-wrapper">
            
           
          
        </div>
    );
}

