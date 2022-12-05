import React from 'react'

const Footer = () => {
  return (
    <div className='p-10 bg-purple-900 text-white'>
        <div className='md:flex md:justify-around'>
            <div className='mb-5'>
            <h3 className='pb-4 text-2xl'>Car Rentalio</h3>
               <p className='text-gray-300'>Jasionka 942<br/>
            Jasionka 36-002<br/>
            Polska<br/>
            <strong>Phone: </strong> +48123123123<br/>
            <strong>Email: </strong> contact@carrentalio.com    </p>  
            </div>
            <div className='mb-5'>
                <ul className='flex flex-col'>
                    <a href='' className=''><li className=' pb-4 bg-purple-700 p-1 text-center hover:bg-purple-500'>Home</li></a>
                    <a href='' className=''><li className=' pb-4 bg-purple-700 p-1 text-center hover:bg-purple-500'>About us</li></a>
                    <a href='' className=''><li className=' pb-4 bg-purple-700 p-1 text-center hover:bg-purple-500'>Services</li></a>
                    <a href='' className=''><li className=' pb-4 bg-purple-700 p-1 text-center hover:bg-purple-500'>Terms of services</li></a>
                    <a href='' className=''><li className=' pb-4 bg-purple-700 p-1 text-center hover:bg-purple-500'>Privacy policy</li></a>
                </ul>
            </div>
            <div className='mb-5 w-1/4 flex flex-col justify-center content-evenly'>
                <h3 className='pb-4 text-2xl'>Dołącz do newslettera</h3>
                <p className='text-gray-300'>Zapisz się do naszego newslettera, aby być na bieżąco z nowościami i promocjami.</p>
                <input className='text-gray-300  p-2 focus-border-purple-900'type="text" name='' id=''/><br/>
                <button className='pb-4 bg-purple-700 p-1 text-center hover:bg-purple-500'>Subskrybuj</button>
            </div>
        </div>
    </div>
  )
}

export default Footer