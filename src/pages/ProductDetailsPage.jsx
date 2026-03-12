import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../redux/cartslice"
import { toast } from "react-toastify"

const ProductDetailsPage = () => {

  const dispatch = useDispatch()
  const login = useSelector((state) => state.auth.isLoggedIn)
  const navigate = useNavigate()
  const { id } = useParams()
  const handleClick = () => {
    if (login) {
      dispatch(addToCart(product))
      toast.success(`${product.title.slice(0, 15)}... Added to Your Cart`)
    }
    else {
      setTimeout(() => {
        toast.success('Please Login First Before Shopping')
        navigate('/login')
      },1000)
    }

  }

  const products = useSelector((state) => state.products.allproducts)
  console.log(products);

  const product = products.find((item) => item.id === Number(id))

  if (!product) {
    return <h2>Product not found</h2>
  }

  return (
    <div className="container mt-4 mb-3">

      <div className="row">

        <div className="col-md-5">
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "100%", height: "400px", objectFit: "contain" }}
          />
        </div>

        <div className="col-md-7 text-center">

          <h2>{product.title}</h2>

          <h4 className="text-success mt-3">
            Price : Rs.{product.price}
          </h4>

          <p className="mt-3">
            {product.description}
          </p>

          <button className="btn btn-primary mt-3" onClick={handleClick}>
            Add to Cart
          </button>

        </div>

      </div>

    </div>
  )
}

export default ProductDetailsPage