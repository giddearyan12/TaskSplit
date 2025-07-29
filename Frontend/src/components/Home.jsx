import React from 'react'
import Navbar from './Navbar'
import Login from './Login'

const Home = () => {
    return (
        <div>
            <div className="w-full h-screen flex flex-col bg-[radial-gradient(circle,_#fce7f3,_#fbcfe8)] backdrop-blur-sm">
                <nav className="w-full h-18 z-50 sticky top-0">
                    <Navbar />
                </nav>
                <div className="relative flex-1">
                    <div className="absolute top-60 right-105 w-18 h-18 bg-teal-200 rounded-full animate-bounce"></div>
                    <div className="absolute top-25 left-70 w-18 h-18 bg-yellow-200 rounded-full blur-md"></div>
                    <div className="absolute top-40 right-35 w-18 h-18 bg-purple-200 rounded-full blur-md"></div>
                    <div className="absolute w-18 h-18 top-95 left-180 bg-purple-200 rounded-full animate-bounce"></div>
                    <div className="absolute w-18 h-18 top-130 left-50 bg-blue-200 rounded-full animate-bounce"></div>
                    <div className="absolute w-18 h-18 top-140 right-80 bg-red-200 rounded-full blur-md"></div>


                    <div className="flex flex-col justify-center items-center gap-5  w-full h-full z-20 relative">
                        <p className="text-6xl typewriter text-pink-500 font-bold">Welcome to <span className='text-black'>Task</span>List</p>

                        <div className="max-w-3xl bg-white/50 backdrop-blur-md rounded-2xl shadow-lg z-30 flex flex-col items-center px-6 py-8 space-y-4 border border-gray-200">

                            <p className="text-2xl text-gray-700 leading-relaxed text-center font-medium">
                                A web app where admins upload contact lists, and tasks are automatically divided among agents with a clear dashboard view.
                            </p>
                            <h3 className="text-4xl font-bold text-black">
                                Task<span className="text-pink-500">Split</span>
                            </h3>
                        </div>

                    </div>
                </div>


            </div>

        </div>

    )
}

export default Home
