import { useState } from 'react'
import './App.css'
import LoginForm from './Component/LoginForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoginForm />
    </>
  )
}

export default App
