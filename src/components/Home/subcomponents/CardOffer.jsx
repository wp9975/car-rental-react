import React from 'react'

const CardOffer = (props) => {
  return (
    <div className='lg:w-1/4 md:w-1/2 w-full p-4 bg-white border border-x-2 border-gray-200 hover:shadow-lg'>
        <img src={props.imgSrc} alt='' className='w-full'/>
        <div className='p-3'>
            <div className='mb-2 text-lg font-semibold'>{props.title}</div>
            <p className='text-base'>{props.description}</p>
        </div>
    </div>
  )
}

export default CardOffer