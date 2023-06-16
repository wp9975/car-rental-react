import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen space-y-20 lg:flex-row '>
        <div className='flex flex-col items-center justify-center w-full text-center lg:w-1/2 lg:px-2 xl:px-0'>
        <p className="font-bold tracking-wider text-7xl md:text-8xl lg:text-9xl text-male">404</p>
        <p className="mt-2 text-4xl font-bold tracking-wider md:text-5xl lg:text-6xl text-male">Page Not Found</p>
        <p className="my-12 text-lg text-gray-500 md:text-xl lg:text-2xl">Sorry, the page you are looking for could not be found.</p>
        <Link to="/" className="flex items-center px-4 py-2 space-x-2 text-white transition duration-150 rounded bg-blue hover:bg-blue-700">
            Return Home
        </Link>
        </div>
        <div className='flex items-center h-screen'>
            <img className='' alt='' src='https://images.unsplash.com/photo-1532003885409-ed84d334f6cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'/>
        </div>
    </div>
  )
}

export default PageNotFound