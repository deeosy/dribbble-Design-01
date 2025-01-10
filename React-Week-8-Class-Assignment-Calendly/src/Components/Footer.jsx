import React from 'react'
import { Link } from 'react-router-dom'
import calendlyLogo from '../images/cubes-svgrepo-com.svg'

export const Footer = () => {

  let d = new Date();
  let year = d.getFullYear();

  return (
    <footer>
      <div className="bg-slate-50 w-[100%] h-[3%] px-[10px] mt-[10px] flex justify-between items-center">
        <div className="flex items-center">
          <Link to='/' className="flex items-center">
            <img src={calendlyLogo} alt="logo" className="h-[20px] mr-[10px]"/>
            <h3 className="font-semibold text-[15px] text-clifford">Calendly</h3>
          </Link>
      </div>
        <p>Copyright @ {year} Calendly</p>
      </div>
    </footer>
  )
}
