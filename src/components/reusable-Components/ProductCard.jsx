import React from 'react'
import './productcard.css'
import { useDispatch, useSelector,} from 'react-redux'
import { addToCart } from '../../redux/cartslice'
import {Link, useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'

const ProductCard = ({id, title, image,price}) => {
 const login=useSelector((state)=>state.auth.isLoggedIn)
 const navigate=useNavigate()
const dispatch=useDispatch()

const handleClick=()=>{
if(login){
 dispatch(addToCart({id,title,price,image}))
  toast.success(`${title.slice(0,14)}... Added To Your Cart`)
}else{
   setTimeout(()=>{
    toast.success('Please Login First Before Shopping')
    navigate('/login')
   },1000)
}
 
}

  return (

    <div className='productCard' key={id}>
      <div className="imageWrapper">

        <Link to={`/product/${id}`} style={{textDecoration:'none'}}>
        
        <img src={`${image}`} alt={title}  />
        </Link>

      </div>

      <div className="productInfo">
           <Link to={`/product/${id}`} style={{textDecoration:'none'}}>
        <h3 className="productTitle">{title}</h3>
        <p className="productPrice">Rs. {price}</p>
         </Link>
        <button className='btn btn-primary' onClick={handleClick}>Add To Cart</button>
      </div>
    </div>

    
  )
}

export default ProductCard