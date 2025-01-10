import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Nav } from './Components/Nav'
import { Home } from './Pages/Home'
import { About } from './Pages/About'
import { Contact } from './Pages/Contact'
import { Services } from './Pages/Services'
import { ServiceDetails } from './Components/ServiceDetails'


function App() {
  
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Nav /> ,
        children: [
          {index: true, element: <Home />},
          {path: 'about', element: <About />},
          {path: 'contact', element: <Contact />},
          {path: 'services', element:<Services />},
          {path: 'services/:id', element: <ServiceDetails />},
        ]
      }
    ]
  )

  return <RouterProvider router={router} />
}

export default App
