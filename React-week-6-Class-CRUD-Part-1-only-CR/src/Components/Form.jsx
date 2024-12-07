import { useState } from "react"
import { v4 as uuid } from "uuid";



export function Form(props){

  const [name, setName] = useState("");
  
  const handleName = (e) => {
    setName(e.target.value);
  }

  const [email, setEmail] = useState("");
  
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const [password, setPassword] = useState("");
  
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    let user = {
      name,
      email,
      password,
      id: uuid(),
    }
    console.log(user);
    
    props.setUsers((previousUserArray) => [...previousUserArray, user])
    setName("");
    setEmail("");
    setPassword("");

  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2 mt-[20px] outline-none ">
        <input onChange={handleName} value={name} type="text" className="placeholder:text-center border border-black rounded-md p-1 outline-none" placeholder="Name" />
        <input onChange={handleEmail} value={email} type="email" className="outline-none border border-black rounded-md p-1 placeholder:text-center " placeholder="eMail"  />
        <input onChange={handlePassword} value={password} type="password" className="outline-none border border-black rounded-md p-1 placeholder:text-center " placeholder='Password'  />
        <input type="submit" className="border border-black rounded-md place-self-center p-1 w-[80px] "  />
      </form>
    </>
  )
}