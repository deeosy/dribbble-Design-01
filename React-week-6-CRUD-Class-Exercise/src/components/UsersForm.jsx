import { useState } from "react"
import { v4 as uuid } from "uuid"


export function UsersForm({addUser}) {

 
  
  const [name, setName] =useState('');
  const [email, setEmail] =useState('');
  const [gen, setGen] =useState('');

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleEmail = (e) => { 
    setEmail(e.target.value)
  }

  const handleGen = (e) => {
    setGen(e.target.value)
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();

    if(name.length > 0 && email.length > 0 && gen.length > 0) {
      let user = {
        name, 
        email,
        gen,
        id: uuid(),
      }
  
      addUser(user);
  
      console.log(user);
      setName("");
      setEmail("");
      setGen("");
    }
  }

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="flex flex-col" >
        <input onChange={handleName} value={name} className="border border-black p-1 rounded-md my-1" type="text" placeholder="Name" />
        <input value={email} onChange={handleEmail} className="border border-black p-1 rounded-md my-1" type="email" placeholder="Email" />
        <input value={gen} onChange={handleGen} className="border border-black p-1 rounded-md my-1" type="text" placeholder="Gen ?" />
        <input className="border border-black w-[80px] place-self-end rounded-md " type="submit"  />
      </form>
    </div>
  )
}