import "./App.css";
import React, { useState,lazy,Suspense } from "react";
// import NavBar from "./component/NavBar";
// import Items from "./component/Items";
// import Cart from "./component/Cart/Cart";
import { Redirect, Route, Switch } from "react-router-dom";
// import About from "./pages/About";
// import Home from "./pages/Home";
// import Contact from "./pages/Contact";
// import Products from "./pages/Products";
// import Login from "./pages/Login";
// import Profile from "./pages/Profile";
import AuthContext from "./component/store/auth-context";
import { useContext } from "react";
const NavBar=lazy(()=>import("./component/NavBar"));
const Items=lazy(()=>import("./component/Items"));
const Cart=lazy(()=>import("./component/Cart/Cart"));
const About=lazy(()=>import("./pages/About"));
const Home=lazy(()=>import("./pages/Home"));
const Contact=lazy(()=>import("./pages/Contact"));
const Products=lazy(()=>import("./pages/Products"));
const Login=lazy(()=>import("./pages/Login"));
const Profile=lazy(()=>import("./pages/Profile"));




function App() {
  const [showCart, setShowCart] = useState(false);

  const appCtx = useContext(AuthContext);

  const isLoggedIn = appCtx.isLoggedIn;

  const CartHandler = () => {
    setShowCart(true);
  };

  const cartCloseHandler = () => {
    setShowCart(false);
  };

 
  return (
    <React.Fragment>
      <NavBar onshow={CartHandler} />
      <h1 className="text-center p-5  bg-secondary text-white">The Generics</h1>
      {showCart && <Cart onTap={cartCloseHandler} />}
      <Switch>
      {isLoggedIn &&<Route exact path="/home">
         <Suspense> <Home /></Suspense>
        </Route>}
        {isLoggedIn && (
          <Route exact path="/store">
           <Suspense><Items /></Suspense> 
          </Route>
        )}
        {isLoggedIn && (
          <Route exact path="/store/:title">
           <Suspense><Products /></Suspense> 
          </Route>
        )}
        {isLoggedIn && (
          <Route exact path="/about">
           <Suspense><About /></Suspense> 
          </Route>
        )}
        {isLoggedIn && (
          <Route exact path="/contact">
           <Suspense><Contact  /></Suspense> 
          </Route>
        )}
        <Route exact path="/Login">
          {!isLoggedIn && <Suspense><Login /></Suspense>}
        </Route>
        {isLoggedIn && (
          <Route exact path="/profile">
           <Suspense><Profile /></Suspense> 
          </Route>
        )}
        <Route path="/Logout">
         <Suspense><Login /></Suspense> 
        </Route>
        <Route path="*">
          {" "}
          {/* ( option 2)  */}
          <Redirect to="/Login" />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;