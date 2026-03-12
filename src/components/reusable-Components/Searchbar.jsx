import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Searchbar = () => {
    const [search,setSearch]=useState('')
    const navigate=useNavigate()
   
    const handleChange=(e)=>{
      const value=e.target.value
      setSearch(value)
      if(value===''){
        navigate('/')
      }else{
      navigate(`/searchpage/${value}`)
      }
    }

  return (
    <div className='text-center mt-3 mb-2'>
      
      <input type="text"
      style={{boxShadow:'0px 8px 12px rgba(0,0,0,0.1)',border:'1px solid black'}}
      className='rounded p-2 w-50'
      placeholder='Search'
      value={search}
      onChange={handleChange} />
      
    </div>
  )
}

export default Searchbar
