import React from 'react'
import rightArrow from '../images/right-arrow-svgrepo-com.svg'

export const SolutionsCard = ({solution}) => {
  console.log(solution);
  
  return (
    <div className="hover:cursor-pointer">
      <div className="h-[150px] overflow-hidden">
        <img src={solution.image} alt="sales person at work" className="object-contain rounded-t-2xl" />
      </div>                
      <div className="flex flex-col justify-between h-[150px]">
        <p className="text-[20px] text-deepBlue font-semibold px-4 mt-[10px]">{solution.title}</p>
        <p className="text-[16px]  px-4 w-[250px] -mt-[20px]">{solution.description}</p>
        <div className="px-4">
          <a href="#" className="flex items-end mb-[10px]">
            <p className=" mr-[10px] text-clifford font-semibold text-[16px]">Learn more</p>
            <img src={rightArrow} alt="right arrow icon" className="h-[20px]" />
          </a>                    
        </div>
      </div>                                
    </div>
  )
}
