import "./App.css";
import React, { useState } from "react";
import NavBar from "./component/NavBar";
import Items from "./component/Items";
import Cart from "./component/Cart/Cart";
import { CartContextProvider } from "./component/store/cart-context";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home"
import Contact from "./pages/Contact";
import Products from "./pages/Products";

function App() {
  const [showCart, setShowCart] = useState(false);

  const CartHandler = () => {
    setShowCart(true);
  };

  const cartCloseHandler = () => {
    setShowCart(false);
  };
  return (
    <CartContextProvider>
      
      <NavBar onshow={CartHandler} />
      <h1 className="text-center p-5  bg-secondary text-white">The Generics</h1>
      {showCart && <Cart onTap={cartCloseHandler} />}
      <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/store/:title" element={  <Products /> }/>
      <Route path="/store" element={<Items/>}/>
         
        
        <Route path="/store/:title" element={<Products/>}/>
          
    
      <Route path="/about" element={ <About />}/>
      <Route path="/contact" element={ <Contact />}/>
        
      
      </Routes>
    </CartContextProvider>
  );
}

export default App;