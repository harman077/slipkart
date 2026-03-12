import React from 'react'

import AppRoutes from './routes/AppRoutes'
import ProductApi from './redux/ProductApi'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
   <>
   <ProductApi />
    <AppRoutes />
   </>
  )
}

export default App
