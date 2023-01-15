import React from 'react'
import { Link } from 'react-router-dom'
import CarsData from '../../assets/data/CarsData'
import CarCard from './CarCard'

const CarList = () => {
  return (
    <section className=''>
        <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 space-y-4 sm:space-y-0'>
        {CarsData.map((item, index) => (
            <div key={index} className=''>
                <Link to={`/carlist/${item.detailsLink}`}>
                <CarCard imgSrc={item.imgSrc} brand={item.brand} model={item.model} category={item.category} year={item.year} fuel={item.fuel} type={item.type}/>
                </Link>
            </div>
        ))}
        
        </div>
    </section>
  )
}

export default CarList