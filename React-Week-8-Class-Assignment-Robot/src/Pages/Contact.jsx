import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import robotContact from '../assets/icons/Robot-Contact-Service.png'

export const Contact = ({addNewUser}) => {
  const [fullName, setFullName] = useState('');
  const handleFullName = (e) => {
    setFullName(e.target.value)
  }
  const [email, setEmail] = useState('');
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const [number, setNumber] = useState('');
  const handleNumber = (e) => {
    setNumber(e.target.value)
  }
  const [message, setMessage] = useState('');
  const handleMessage = (e) => {
    setMessage(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    let newUser = {fullName, email, number, message, id:uuid() }
    addNewUser(newUser)

    setFullName('');
    setEmail('');
    setNumber('');
    setMessage('');
    console.log(newUser);
  }

  
  return (
    <div className='flex md:flex h-[90vh] text-white md:w-[80%] place-self-center gap-4 ' >
      <div className="md:w-[50%]  hidden md:flex ">
        <img src={robotContact} alt="" className='object-cover '/>
      </div>
      <div className="p-5 flex flex-col gap-4 md:w-[50%] ">
        <h1 className='text-3xl'>Contact  Us</h1>
        <p className='text-sm'>Use this form for all general enquires. We monitor these responses constantly during working hours. If you are looking to partner with us, please complete the new customer application form instead.</p>
        <form className='flex flex-col gap-8' onSubmit={handleSubmit} >
          <input required onChange={handleFullName} value={fullName} type="text" placeholder='Enter your name' className='px-3 pb-1 py-[1px] autofill:bg-transparent rounded-md bg-transparent border border-violet-300 placeholder:text-sm outline-purple-900 ' />
          <div className="flex gap-3 w-[100%] ">
            <input value={email} onChange={handleEmail} required type="email" placeholder='Enter your email' className='px-3 pb-1 py-[1px] rounded-md bg-transparent border border-violet-300 placeholder:text-sm outline-purple-900 w-[70%] autofill:bg-transparent' />
            <input value={number} onChange={handleNumber} required type="tel" placeholder='Enter your number' className='px-3 pb-1 py-[1px] rounded-md bg-transparent border border-violet-300 placeholder:text-sm outline-purple-900 w-[70%] autofill:bg-transparent' />
          </div>
          <textarea name="Message" value={message} onChange={handleMessage} id="" rows='4' placeholder='Enter your message here ...' className='px-3 pb-1 py-[1px] rounded-md bg-transparent border border-violet-300  placeholder:text-sm outline-purple-900 text-white autofill:bg-transparent '></textarea>
          <button type='submit'className='bg-blue-400 py-1 w-fit px-4 place-self-center rounded-lg ' >Send Your Message</button>
        </form>
      </div>
    </div>
  )
}
