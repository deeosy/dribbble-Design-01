import { useState } from 'react'
import './App.css'
import RegisterForm from './Components/RegisterForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RegisterForm />
    </>
  )
}

export default App
