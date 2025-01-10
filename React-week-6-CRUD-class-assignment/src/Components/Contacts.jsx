import React from 'react'
import EditContactModal from './EditContactForm';


function Contacts({contactInfo, handleDeleteContact, hadndleEditContact}) {

  return (
    <>
      <div className="my-1 w-[] p-2 border bg-slate-200 rounded-md flex gap-2  ">
        <h3 className='border border-black text-center bg-white px-1' >Name: {contactInfo.name}</h3>
        <h3 className='border border-black text-center mx-[1%]  bg-white px-1'>Phone No: {contactInfo.phoneNumber}</h3>
        <h3 className='border border-black text-center  bg-white px-1'>Location: {contactInfo.location}</h3>
        <div className=" flex gap-2 ">
          <EditContactModal hadndleEditContact={hadndleEditContact} contactInfo={contactInfo} />
          <button onClick={()=>handleDeleteContact(contactInfo.id)} className='bg-red-500 px-2 text-white rounded-md hover:bg-gray-300
          '>Delete</button>
        </div>
      </div>
    </>
  )
}

export default Contacts