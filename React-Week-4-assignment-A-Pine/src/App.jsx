import { useState } from 'react'
import './App.css'
import { Nav } from './Components/Nav'
import { Title } from './Components/Title'
import { UserProfile } from './Components/UserProfile'
import { Statistics } from './Components/Stats'
import { Dashboard } from './Components/Dashboard'
import { Feedback } from './Components/Feedback'
import { Articles } from './Components/Articles'
import { Footer } from './Components/Footer'

function App() {

  return (
    <>
      <div class="flex w-[92vw]  bg-white mx-[4vw] my-[4vh] ">
        <div class="w-[65%] bg-gray-200 rounded-l-2xl ">
          <div class="w-[90%] h-[93.5%] bg-slate-50 mt-[8%] mx-[6%]">
            <Nav />
            <Title />
            <UserProfile />
            <Statistics />
            <Dashboard />
          </div>          
        </div>
        <div class="w-[32%] bg-gray-200 overflow-hidden">
          <div class="bg-slate-50 h-[85%] overflow-hidden">
            <Feedback />
            <Articles />
            <Footer />
          </div>

        </div>
      </div>

    </>
  )
}

export default App
