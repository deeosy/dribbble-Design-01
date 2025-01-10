
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Nav } from './Components/Nav'
import { Home } from './Pages/Home'
import { About } from './Pages/About'

function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Nav /> ,
        children: [
          {index: true, element: <Home /> },
          {path: 'about', element: <About />}
        ]
      }
    ]
  )

  return <RouterProvider router={router} />
}

export default App
