import { useState } from 'react'
import './App.css'
import { Users } from './components/Users'
import { UsersForm } from './components/UsersForm'
import { v4 as uuid } from "uuid"

function App() {
  const [users, setUsers] = useState([]);

  const addNewUser = (newUser) => {
    //creating a new array by adding a new user to the previous array using the spread operator
    setUsers([...users, newUser ] )
  }

  return (
    <>
    <div className="flex gap-10 ">
      <Users users={users}  />
      <UsersForm addUser={addNewUser} />
    </div>
    </>
  )
}

export default App
