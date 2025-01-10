import React from 'react'
// import './App.css'

function LoginForm() {
  return (
    <div>
      <form className='' onSubmit={
          (event) => {event.preventDefault(); 
            const formData = new FormData(event.target);
            const username = formData.get('username');
            const password = formData.get('password');
            console.log(username, password)
          }} >
        <label htmlFor="userName">User Name</label>
        <input name="username" type="text" id='userName' onChange={(event)=>{event.target.value
          // console.log(event.target.value);          
        }} />
        <label htmlFor="password">Password</label>
        <input name="password" type="password" id='password' onChange={(event) => {event.target.value
          // console.log(event.target.value)
        }} />
        <button>Login</button>
      </form>
    </div>
  )
}

export default LoginForm