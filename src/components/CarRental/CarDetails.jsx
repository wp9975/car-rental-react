import React from 'react'
import { useParams } from 'react-router-dom';
import CarsData from '../../assets/data/CarsData';

const CarDetails = () => {
    const {slug} = useParams();
    const carItem = CarsData.find((item) => item.detailsLink === slug);
  return (
    <section className='overflow-hidden'>
    <div className='container mx-auto '>
      <div className='flex flex-wrap mx-auto xl:w-4/5'>
        <img src={carItem.imgSrc} className='object-cover object-center w-full rounded-md lg:w-1/2 lg:h-auto h-50' alt='car'/>
        <div className='w-full py-3 mt-5 lg:w-1/2'>
            <h1 className='my-2 text-3xl '>{carItem.brand} {carItem.model}</h1>
            <h2 className='text-md text-gray'>{carItem.category}</h2>
            <div className='flex my-2'>
              <h4 className='mx-3 text-lg'>{carItem.year}</h4>
              -
              <h4 className='mx-3 text-lg'>{carItem.fuel}</h4>-
              <h4 className='mx-3 text-lg'>{carItem.type}</h4>
            </div>
            <p className='leading-relaxed'>{carItem.seat}</p>
        </div>
      </div>
        {carItem.brand}
    </div>
    </section>
  )
}

export default CarDetails