import { useState } from "react"

export function Form(){

  const [name, setName ] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword ] = useState("");
  const [users, setUsers] = useState([]);

  const user={
    name,
    email,
    password,
  }


  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(user)
    // console.log("Email: ", e.target.value)
    // console.log("Password: ", e.target.value)
    // users.push(user);
    setUsers([...users, user])
    console.log(users)

    setName("");
    setEmail("");
    setPassword("");
  }
 
  return (
    <div className="w-[360px] p-[30px] mx-auto  ">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2 " >
        <input value={name} onChange={handleName} type="text" name="" id="" placeholder="Full Name" className="border border-white px-2 py-1 rounded-md bg-blue-300 text-white outline-none placeholder:text-center placeholder:text-white" />
        <input value={email} onChange={handleEmail} placeholder="Email Address" type="email"   className="border border-white px-2 py-1 rounded-md  bg-blue-300 text-white outline-none placeholder:text-center placeholder:text-white  " />
        <input value={password} onChange={handlePassword} placeholder="Password" type="password" className="border border-white px-2 py-1 rounded-md  bg-blue-300 text-white outline-none placeholder:text-center placeholder:text-white " />
        <input type="submit" className=" border border-white px-2 py-1 w-[50%] place-self-center rounded-md bg-blue-400 text-white hover:cursor-pointer " />
      </form>
    </div>
  )
}