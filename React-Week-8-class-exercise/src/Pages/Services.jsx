import React from 'react'
import { v4 as uuid } from 'uuid'
import { Link } from 'react-router-dom'

export const Services = () => {
  const services = [
    {serviceName:'painting', id: uuid() },
    {serviceName:'car detailing', id: uuid() }
  ]
  return (
      <div className='p-10' >
        <h1 className='text-2xl' >Welcome to the services page</h1>
        <p>Browse through some of our online services. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, animi ad. Et cumque exercitationem, modi quidem unde illo voluptatum fugit numquam amet sed ex dicta velit blanditiis odit incidunt quas.</p>
        <div className="flex justify-center">
          {services.map((serviceItem)=>{
            return(
              <Link to={`/services/${serviceItem.id}`} key={serviceItem.id} >
                <h3 className='flex mx-1'>{serviceItem.serviceName}</h3>               
              </Link>  
            )

          })}

        </div>
      </div>
  )
}
