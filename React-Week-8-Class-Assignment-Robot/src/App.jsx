import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Nav } from './Components/Nav'
import { About } from './Pages/About'
import { Services } from './Pages/Services'
import { Contact } from './Pages/Contact'
import { Error } from './Pages/Error'
import { Home } from './Pages/Home'
import { useState } from 'react'
import  SeviceDetails  from './Components/SeviceDetails'


function App() {

  const [users, setUsers] = useState([]);
  const addNewUser = (newUser) => {
    setUsers([ ...users, newUser ])
  }

  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Nav />,
        children: [
          {index: true, element: <Home /> },
          {path: 'about', element: <About />},
          {path: 'services', element: <Services />},
          {path: 'services/:id', element: <SeviceDetails />},
          {path: 'contact', element:<Contact users={users} addNewUser={addNewUser} />},
          {path: '*', element:<Error />}
        ]
      }
    ]
  )


  return <>
  <div className='bg-gradient-to-r from-purple-500 to bg-pink-400 h-max  '>
    <RouterProvider router={router} />
  </div>
  </>
}

export default App
