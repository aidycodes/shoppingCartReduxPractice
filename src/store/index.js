import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import authSlice from './auth-slice'
import { cartSlice } from './cart-slice'
import React from 'react'
import { alertSlice } from './alert-slice'

export const store = configureStore({
    reducer:{
        auth:authSlice,
        cart:cartSlice.reducer,
        alert:alertSlice.reducer
    }
})

const ReduxProvider = (props) => {
  return (
    <Provider store={store}>{props.children}</Provider>
  )
}

export default ReduxProvider