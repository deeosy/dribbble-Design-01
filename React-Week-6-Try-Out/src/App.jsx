import { useState } from 'react'
import './App.css'
import Form from './Components/Form'
import UsersList from './Components/UsersList';

function App() {
  const [users, setUsers] =useState([]);

  const addNewUser = (newUser) => {
    setUsers([...users, newUser])
    
  }  
  console.log(users);
  
  return (
    <>
    <div className="flex gap-3">
      <Form addUser={addNewUser} />
      <UsersList users={users} />

    </div>
    </>
  )
}

export default App
