import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CarDetails from '../components/CarRental/CarDetails'
import Intro from '../pages/Intro'
import CarListPage from '../pages/CarListPage'
import About from '../pages/About'
import ContactPage from '../pages/ContactPage'
import OfferPage from '../pages/OfferPage'


const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Intro/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/offer' element={<OfferPage/>}/>
        <Route path='/carlist' element={<CarListPage/>}/>
        <Route path='/carlist/:slug' element={<CarDetails/>}/>
        <Route path="*" element={<p>Path not resolved</p>} />
    </Routes>
  )
}

export default Routers