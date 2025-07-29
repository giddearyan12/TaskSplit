import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { useAuthUser } from '../authUser.jsx'

const Login = () => {
    const url = `http://localhost:3000`
    const navigate = useNavigate();
    const [loginMode, setloginMode] = useState(true)
    const [data, setData] = useState({});
    const handleChange=(e)=>{
        const {name, value} =  e.target;
        setData({...data, [name]:value});
    }
    const {authUser, setAuthUser} = useAuthUser();
    const onSubmit=async()=>{

      
        try {
             const response = await axios.post(`${url}/auth/${loginMode?'login':'register'}`,{
            data
        })
        if(response.data.success){
            localStorage.setItem('token', response.data.token)
            navigate('/dashboard')
            setAuthUser({token:response.data.token})
            toast.success('Done')
        }else{
            toast.warn(response.data.msg)
        }
          setData({});
        } catch (error) {
            toast.error(error)
        }
       

    }
    return (
        <div className='overflow-hidden h-screen'>
            <Navbar />
            <div className='flex w-full items-center h-full   justify-center overflow-hidden'>
                <div className="w-full rounded-xl p-8 shadow-lg max-w-md  max-h-lg bg-white">
                    {
                        loginMode ?
                            <div className='flex flex-col gap-4 '>
                                <h3 className='text-center text-2xl font-bold text-gray-800'>WELCOME BACK</h3>
                                <p className='text-center'>Sign in to continue</p>
                                <input onChange={handleChange} value={data.email || ""} name='email' placeholder='Enter Email...' className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-400' type="email" required />
                                <input onChange={handleChange} value={data.password || ""} name='password' placeholder='Enter Password...' className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-400' type="password" required />
                                <button onClick={onSubmit} className='w-full py-2 mt-4 bg-pink-400 text-white font-semibold rounded-md hover:bg-pink-500 transition duration-200'>Login</button>
                                <p onClick={() => setloginMode(!loginMode)} className='text-center cursor-pointer hover:text-gray-500'>Create new account</p>
                            </div>
                            : <div className='flex flex-col gap-4 '>
                                <h3 className='text-center text-2xl font-bold text-gray-800'>WELCOME</h3>
                                <p className='text-center'>Sign up to continue</p>
                                <input onChange={handleChange} value={data.name || ""} name='name' placeholder='Enter name...' className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-400' type="text" required />
                                <input onChange={handleChange} value={data.email || ""} name='email' placeholder='Enter email...' className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-400' type="email" required/>
                                <input onChange={handleChange} value={data.password || ""}  name='password' placeholder='Enter password...' className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-400' type="password" required />
                                <button onClick={onSubmit} className='w-full py-2 mt-4 bg-pink-400 text-white font-semibold rounded-md hover:bg-pink-500 transition duration-200'>Register</button>
                                <p onClick={() => setloginMode(!loginMode)} className='text-center cursor-pointer hover:text-gray-500'>Already Registered</p>
                            </div>
                    }
                </div>
            </div>

        </div>
    )
}

export default Login
