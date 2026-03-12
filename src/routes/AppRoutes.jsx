import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/Home'
import MenPage from '../pages/MenPage'
import Layout from '../components/layout/Layout'
import WomenPage from '../pages/WomenPage'
import Login from '../pages/Login'
import Register from '../pages/Register'
import CartPage from '../pages/CartPage'
import SearchPage from '../pages/SearchPage'
import ProductDetailsPage from '../pages/ProductDetailsPage'
import About from '../pages/About'
import Contact from '../pages/Contact'
import { ToastContainer } from 'react-toastify'
import NotFound from '../pages/NotFound'
import Shop from '../pages/Shop'

const AppRoutes = () => {
  return (
    <>
      <Routes>

        <Route path='/' element={<Layout />}
        >
          <Route index element={<HomePage />} />
          <Route path='/men' element={<MenPage />} />
          <Route path='/women' element={<WomenPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/cartpage' element={<CartPage />} />
          <Route path='/searchpage/:search' element={<SearchPage />} />
          <Route path='/product/:id' element={<ProductDetailsPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='*' element={<NotFound />} />


        </Route>
      </Routes>
      <ToastContainer position='top-right' autoClose={2000} />

    </>
  )
}

export default AppRoutes
