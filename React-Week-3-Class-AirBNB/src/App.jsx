import { useState } from 'react'
import './App.css'
import { NavbarDefault } from './components/Nav'
import { CardDefault } from './components/Card'

function App() {

  return (
    <>
      <div className="">
        <NavbarDefault />
        <div className="p-10">
          <CardDefault />
          <CardDefault />
          <CardDefault />
          
        </div>

      </div>

    </>
  )
}

export default App
