import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="2xl:w-[70vw] mx-auto">
      <h1 className='font-bold text-[26px] text-center text-slate-700'>You Don’t Have a Clue What Your Dog Is Feeling</h1>
      <div className="flex gap-3 justify-between items-center text-[14px]">
        <img src="https://cdn.outsideonline.com/wp-content/uploads/2023/03/Funny_Dog_H.jpg?crop=16:9&width=960&enable=upscale&quality=100" alt="white dog" className='h-[260px] w-[400px] object-contain rounded-xl'/>
        <p className='text-slate-600'>A new study found that humans are terrible at reading canine body language. But with the help of a few experts, you can learn.
        <br />
        <span className='text-[24px] font-bold '>A</span>few months ago, my partner and I went cross-country skiing in the Tahoe area. We brought our dog, Halle, a border collie and German shepherd mix. She quickly got used to the strange sticks attached to our feet and trotted alongside us. While other dogs on the trail were off-leash, ours was clipped into a long line to keep her safe and out of the way of other skiers.
        At one point we stopped to let a skier-dog duo go by, but the dog locked eyes with Halle and stalked toward her. He was somewhat crouched and his body was stiff. This was a red flag to me, but the owner didn’t call back or leash the dog. When he reached Halle the two started fighting and the owner had to pry his dog away.

        </p>
      </div>

    </div>
    </>
  )
}

export default App
