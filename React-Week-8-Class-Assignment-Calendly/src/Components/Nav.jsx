import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import calendlyLogo from '../images/cubes-svgrepo-com.svg'


export const Nav = () => {
  return (
    <div>
      <nav>
        <div className="flex w-[70%] mx-[15%] mt-[2%] items-center justify-between gap-[100px] ">
          <div className="">
            <NavLink to='/' >
              <div className="flex items-center w-[25%]">
                <img src={calendlyLogo} alt="logo" className="h-[40px] mr-[10px]"/>
                <h3 className="font-semibold text-[35px] text-clifford">Calendly</h3>
              </div>
            </NavLink>                
          </div>
          <ul className="flex gap-5 justify-start w-[40%]">
              <li>
                <NavLink to='individuals' className={({isActive})=> isActive ? 'text-blue-500' : ''}>
                  <div className="font-semibold">
                    Individuals
                  </div>
                </NavLink>
              </li>
              <li><NavLink to='teams' className={({isActive})=>isActive ?'text-blue-500':''}>
                  <div className="font-semibold">
                    Teams
                  </div>
                </NavLink></li>
              <li><NavLink to='enterprise' className={({isActive})=>isActive ?'text-blue-500':''}>
                  <div className="font-semibold">
                    Enterprise
                  </div>
                </NavLink></li>
          </ul>
          <div className="flex w-[24%] justify-end mr-[1%] gap-4">
            <Link to='login'>
              <button className="text-[14px] border border-black h-[40px] px-5 rounded-2xl hover:bg-blue-500 hover:text-white hover:border-blue-500">Log In</button>               
            </Link>
              {/* <Button text='Log In' h='40px'   hoverColor='white' borderColor='black' rounded='2xl' /> */}
            {/* <Button text='Sign Up' hoverColor='white'  h='40px'  borderColor='black' rounded='2xl' /> */}
            <a href="./Sign-Up.html">
              <button className="text-[14px] bg-black text-white border-0 h-[40px] px-5 rounded-2xl active:opacity-70  hover:bg-blue-500 ">Sign Up</button>
            </a>          
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}
