import { createSlice } from "@reduxjs/toolkit"

const user = JSON.parse(localStorage.getItem("user"))

const initialState = {
 user: user || null,
 isLoggedIn: user ? true : false
}

const authSlice = createSlice({
 name: "auth",
 initialState,

 reducers:{

  register:(state,action)=>{

   const users = JSON.parse(localStorage.getItem("users")) || []
  
   users.push(action.payload)

   localStorage.setItem("users",JSON.stringify(users))

  },

  login:(state,action)=>{

   state.user = action.payload
   state.isLoggedIn = true

   localStorage.setItem("user",JSON.stringify(action.payload))
  },

  logout:(state)=>{

   state.user = null
   state.isLoggedIn = false

   localStorage.removeItem("user")
  }

 }

})

export const {register,login,logout} = authSlice.actions
export default authSlice.reducer