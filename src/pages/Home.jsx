import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import menImage from '../assets/images/menImages/white T-shirt.avif'
import womenImage from '../assets/images/womenImages/istockphoto-941137092-1024x1024.jpg'
import { useSelector } from 'react-redux'
import ProductSlider from '../components/reusable-Components/ProductSlider'
import heroBanner from '../assets/bannerImages/bannerImg2.avif'

const Home = () => {

  const products = useSelector((state) => state.products.allproducts)

  const menNewArrivals = products
    .filter(data => data.category === "men's clothing")
    .slice(0, 6)

  const womenNewArrivals = products
    .filter(data => data.category === "women's clothing")
    .slice(0, 6)

  return (

    <div>

     <div
  className="section-1 hero-banner"
  style={{ backgroundImage: `url(${heroBanner})` }}
>

  <div className="hero-content">

<h1>Sustainable. Beautiful. Brands</h1>
    
    <p>Discover the latest fashion for men & women</p>

    <Link className="btn btn-dark mt-3" to="/shop">
      Shop Now
    </Link>

  </div>

</div>
 <div className='text-center m-4'>
  <hr className='mt-4 ' />
          <h1 className='text-center fw-lighter mt-4 '>Choose Your Shopping Style 👜</h1>

</div>

      <div className="section-2">
        <div className="imgWrapper">
          <img className="heroImage" src={womenImage} alt="women" />
          <Link to="/women">Shop Women ⬅️</Link>
        </div>

        <div className="imgWrapper">
          <img className="heroImage" src={menImage} alt="men" />
          <Link to="/men">Shop Men ⬅️</Link>
        </div>

      </div>

      <div className="section-3">
        <hr />
        <h1 className="text-center fw-lighter mb-3">Men New Arrivals</h1>

        {menNewArrivals.length > 0 && (
          <ProductSlider data={menNewArrivals} />
        )}

      </div>

      <div className="section-3">
        <hr />
        <h1 className="text-center fw-lighter mb-3">Women New Arrivals</h1>

        {womenNewArrivals.length > 0 && (
          <ProductSlider data={womenNewArrivals} />
        )}

      </div>

      {/* section-5 why choose us */}
      <div className="section-4 mt-4">
        <hr />
        <h2 className="text-center">Why Shop With Us</h2>
        <div className="features">
          <div>
            <h4>🚚 Free Shipping</h4>
            <p>On orders above ₹999</p>
          </div>
          <div>
            <h4>🔄 Easy Returns</h4>
            <p>7 day return policy</p>
          </div>
          <div>
            <h4>🔒 Secure Payment</h4>
            <p>100% secure checkout</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home
