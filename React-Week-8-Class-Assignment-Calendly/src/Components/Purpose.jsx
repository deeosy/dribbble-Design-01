import React from 'react'

export const Purpose = ({number, title, description}) => {

  return (
    <div class="px-[20px] border-0 border-l-2">
      <span class="text-white py-[5px] px-[11px] rounded-full bg-clifford relative -left-[36px] ">{number}</span>
      <h3 class="font-bold text-[20px] my-[20px] w-[40%]">{title}</h3>
      <p class="leading-8 w-[60%]">{description}</p>
    </div>
  )
}
