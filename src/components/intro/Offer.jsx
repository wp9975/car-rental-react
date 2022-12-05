import React from 'react'
import ImgCar from './../../assets/img/cars/vwgolf.jpg'
import ImgTransport from './../../assets/img/cars/mercedes-transport.jpg'
import ImgPremium from './../../assets/img/cars/ferrari.jpg'

const Offer = () => {
  return (
    <div className="container mx-auto flex flex-wrap">
    <div className="lg:w-1/3 md:w-1/2 w-full p-4">
        <div className="p-8 rounded-xl border border-gray-200"><img className="mb-4 shadow-md mx-auto h-auto w-full" alt='' src={ImgCar}/>
            <h4 className="mb-2 text-lg font-semibold"> Osobowe </h4>
            <p className="text-base"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed recusandae libero possimus culpa quod </p>
        </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 w-full p-4">
        <div className="p-8 rounded-xl"><img className="mb-4 shadow-md mx-auto h-auto w-full" alt='' src={ImgTransport}/>
            <h4 className="mb-2 text-lg font-semibold"> Dostawcze </h4>
            <p className="text-base"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed recusandae libero possimus culpa quod </p>
        </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 w-full p-4">
        <div className="p-8 rounded-xl shadow"><img className="mb-4 shadow-md mx-auto h-auto w-full" alt='' src={ImgPremium}/>
            <h4 className="mb-2 text-lg font-semibold"> Premium </h4>
            <p className="text-base"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed recusandae libero possimus culpa quod </p>
        </div>
    </div>
</div>
  )
}

export default Offer