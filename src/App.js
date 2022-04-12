import React, {useEffect} from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector, useDispatch } from "react-redux";
import CartItems from "./components/CartItems";
import { sendCartData, fetchCart } from "./store/cart-slice";
import AlertMsg from './components/AlertMsg'

let firstLoad = true

function App() {


    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const showCart = useSelector(state => state.cart.showCart)
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

    const alertData = useSelector(state => state.alert)
    

    useEffect(() => {
      dispatch(fetchCart())
    },[dispatch])

  useEffect(() => {
    if(!firstLoad){
    dispatch(sendCartData()) 
    
  } else {
   firstLoad = false
  }

  },[cart, dispatch])


  return (
    <div className="App"> 
    <AlertMsg type={alertData.type} msg={alertData.message} cart={cart}/> 
      {!isLoggedIn ?
      <Auth /> :
       <Layout /> }
       {showCart && <CartItems/>}
       <button onClick={() => dispatch(fetchCart())}>thunk check</button>
    </div>
  );
}

export default App;
