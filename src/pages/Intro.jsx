import React from 'react'
import Footer from '../components/Footer'
import Faq from '../components/intro/Faq'
import Hero from '../components/intro/Hero'
import Offer from '../components/intro/Offer'

const Intro = () => {
  return (
    <div>
      <Hero/>
      <Offer/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default Intro