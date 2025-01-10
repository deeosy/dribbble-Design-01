import { createBrowserRouter, RouterProvider,} from 'react-router-dom';
import './App.css'
import { Home } from './Pages/Home';
import { Contact } from './Pages/Contact';
import { About } from './Pages/About.Jsx';
import { Error } from './Pages/Error';
import { Nav } from './Components/Nav';
import { Favorites } from './Pages/Favorites';
import { Settings } from './Pages/Settings';
import { Products } from './Pages/Products';
import { Profile } from './Pages/Profile';

function App(){
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Nav />,
        children: [
          {index: true, element: <Home /> },
          {path: "about", element: <About /> },
          {
            path: "contact", 
            element: <Contact />, 
            children: [
              {path:'favorites', element:<Favorites /> },
              {path:'settings', element:<Settings />}, 
            ] 
          },
          {path:'products/:id', element:<Products />},
          {path:'profile', element: <Profile />},
          {path: "*", element: <Error/> },
        ]
      }
    ]
  );
  return<RouterProvider router={router} />;
}

export default App;

// //numbers indicate steps to follow in setting up Routing

// function App() {
//   // //am commenting this out because i have an issue placing the nav component on multiple pages by calling it only in the App component
//   // <Nav />
//   const router = createBrowserRouter(  //1
//     createRoutesFromElements(   // 2
//       //3 & 4 below
//       <>
//         <Route>  
//           <Route index element={<Home />} />
//           <Route path='/about' element={<About />} />
//           <Route path='/contact' element={<Contact />} />
//           <Route path='*' element={<Error />} />
//         </Route>
//       </>
//     )
//   );

//   return <RouterProvider router={router} />   //5
// }

// export default App
