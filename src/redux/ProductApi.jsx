import { useEffect } from 'react'
import { clothes } from '../data/data'
import { useDispatch } from 'react-redux'
import { setProducts } from './productslice'

const ProductApi = () => {

  const dispatch=useDispatch()

useEffect(()=>{

    const fetchProducts=async()=>{
     
          try {
            const api = await fetch('https://fakestoreapi.com/products')
            const result = await api.json()
            const data=result.filter(d=>d.category.endsWith("clothing"))
            const mergedData=[...data,...clothes]
            console.log(mergedData,'Api + manual data');
            
            dispatch(setProducts(mergedData))
    
          } catch (error) {
            console.log('Finding Error in api', error);
    
          }
        }
    
        fetchProducts()
    
},[dispatch])
  return null
}

export default ProductApi
