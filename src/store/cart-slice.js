import { createSlice } from "@reduxjs/toolkit";

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
             console.log(currentItem,'dd')
             if(currentItem.quantity <= 1){
                 const filteredItems = state.itemList.filter((item) => item.id !== action.payload)
                 state.itemList = filteredItems
             }
              else {
                  currentItem.quantity--
                  currentItem.total -= currentItem.price
              }
             
        },
        setShowCart(state){
            state.showCart = !state.showCart
        }
    }
})

export const cartActions = cartSlice.actions