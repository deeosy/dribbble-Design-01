import { useState } from 'react'
import './App.css'
import { Counter } from './components/counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h2 className='text-[100px] '>Hello</h2> */}
      <Counter />
    </>
  )
}

export default App
