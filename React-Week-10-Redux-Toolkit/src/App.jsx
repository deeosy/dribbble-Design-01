import { useDispatch ,useSelector } from 'react-redux'
import './App.css'
import {increment, decrement, reset } from './Slices/CounterSlice'

function App() {

  const state = useSelector((state) => {
    console.log(state.counterReducer.value);
    // if (state.counterReducer.value > 0){
      
    // }
    return state.counterReducer.value
  })
  // console.log(state);
  const dispatch = useDispatch()
  const handleIncreament = () => dispatch(increment())
  const handleReset =() => dispatch(reset())
  const handleDecreament = ()=>dispatch(decrement())
  
  
  return (
    <>
      <div className="text-2xl my-10 w-[400px] mx-auto  ">
        <h1 className="text-3xl font-bold underline">
          Counter
        </h1>
        {/* <h1 className={`mb-3 text-3xl ${state > 0 ? 'text-green-500': state <0 ? 'text-red-400' : 'text-black'}`} >{state}</h1> */}
        <h1 className={`mb-3 text-3xl ${state > 0 ? 'text-green-400' : state <0 ? 'text-amber-300' : 'text-black' }`} >{state}</h1>

        <div className="flex justify-center gap-3">
          <button className=' rounded border-2 hover:border-blue-400 hover:text-white px-2 hover:cursor-pointer hover:bg-blue-400 '  onClick={handleIncreament}  >+</button>
          <button className=' rounded border-2 hover:border-blue-400 hover:text-white px-2 hover:cursor-pointer hover:bg-blue-400' onClick={handleReset} >reset</button>
          <button className=' rounded border-2 hover:border-blue-400 hover:text-white px-[10px] hover:cursor-pointer hover:bg-blue-400' onClick={handleDecreament} >-</button>
        </div>
      </div>
    </>
  )
}

export default App
