import './App.css'
import UserCard from './Components/UserCard'
import { useSelector } from 'react-redux'

function App() {
  const users = useSelector((state) => state.contact.users )
  

  return (
    <>
      <UserCard />
    </>
  )
}

export default App
