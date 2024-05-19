import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Logo from "./assets/images/full/logo.png";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import { login } from "./utilities/Request";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
      path: "products",
      element: <ProductPage/>,
    },
    {
      path: "cart",
      element: <CartPage/>,
    },
  ]);
  return (
    <div className="App">
        <RouterProvider router={router} />
      

    </div>
  );
}

export default App;
