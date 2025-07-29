import React from 'react'
import { useNavigate } from 'react-router'

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div className='w-full h-18 bg-white/90 px-5 py-5 shadow-xl flex justify-between items-center'>
      <h1 className='text-2xl text-black font-bold'>Task<span className='text-pink-500'>Split</span></h1>
      <button onClick={()=>navigate('/login')} className='bg-pink-400 text-white font-bold px-5 py-2 rounded-xl'>Login</button>
    </div>
  )
}

export default Navbar
