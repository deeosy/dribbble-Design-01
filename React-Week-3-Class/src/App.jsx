import React from 'react'
import { NiceCard } from './components/NiceCard'


const App = () => {
  return (
    <div className="flex gap-4 p-10">
      <NiceCard />
      <NiceCard image="https://www.princeton.edu/sites/default/files/styles/1x_full_2x_half_crop/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=Bg2K7j7J" title="Toy Puddle" description="What is your dog's lifespan? A Princeton geneticist is seeking the keys to canine health and longevity." />
    </div>
  )
}

export default App
