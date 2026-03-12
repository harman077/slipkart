import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Searchbar from '../reusable-Components/Searchbar'
const Layout = () => {
  return (
   
   <div className='min-vh-100 d-flex flex-column justify-content-start '>

  <div className='position-sticky top-0 z-3'>
  <Navbar />
  </div>
  
   <main className='flex-grow-1'>
    <Outlet />
   </main>
<div>
 <Footer />
</div> 
  
    </div>
  )
}

export default Layout
