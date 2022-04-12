import { createSlice } from "@reduxjs/toolkit";

export const alertSlice = createSlice({
    name:'alert',
    initialState:{type:'success',message:'default message'},
    reducers:{
        showSuccess(state,action){
            state.type = 'success'
            state.message = 'Server Request Successful'
        },
        showProgress(state,action){
            state.type = 'warning'
            state.message = 'Sending request'
        },
        showError(state,action){
            state.type = 'error'
            state.message = 'Request Failed'
        }
    }
})


export const alertSliceActions = alertSlice.actions
