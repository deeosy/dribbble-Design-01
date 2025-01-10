import React from 'react'

export const ServiceCard = ({service}) => {

  return (
      <div className='relative h-[100%] w-[100%] rounded-xl overflow-hidden hover:cursor-pointer hover:border-opacity-40 hover:shadow-black hover:shadow-md '>
        
        <img src={service.bgImage} alt="" className='absolute w-[100%] h-[100%] object-cover  ' />
        <div className="p-3  ">
          <h4 className='text-white relative' >{service.name}</h4>
        </div>
      </div>
  )
}