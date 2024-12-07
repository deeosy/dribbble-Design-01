import { useState } from 'react'
import './App.css'
import { Form } from './Components/Form'
import { UsersList } from './Components/UsersList'
import { v4 as uuid } from "uuid"

function App() {
  
  const [users, setUsers] = useState([
    {name: 'Derrode Walter', email: 'deeosy2@ymail.com', password: '122hjik4', id: uuid(), },
    {name: 'Derrode Walter', email: 'deeosy2@ymail.com', password: '122hjik4', id: uuid(),},
  ]);



  return (
    <>
      <div className="flex gap-10 justify-around">
        <Form setUsers={setUsers} />
        <UsersList users={users} />
      </div>
    </>
  )
}

export default App
