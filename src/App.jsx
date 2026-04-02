import React, { useEffect } from 'react'

import AppRoutes from './routes/AppRoutes'
import ProductApi from './redux/ProductApi'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from './redux/cartslice';

const App = () => {

  //check login for cleartitmes

  const dispatch=useDispatch()
  const loggedIn = useSelector((state) => state.auth.isLoggedIn)
  useEffect(() => {
    if (!loggedIn) {
        dispatch(clearCart())
    }

  }, [loggedIn,dispatch])

  return (
    <>
      <ProductApi />
      <AppRoutes />
    </>
  )
}

export default App
