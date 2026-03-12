import ProductCard from '../components/reusable-Components/ProductCard'
import './Menpage.css'
import { useSelector } from 'react-redux'
const MenPage = () => {
 
  const loading= useSelector((state)=>state.products.loading)
  const menClothes= useSelector((state)=>state.products.allproducts)

  return (
  
    <div className='mt-5'>
      <h1 className="page-heading">Men's Collection</h1>
      {loading ? (<p className='fs-1 fw-bold text-center mb-5'>Loading...</p>) : (
        <div className='productsContainer'>
          {
            menClothes.filter(data => data.category === "men's clothing").map(((item) => (
              <ProductCard
              key={item.id}
                 id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
              />
            

            )))
          }
          </div>
      )

      }
      </div>
   
  )
}

export default MenPage
