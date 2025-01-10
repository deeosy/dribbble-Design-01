import React from 'react'
import { Link,  } from 'react-router-dom'

export const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
    <h1 className="text-8xl font-bold text-gray-600">404 </h1>
    <h2 className="text-4xl font-bold text-gray-600">Page Not Found</h2>
    <h3 className="text-xl font-semibold text-gray-600">The page you are looking for doesn't exist or another error occured. Click here to return to <Link to='/' ><span className='text-blue-400 underline hover:text-violet-500 ' >Home Page</span></Link></h3>
  </div>
  )
}

