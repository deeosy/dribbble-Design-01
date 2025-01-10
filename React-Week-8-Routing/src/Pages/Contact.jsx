import { NavLink, Outlet } from 'react-router-dom'

export const Contact = () => {

  return (
  <>
    <div className="flex flex-col justify-start items-center my-[100px] h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Contact Us</h1>
    <nav className='flex gap-4 text-lg font-semibold text-blue-400 '>
      <NavLink to='favorites' className={({ isActive }) => isActive ?'text-blue-500' : ''}   >Favorites</NavLink>
      <NavLink to='settings' className={({ isActive }) => isActive ?'text-blue-500' : ''} >Settings</NavLink>
    </nav>
    <Outlet />
    </div>
  </>
  )
}
