import { useState } from 'react'
import './App.css'
import Form from './Components/Form'
import UsersList from './Components/UsersList';

function App() {
  const [users, setUsers] =useState([]);

  const addNewUser = (newUser) => {
    setUsers([...users, newUser])
  }  
  // console.log(users);

  const deleteUser= (id) => {
    setUsers(
      users.filter((user) => user.id !== id)
    )
  }

  const editUser = (id, editedUserInfo) => {
    setUsers(
      users.map((user) => {
        if(user.id === id){
          return editedUserInfo;
        }else{
          return user;
        }
      })
    )
  }
  
  return (
    <>
    <div className="flex gap-3">
      <Form addUser={addNewUser} />
      <UsersList users={users} deleteUser={deleteUser} editUser={editUser} />

    </div>
    </>
  )
}

export default App
