import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UserProfile } from './components/UserProfile'

function App() { 

  return (
    <div>
      <h1>
        Root Component
        <UserProfile />
      </h1>
    </div>
  )
}

export default App
