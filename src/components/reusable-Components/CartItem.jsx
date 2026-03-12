import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { incrementQty,decrementQty,removeFromCart } from '../../redux/cartslice'
import './cartitem.css'

const CartItem = () => {

  const item=useSelector((state)=>state.cart.cartItems)
  console.log(item);
  
    
  const dispatch = useDispatch()

  return (
    <div>
    {
      item.map((product)=>(
    <div className="cartItem" key={product.id}>

      <div className="cartImage">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="cartDetails">
        <h4>{product.title}</h4>
        <p>Rs. {product.price}</p>

        <div className="qtyControls">
          <button onClick={() => dispatch(decrementQty(product.id))}>-</button>
          <span>{product.quantity}</span>
          <button onClick={() => dispatch(incrementQty(product.id))}>+</button>
        </div>

        <button 
          className="removeBtn"
          onClick={() => dispatch(removeFromCart(product.id))}
        >
          Remove
        </button>
      </div>

    </div>
   )) } 
   </div>
  )
}

export default CartItem 