import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'


export const Home = () => {
  const [username, setUsername] = useState('')

  const navigate = useNavigate('');
  const handleClick = () => {
    navigate('/profile', { state: { username } });
  }

  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to the Home Page</h1>
      <form className=" flex gap-3" onSubmit={handleClick} >
        <input required type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='User Name' className='outline-none rounded-md border border-black placeholder:text-center '/>
        <button className='border border-black px-1 rounded-md '>Go to profile page</button>
      </form>
    </div>
  )
}