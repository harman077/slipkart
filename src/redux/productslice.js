import { createSlice } from "@reduxjs/toolkit";

const initialState={allproducts:[],loading:true}

export const productslice=createSlice({
    name:'products',
    initialState,
    reducers:{

        setProducts:(state,action)=>{
        state.allproducts=action.payload
       state.loading=false
    },
       loading:(state)=>{
        state.loading=true
       },
    
    }
})

export const{setProducts,loading}=productslice.actions
export default productslice.reducer