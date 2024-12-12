

import React from 'react'

function Contacts({contactInfo}) {
  return (
    <>
      <div className="my-1 w-[] p-2 border bg-slate-200 rounded-md grid grid-cols-3  ">
            <h3 className='border border-black text-center bg-white' >Name: {contactInfo.name}</h3>
            <h3 className='border border-black text-center mx-[1%]  bg-white'>Phone No: {contactInfo.phoneNumber}</h3>
            <h3 className='border border-black text-center  bg-white'>Location: {contactInfo.location}</h3>
          </div>
    </>
  )
}

export default Contacts