import React from 'react'
import ImgCar from './../../assets/img/cars/vwgolf.jpg'
import ImgTransport from './../../assets/img/cars/mercedes-transport.jpg'
import ImgPremium from './../../assets/img/cars/ferrari.jpg'
import Card from './CardOffer'

const Offer = () => {
  return (<div className='w-full bg-slate-100'>
    <div className="text-center m-10">
    <div className="text-sm uppercase font-bold tracking-wider mb-1 text-purple-700">
      We Answer
    </div>
    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
      Oferujemy samochody
    </h2>
  </div>
   
    <div className="container mx-auto flex flex-wrap space-x-4 justify-center">
    <Card title='Osobowe' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed recusandae libero possimus culpa quod' imgSrc={ImgCar}/>
    <Card title='Dostawcze' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed recusandae libero possimus culpa quod' imgSrc={ImgTransport}/>
    <Card title='Premium' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed recusandae libero possimus culpa quod' imgSrc={ImgPremium}/>
    </div>
       
    
</div>
  )
}

export default Offer