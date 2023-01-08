import React from 'react'

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
      <Faq id="faq"/>
    </div>
  )
}

export default Intro