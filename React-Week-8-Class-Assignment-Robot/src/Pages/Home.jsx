import React from 'react'
import robotHero from '../assets/icons/Robot-Home.png'
import rightArrow from '../assets/icons/arrow-right.svg'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className='text-white flex justify-center items-center h-[90vh] '>
      <div className="flex w-[90%] md:w-[60%]  ">
        <div className="flex flex-col gap-4 md:w-[60%] ">
          <h1 className='text-5xl ' >Creative and Technical IT for Business</h1>
          <p className='text-sm'>Get the tools, products, and training you need to lead your business in a changing world. We help you grow your business with the intelligent use of websites, modern IT solutions & digital marketing.</p>
          <div className=" flex gap-4">
            <Link to='services' >
              <button className='border border-blue-400 bg-blue-400 py-1 px-2 rounded-xl ' >Latest Offers</button>
            </Link>
            <Link to='contact'>
              <button className='border-b border-b-white text-blue-300 py-1 px-2 flex gap-1 items-center '>
                Get in Touch <span><img src={rightArrow} alt="" className='h-[18px]' /></span>
              </button>
            </Link>
          </div>
        </div>
        <div className="w-[40%] hidden md:flex ">
          <img src={robotHero} alt="" className='object-cover '/>
        </div>
      </div>
    </div>
  )
}
