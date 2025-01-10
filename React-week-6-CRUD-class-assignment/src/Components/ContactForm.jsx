import { v4 as uuid} from 'uuid'
import React from 'react'
import { useState } from 'react'


function ContactForm(props) {
  const [name, setName] = useState('');
  const handleName = (e) => {
    setName(e.target.value)
  }
  const [phoneNumber, setPhoneNumber] = useState('');
  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value)
  }
  const [location, setLocation] = useState('')
  const handleLocation = (e) => {
    setLocation(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(name.length > 0 && phoneNumber.length) {
      let contact = {name, phoneNumber, location, id:uuid(),}
      props.addContact(contact);
      setName("");
      setPhoneNumber("");
      setLocation("");
    }
  }

  return (
    <div>
      <h2 className='text-center text-2xl mb-3 ' >Contact Form</h2>
      <form className='flex flex-col w-[280px] mx-auto ' onSubmit={handleSubmit}>
        <input value={name} onChange={handleName} type="text" placeholder='Name' className='border border-black py-1 rounded-md placeholder:text-center outline-none' required />
        {/* <input value={phoneNumber} onChange={handlePhoneNumber} type="tel" placeholder='Phone Number' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4} ' className='border border-black py-1 rounded-md my-3 placeholder:text-center outline-none '/> */}
        <div className="flex flex-col my-3">
          <input onChange={handlePhoneNumber} value={phoneNumber} type="tel" id="phone" name="phone" 
          pattern="^\+?\d{1,4}?\s?\(?\d{1,3}?\)?[\s.-]?\d{1,3}[\s.-]?\d{1,4}$"
          placeholder="Enter your phone number" required className='border border-black py-1 rounded-md placeholder:text-center outline-none' />
          <small>Example: +1 234-567-8901</small>
        </div>
        <input value={location} onChange={handleLocation} type="text" placeholder='Location' className='border border-black py-1 rounded-md placeholder:text-center outline-none'/>
        <input type="submit" value='Send' className='w-[30%] place-self-center border border-black rounded-md my-3 '/>
      </form>    
    </div>
  )
}

export default ContactForm