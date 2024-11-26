import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App({school}) {

  return (
    <>
      <h1 className='text-blue-400 '>Hello World !!</h1>
      <WelcomeComponent school="Codetrain Ghana" />
    </>
  )
}

class WelcomeComponent extends Component{
  render(){
    return(
      <div className="">
        <h1>{this.props.school} is awesome, react works!!!</h1>
      </div>
    )
  }
}

export default App
