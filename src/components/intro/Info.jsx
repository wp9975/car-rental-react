import React from 'react'
import Card from './CardInfo'
import { HiLocationMarker } from "react-icons/hi";
import { FaCarAlt, FaPlus, FaRegIdCard } from "react-icons/fa";
import { MdPayment } from "react-icons/md";

const Info = () => {
  return (
    <div className=''>
    <div className="text-center m-10">
    <div className="text-sm uppercase font-bold tracking-wider mb-1 text-purple-700">
      We Answer
    </div>
    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
      Jak wynająć samochód?
    </h2>
  </div>
    <div className='w-full flex flex-wrap space-x-4 justify-center'>
      <Card number='1' title='Wybierz miejsce oraz datę odbioru i zwrotu' iconSrc={<HiLocationMarker/>}/>
      
      <Card number='2' title='Wybierz samochód' iconSrc={<FaCarAlt/>}/>
      <Card number='3' title='Wybierz dodatkowe usługi' iconSrc={<FaPlus/>}/>
      <Card number='4' title='Podaj swoje dane osobowe' iconSrc={<FaRegIdCard/>}/>
      <Card number='5' title='Opłać rezerwacje' iconSrc={<MdPayment/>}/>
    </div>
    </div>
  )
}

export default Info