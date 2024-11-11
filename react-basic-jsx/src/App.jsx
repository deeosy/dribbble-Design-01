import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SixUndergroundCard } from './component/SixUndergroundCard'
import { NowhereCard } from './component/NowhereCard'
import { HeartofStone } from './component/HeartOfStone' 

function App() {

  return (
    <div className='bg-gray-700 h-[100vh] w-[100vw] xl:w-[70vw] font-serif text-white mx-auto  '>
      <div className="w-[100%] mx-auto text-center py-[24px]">
        <h1 className='text-[26px] md:text-[46px] '>The <span className='text-yellow-200 '>Best</span> Movies According to Walter</h1>
        <h3 className='text-[24px]  '>My top 3 movies of all-time. </h3>
      </div>
        <hr className='mt-[24px] '/>
      <div className="flex flex-col md:flex-row gap-2 justify-between p-[34px]">
        <SixUndergroundCard />
        <NowhereCard />
        <HeartofStone />
      </div>
    </div>
  )
}

export default App
