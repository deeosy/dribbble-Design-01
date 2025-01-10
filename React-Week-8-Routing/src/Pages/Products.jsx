import React from 'react'
import { useParams } from 'react-router-dom'

export const Products = () => {
  const {id} = useParams()
  return (
    <div>
      <div className="flex flex-col my-[100px] justify-start items-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600">Product List</h1>
        <p className='mt-[10px] text-xl font-semibold text-blue-400' >Showing product with id: {id}</p>
      </div>
    </div>
  )
} 
