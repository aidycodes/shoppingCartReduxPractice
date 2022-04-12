import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import { alertSliceActions } from "./alert-slice";

export const cartSlice = createSlice({
    name:'cart',
    initialState:{itemList:[], showCart:false, totalQuantity:0},
    reducers:{
        addToCart(state,action) {
            const currentItem = state.itemList.find((item) => action.payload.id === item.id)
  
            if(currentItem){ 
               currentItem.quantity++
                currentItem.total += currentItem.price
            } else {
               
               const newItem = {...action.payload, quantity:1, total:action.payload.price}
                state.itemList.push(newItem)
            }
            state.totalQuantity++
        },
        removeFromCart(state,action){
             const currentItem = state.itemList.find((item) => action.payload === item.id)
             if(currentItem.quantity <= 1){
                 const filteredItems = state.itemList.filter((item) => item.id !== action.payload)
                 state.itemList = filteredItems
                 state.totalQuantity--
             }
              else {
                  currentItem.quantity--
                  currentItem.total -= currentItem.price
                  state.totalQuantity--
              }
             
        },
        updateCartFromServer(state,action){
           state.itemList = action.payload
        },
        setShowCart(state){
            state.showCart = !state.showCart
        }
    }
})

export const sendCartData = () => {
    return async(dispatch, getState) => {
        dispatch(alertSliceActions.showProgress())
        const state = getState()
        try{
       await axios.put('https://reduxpractice-7e917-default-rtdb.europe-west1.firebasedatabase.app/cartitems.json',   
      state.cart    )
      dispatch(alertSliceActions.showSuccess())      
        }catch(err){dispatch(alertSliceActions.showError())}
    }
}

export const fetchCart = () => {
    return function(dispatch) {
        axios.get('https://reduxpractice-7e917-default-rtdb.europe-west1.firebasedatabase.app/cartitems.json')
            .then((res) => {
           const data = res.data.itemList
           if(data){
               dispatch(cartActions.updateCartFromServer(data))
           }
            })
    }
}

export const cartActions = cartSlice.actions