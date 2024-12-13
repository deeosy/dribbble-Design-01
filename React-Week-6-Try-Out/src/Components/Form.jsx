import React from 'react'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'

function Form(props) {
  const [name, setName]= useState("")
  const handleName = (e) => {
    setName(e.target.value)
  }
  const [email, setEmail]= useState("")
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const [gen, setGen]= useState("")
  const handleGen = (e) => {
    setGen(e.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    let newUser ={
      name: name,
      email: email,
      gen: gen,
      id: uuid(),
    }
    console.log(newUser);
    
      props.addUser(newUser)
      setName("");
      setEmail("");
      setGen("");
    
  }


  return (
    <div>
      <form onSubmit={handleSubmit} className='flex flex-col w-[200px] border border-black p-4 ' >
        <input required value={name} onChange={handleName} type="text" placeholder='Full Name'className='border border-black p-1 rounded-md '/>
        <input required value={email} onChange={handleEmail} type="email" placeholder='Email' className='border border-black p-1 rounded-md my-2 '/>
        <input required value={gen} onChange={handleGen} type="number" placeholder='Gen' className='border border-black p-1 rounded-md '/>
        <input type="submit" className='mt-2 border border-black p-1 rounded-md w-[80px] place-self-center  ' />
      </form>
    </div>
  )
}

export default Form