import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import brandLogo from '../assets/icons/homePage-Logo.svg'

export const Nav = () => {
  return (
    <>
    <div className=" flex justify-between items-center px-8">
      <NavLink to='/'>
        <div className="bg-blue-400 p-2 m-2 rounded-xl " >
          <img src={brandLogo} alt="" className='h-[30px] w-[40px] ' />
        </div>
      </NavLink>
      <div className=" flex gap-4 justify-around ">
        <NavLink to='about'>
          <p className='bg-blue-400 p-2 text-white rounded-lg'>About</p> 
        </NavLink>
        <NavLink to='services'>
          <p className='bg-blue-400 p-2 text-white rounded-lg'>Services</p>
        </NavLink>
        <NavLink to='contact'>
          <p className='bg-blue-400 p-2 text-white rounded-lg'>Contact</p>
        </NavLink>
      </div>
    </div>
    <Outlet />
    </>
  )
}
