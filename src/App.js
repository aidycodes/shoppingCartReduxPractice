import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";
import CartItems from "./components/CartItems";

function App() {

    const showCart = useSelector(state => state.cart.showCart)
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  return (
    <div className="App">  
      {!isLoggedIn ?
      <Auth /> :
       <Layout /> }
       {showCart && <CartItems/>}
    </div>
  );
}

export default App;
