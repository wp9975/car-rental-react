import React from 'react'
import { useParams } from 'react-router-dom';
import CarsData from '../../assets/data/CarsData';

const CarDetails = () => {
    const {slug} = useParams();
    const carItem = CarsData.find((item) => item.detailsLink === slug);
  return (
    <div className=''>
        {carItem.brand}
    </div>
  )
}

export default CarDetails