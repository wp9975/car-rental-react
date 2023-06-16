import React from 'react'
import SocialMedia from './SocialMedia'
import { AiOutlineArrowUp } from "react-icons/ai";

const scrollToTop = () =>{
  window.scrollTo({
    top: 0, 
  });
};


const Footer = () => {


  return (
    <footer className='text-center bg-darkgray'>
        <div className='flex items-center justify-between m-auto max-w-screen-2xl'>
          <SocialMedia/>
          <div className='p-1 text-white border-white rounded-md bg-blackCoffee hover:border-2' onClick={scrollToTop}><AiOutlineArrowUp size={32}/></div>
        </div>
        <div className='p-3 text-white'>Copyright © 2023. All rights reserved. <a href='/' className='text-lg font-medium underline cursor-pointer underline-offset-4 hover:font-semibold'>Privacy Policy</a></div>
    </footer>
  )
}

export default Footer