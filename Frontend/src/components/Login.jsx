import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'

const Login = () => {
    const [loginMode, setloginMode] = useState(true)
    return (
        <div>
            <Navbar />

            <div className='flex w-full items-center min-h-screen justify-center'>
                <div className="w-full rounded-xl p-8 shadow-lg max-w-md  max-h-lg bg-white">
                    {
                        loginMode ?
                            <div className='flex flex-col gap-4 '>
                                <h3 className='text-center text-2xl font-bold text-gray-800'>WELCOME BACK</h3>
                                <p className='text-center'>Sign in to continue</p>
                                <input placeholder='Enter Email...' className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-400' type="text" />
                                <input placeholder='Enter Password...' className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-400' type="text" />
                                <button className='w-full py-2 mt-4 bg-pink-400 text-white font-semibold rounded-md hover:bg-pink-500 transition duration-200'>Login</button>
                                <p onClick={() => setloginMode(!loginMode)} className='text-center cursor-pointer hover:text-gray-500'>Create new account</p>
                            </div>
                            : <div className='flex flex-col gap-4 '>
                                <h3 className='text-center text-2xl font-bold text-gray-800'>WELCOME</h3>
                                <p className='text-center'>Sign up to continue</p>
                                <input placeholder='Enter name...' className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-400' type="text" />
                                <input placeholder='Enter email...' className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-400' type="text" />
                                <input placeholder='Enter password...' className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-400' type="text" />
                                <button className='w-full py-2 mt-4 bg-pink-400 text-white font-semibold rounded-md hover:bg-pink-500 transition duration-200'>Register</button>
                                <p onClick={() => setloginMode(!loginMode)} className='text-center cursor-pointer hover:text-gray-500'>Already Registered</p>
                            </div>
                    }
                </div>
            </div>

        </div>
    )
}

export default Login
