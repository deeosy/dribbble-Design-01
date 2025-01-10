import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Nav } from './Components/Nav'
import { Home } from './Pages/Home'
import { Individuals } from './Pages/Individuals'
import { Teams } from './Pages/Teams'
import { Enterprise } from './Pages/Enterprise'
import { LogIn } from './Pages/LogIn'

function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Nav /> ,
        children: [
          {index: true, element: <Home />},
          {path: 'individuals', element:<Individuals />},
          {path: 'teams', element:<Teams />},
          {path: 'login', element:<LogIn />},
          {path: 'enterprise', element:<Enterprise />},
        ],
      }
    ]
  )
  return<>
    <RouterProvider router={router} />
  </> 
}

export default App
