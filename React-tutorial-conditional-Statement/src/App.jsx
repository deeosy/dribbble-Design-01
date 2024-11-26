import { useState } from 'react'
import './App.css'
import { ConditionalRendering } from './components/ConditionalRendering'
import { MoreThan2Outcomes } from './components/conditionalRenderingWithMoreThanTwoOutcomes'
import { ConditionalRenderingWithSwitch } from './components/conditionalRenderingWithSwitchStatement'



function App() {

  return (
    <>
      <ConditionalRendering />
      <br /><br /><br /><br />
      <MoreThan2Outcomes />
      <ConditionalRenderingWithSwitch />
    </>
  )
}

export default App
