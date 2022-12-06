import React from 'react'
import Footer from '../components/Footer'
import Faq from '../components/intro/Faq'
import Hero from '../components/intro/Hero'
import Info from '../components/intro/Info'
import Offer from '../components/intro/Offer'

const Intro = () => {
  return (
    <div>
      <Hero/>
      <Info/>
      <Offer/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default Intro