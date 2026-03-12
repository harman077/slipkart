import { createSlice } from '@reduxjs/toolkit'


const cartItems=localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')):
[]

const initialState = {cartItems}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
       
        addToCart: (state, action) => {
            const item= state.cartItems.find((item)=>item.id===action.payload.id)
            if(item){
                item.quantity +=1
            }
            else{
                state.cartItems.push(
                    {...action.payload,
                        quantity:1})
                        localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
            }

        },
        removeFromCart: (state, action) => {
        
             const item=JSON.parse(localStorage.getItem('cartItems'))
           if(item){
           state.cartItems= item.filter((data)=>data.id!==action.payload)
           localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
           }
        },
          incrementQty: (state,action) => {
           const item= state.cartItems.find(item=>item.id===action.payload)
           if(item){
            item.quantity +=1
           }
        },
         decrementQty: (state,action) => {
            const item= state.cartItems.find(item=>item.id===action.payload)
           if(item && item.quantity>1){
            item.quantity -=1
        }  
    },

}}
)

export const { incrementQty, decrementQty, addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
