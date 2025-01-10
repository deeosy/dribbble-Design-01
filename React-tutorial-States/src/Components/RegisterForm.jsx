import React from 'react'
import { useState } from 'react'

function RegisterForm() {
  // // using individual data fields
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [displayName, setDisplayName] = useState('');

  // now using an object to display all data fields
  const [formFields, setFormFields] = useState({
    username: "",
    password: "",
    displayName: "",
  });
  // console.log(formFields);
  

  // checking that no ghost entries are added. this will disable the login button till all fields have date
  const isDisabled = !formFields.username|| !formFields.password|| !formFields.displayName
  

  // const handleUsername = (e) => {
  //   setUsername(e.target.value)
  // }
  // const handlePassword = (e) => {
  //   setPassword(e.target.value)
  // }
  // const handleDisplayName = (e) => {
  //   setDisplayName(e.target.value)
  // }

  return (
    <div>
      <h2>Registration Form</h2>
      <form  >
        <div className="">
          <label htmlFor="username">Username</label>
          <input value={formFields.username} type="text" id="username" onChange={(e) => {setFormFields((currentState)=>({...currentState, username: e.target.value}))}} />
        </div>
        <div className="">
          <label htmlFor="password">Password</label>
          <input onChange={(e)=>{setFormFields((currentState)=>({...currentState, password: e.target.value}))}} value={formFields.password} type="text" id="password" />
        </div>
        <div className="">
          <label htmlFor="displayName">Display Name</label>
          <input onChange={(e)=>{setFormFields((currentState)=>({...currentState, displayName: e.target.value}))}} value={formFields.displayName} type="text"  id="displayName" />
        </div>
        <button  disabled={isDisabled} >Login</button>
      </form>

      <h2>Username: {formFields.username} </h2>
      <h2>Password: {formFields.password} </h2>
      <h2>Display Name: {formFields.displayName} </h2>
    </div>
  )
}

export default RegisterForm