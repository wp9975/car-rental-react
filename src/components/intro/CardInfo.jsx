import React from 'react'

const CardInfo = (props) => {
  return (
    <div className='lg:w-1/6 md:w-1/2 w-full p-4 rounded-xl  bg-slate-100 border border-gray-200 hover:shadow-lg '>
    <div className=''>{props.iconSrc}</div>
    <div className='p-3'>
        <div className='mb-2 text-lg font-semibold text-center'>{props.number}</div>
        <p className='text-base text-center'>{props.title}</p>
    </div>
</div>
  )
}

export default CardInfo