import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
   <nav className='w-full  h-[5rem] flex justify-center fixed inset-0'>
    <div className='w-[80%] bg-white flex items-center justify-between'>
    <img src="/assets/logo.png" alt="logo.png"  className='w-[10%] h-full  object-cover'/>
    <div className='flex gap-[1rem]'>
    <NavLink  className={'bg-slate-200 text-center font-medium p-1 rounded-full w-[5rem] hover:bg-slate-400'} to={'/login'}>Login</NavLink>
    <NavLink className={'bg-slate-200 text-center font-medium  p-1 rounded-full w-[5rem] hover:bg-slate-400'} to={'/signup'}>Signup</NavLink>
    </div>
    </div>
   </nav>
  )
}

export default Navbar
