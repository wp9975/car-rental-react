import React from 'react'
import { Link } from 'react-router-dom'
import video from '../../assets/videos/video.mp4'
const Hero = () => {
  return (
    <header className='relative flex items-center justify-left h-128 md:h-192 mb-12 overflow-hidden '>
        <div className='flex flex-col z-20 p-5 text-2xl m-auto text-white bg-blackCoffee bg-opacity-50 shadow-lg rounded-xl backdrop-blur-md'> 
            <h1 className='text-center m-auto '>Wybierz wymarzony samochód</h1>
            <h1 className='text-center m-auto py-5 '>i ruszaj w drogę</h1>
            <Link to='/carlist' className="m-auto bg-grayLavender border-4 border-white py-4 px-6 opacity-70 rounded-md shadow text-blackCoffee hover:opacity-100 animate-pulse">Przejdź do oferty</Link>
       </div>
        <video autoPlay loop muted className='absolute z-10 w-auto min-w-full min-h-full max-w-none '>
            <source src={video} type='video/mp4'/>
            
        </video>
    </header>
  )
}

export default Hero