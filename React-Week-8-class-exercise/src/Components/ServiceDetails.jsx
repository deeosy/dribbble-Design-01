import React from 'react'
import { useParams } from 'react-router-dom'

export const ServiceDetails = () => {
  const { id } = useParams();  

  return (
    <div  >
      <p>{id}</p>
    </div>
  )
}
