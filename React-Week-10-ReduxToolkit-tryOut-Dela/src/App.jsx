
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByAmount } from './Slice/slice'

function App() {
  const dispatch = useDispatch()
  const state = useSelector((state) => {
    return state.counterReducer.value
  })
  const handleAddBtn = () => {
    dispatch(increment())
  }

  const handleSubBtn =() => {
    dispatch(decrement())
  }

  const handleAddThree = () => {
    dispatch(incrementByAmount(2))
  }



  return (
    <>
      <h1>{state}</h1>
      <button onClick={handleAddBtn} >add</button>
      <button onClick={handleSubBtn} >sub</button>
      <button onClick={handleAddThree} >x 2</button>
    </>
  )
}

export default App
