import React from 'react'

export const ServiceCard = ({title, image, description}) => {
  return (
    <div class="flex flex-col justify-between border border-black shadow-xl rounded-2xl w-[20%] p-5">
      <p class="text-[20px] text-clifford font-bold">{title}</p>
      <div class="flex justify-center">
        <img src={image} alt="" class="rounded-full h-[150px] w-[150px]"/>
      </div>                
      <p class="text-[16px]">{description}</p>                
    </div>
  )
}
