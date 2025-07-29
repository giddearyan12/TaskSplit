import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { useAuthUser } from '../authUser.jsx';

const Navbar = () => {
    const [isLogin, setIsLogin] = useState(false);
    const token = localStorage.getItem('token')
    const {authUser, setAuthUser}=useAuthUser();
    const handleLogout=()=>{
      localStorage.removeItem('token');
      setAuthUser(null)
      navigate('/login')
    }
    useEffect(() => {
        if(token){
            setIsLogin(true);
        }
    }, [token])
    
    const navigate = useNavigate();
  return (
    <div className='w-full h-18 bg-white/90 px-5 py-5 shadow-xl flex justify-between items-center'>
      <h1 className='text-2xl text-black font-bold'>Task<span className='text-pink-500'>Split</span></h1>
      {
        !isLogin? <button onClick={()=>navigate('/login')} className='bg-pink-400 text-white font-bold px-5 py-2 rounded-xl'>Login</button>:
        <button onClick={handleLogout} className='bg-pink-400 text-white font-bold px-5 py-2 rounded-xl'>Logout</button>

      }
     
    </div>
  )
}

export default Navbar
