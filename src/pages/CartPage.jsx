import React, { useEffect } from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../components/reusable-Components/CartItem';

      
 const CartPage = () => {
  const [cart, setCart] = useState([]);
  const cartItems=useSelector((state)=>state.cart.cartItems)

  useEffect(()=>{
  
   setCart(cartItems)
   
  },[cartItems])

 
         const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  

  return (
    <div className="cartPage" style={{padding:'20px'}}>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
        
         <CartItem 
              />
        

          <div className="cartSummary">
            <h3>Total: Rs. {total.toFixed(2)}</h3>
            <button className='btn btn-info'>Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
 
  )
}

export default CartPage
