import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomeLayout from '../layouts/HomeLayout'
import RentalLayout from '../layouts/RentalLayout'


const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<HomeLayout/>}/>
        <Route path='carlist' element={<RentalLayout/>}/>
        
        <Route path="*" element={<p>Path not resolved</p>} />
    </Routes>
  )
}

export default Routers