import { useState } from "react"


export function Counter() {
  const [count, setCount] = useState(0)

  const handleIncrease=() => {
    setCount(count + 1)
  }
  const handleDecrease=() => {
    setCount(count - 1)
  }
  return(
    <div className="border border-black p-10 w-[340px] mx-auto mt-[200px] flex flex-col items-around ">
      <h2 className="text-[30px] text-center mb-4" >{count}</h2>
      <div className="flex justify-between">
        <button className=" text-[24px] border border-black px-2 px-1 rounded-md"
        onClick={handleIncrease}
        >Increase</button>
        <button className=" text-[24px] border border-black px-2 px-1 rounded-md"
        onClick={handleDecrease}
        >Decrease</button>
      </div>
    </div>
  )
}