import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { MovieCardInfo } from './component/MovieCardInfo'
// import { NowhereCard } from './component/NowhereCard'
// import { HeartofStone } from './component/HeartOfStone' 
import { cardInfo } from './component/cardInfo'


function App() {

  return (
    <div className='bg-gray-700 h-[100%] w-[100vw] xl:w-[78vw] font-serif text-white mx-auto  '>
      <div className="w-[100%] mx-auto text-center py-[24px]">
        <h1 className='text-[26px] md:text-[46px] '>The <span className='text-yellow-200 '>Best</span> Movies According to Walter</h1>
        <h3 className='text-[24px]  '>My top 3 movies of all-time. </h3>
      </div>
        <hr className='mt-[24px] '/>
        <MovieCardInfo cardInfo={cardInfo} />
        {/* <MovieCardInfo title="Heart of Stone" description="Heart of Stone is a 2023 American spy action thriller film where an intelligence operative for a shadowy global peacekeeping agency races to stop a hacker from stealing." image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsWg5R2hxpsNpNieQuFoPUWV2Rzd6UW5Dnrm6wHJkCkw80loCr" />
        <MovieCardInfo title="NOWHERE" description="Taking place in a dystopian setting, the plot follows Mia (Castillo), separated from her husband after a totalitarian government takes over their home country." image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRw1hlcjGT5cssPhwm5UH9lpiaYGUzsGrcuFdoDZZZPyaUxi6-_"/> */}
    </div>
  )
}

export default App
