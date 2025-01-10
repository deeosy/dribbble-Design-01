
import { NavLink, Outlet } from 'react-router-dom'

export const Nav = () => {

  return (
    <>
      <nav className='flex justify-around text-xl '>
        <NavLink to='/' className={({ isActive }) => isActive ? 'text-blue-500' : ''}>Home</NavLink>
        <div className=" flex gap-4">
          <NavLink to='/about' className={({ isActive }) => isActive ? 'text-blue-500' : ''}>About</NavLink>
          <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-blue-500' : ''}>Contact</NavLink>
          <NavLink to='products/:id' className={({ isActive }) => isActive ? 'text-blue-500' : ''} >Products</NavLink>
          <NavLink to='profile' className={({isActive})=> isActive ? 'text-blue-500': ''} >Profile</NavLink>
        </div>
      </nav>
      <Outlet />
    </>
    
  )
}
