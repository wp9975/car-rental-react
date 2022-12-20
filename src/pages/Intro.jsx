import React from 'react'
import Footer from '../components/Footer'
import Faq from '../components/intro/Faq'
import Hero from '../components/intro/Hero'
import Info from '../components/intro/Info'
import Offer from '../components/intro/Offer'
import Navbar from '../components/navbar/Navbar'

const Intro = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Info/>
      <Offer/>
      <Faq id="faq"/>
      <Footer/>
    </div>
  )
}

export default Intro