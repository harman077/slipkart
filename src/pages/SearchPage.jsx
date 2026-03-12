import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/reusable-Components/ProductCard'
import { useNavigate, useParams } from 'react-router-dom'

const SearchPage = ()=> {
   const {search}=useParams()
   console.log(search);
   
   const navigate=useNavigate()
  if(search===''){
navigate('/')
  }
   
  const products = useSelector((state) => state.products.allproducts) // all products

  console.log(products);
  
  const filteredProducts = products.filter((item) =>
    item.category.endsWith("clothing") &&
    item.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="container mt-4">
 
      <h2 className="mb-4">
        Search Results for: <span className="text-primary">{search}</span>
      </h2>

      {filteredProducts.length === 0 ? (
        <p className="fs-4 text-center">No products found</p>
      ) : (
        <div className="productsContainer">
          {filteredProducts.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      )}

    </div>
  )
}

export default SearchPage