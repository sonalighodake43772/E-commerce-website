import "./App.css";
import React, { useState } from "react";
import NavBar from "./component/NavBar";
import Items from "./component/Items";
import Cart from "./component/Cart/Cart";
import { CartContextProvider } from "./component/store/cart-context";
import { AuthContextProvider } from "./component/store/auth-context";
import { Redirect, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

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
      <AuthContextProvider>
      <NavBar onshow={CartHandler} />
      <h1 className="text-center p-5  bg-secondary text-white">The Generics</h1>
      {showCart && <Cart onTap={cartCloseHandler} />}
      <Switch>
        <Route exact path="/">
          <Redirect to="/store" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/store" exact>
          <Items />
        </Route>
        <Route path="/store/:title">
          <Products/>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact  />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route><Route path="/Login">
          <Login />
        </Route>
        <Route path="/Logout">
          <Login />
        </Route>
      </Switch>
      </AuthContextProvider>
    </CartContextProvider>
  );
}

export default App;