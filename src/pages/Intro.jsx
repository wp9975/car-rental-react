import React from 'react'


import Faq from '../components/Home/Faq';
import HowToRent from '../components/Home/HowToRent';
import Contact from '../components/Home/Contact';
import HeroBanner from '../components/Home/HeroBanner';
import BlogCards from '../components/Home/BlogCards';
import Stat from '../components/Home/Stat';



const Intro = () => {
  return (
    <div>
      <HeroBanner/>
      <HowToRent/>
      <Stat/>
      <BlogCards/>
      <Faq/>
      <Contact/>
    </div>
  )
}

export default Intro