import React from "react";
import "./Cart.css";
import { cartActions } from "../store/cart-slice";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {

  const dispatch = useDispatch()
  const itemList = useSelector(state => state.cart.itemList)

  const quantity = itemList.reduce((total,item) => (
   total += item.quantity ),0)

  const handleShowCart = () => {
    dispatch(cartActions.setShowCart())
  }


  return (
    <div onClick={handleShowCart} className="cartIcon">
      <h3>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
