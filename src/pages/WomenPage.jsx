import { useSelector } from 'react-redux'
import ProductCard from '../components/reusable-Components/ProductCard'
import './Menpage.css'

const WomenPage = () => {

 const loading= useSelector((state)=>state.products.loading)
 
  const WomenClothes= useSelector((state)=>state.products.allproducts)
 
  
  return (

    <div className='mt-5'>
      <h1 className="page-heading">Women's Collection</h1>
      {loading ? (<p className='fs-1 fw-bold text-center mb-5'>Loading...</p>) : (
        <div className='productsContainer'>
          {
            WomenClothes.filter(data => data.category === "women's clothing").map(((item) => (
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

export default WomenPage
