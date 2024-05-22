import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import { Dialog } from "./components/Dialog"
import { DialogPack } from "./configs/DialogConstants";
import React, { useEffect, useState } from 'react';
import { EventBus, ShowDialog } from "./utilities/EventBus";
import CheckoutPage from "./pages/CheckoutPage";

function App() {

  const [dialogPack, setDialogPack] = useState(DialogPack)
  const [toggleDialog,setToggleDialog] = useState(false)


  const router = createBrowserRouter([
    {
      path: "/",
      element:<ProductPage/>,
    },
    {
      path: "products",
      element: <ProductPage/>,
    },
    {
      path: "cart",
      element: <CartPage/>,
    },
    {
      path: "checkout",
      element: <CheckoutPage/>,
    },
  ]);

  

useEffect(() => {
    initiateEventBus()
}, []);

function initiateEventBus(){
  EventBus.on("dialog", initDialog);
}

function initDialog(data){
  console.log(data.dialogPack)

  setDialogPack(data.dialogPack)

}

  return (
    <div className="App">
        <RouterProvider router={router} />
        {dialogPack.showDialog? <Dialog dialogPack={dialogPack}/>:null}
        
    
    </div>
  );
}

export default App;
