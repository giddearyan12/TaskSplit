import React, { useEffect } from 'react'
import Navbar from './Navbar.jsx'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { useState } from 'react'
import { toast } from 'react-toastify'

const Dashboard = () => {
    const url = `http://localhost:3000`;
    const [openModal, setOpenModal] = useState(false);
    const [agentData, setAgentData] = useState({})
    const [list, setList] = useState([])
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setAgentData({ ...agentData, [name]: value })
    }

    const getAgents = async () => {
        try {
            const response = await axios.get(`${url}/agent/list`);
            setList(response.data.agents);
        } catch (error) {
            toast.error(error)
        }
    }

    useEffect(() => {
      getAgents();
    }, [])
    


    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${url}/agent/add`, {
                data: agentData
            })
            if (response.data.success) {
                toast.success("Success")
                setOpenModal(false)
                getAgents();
            }
            else {
                toast.warn(response.data.msg)
            }

        } catch (error) {
            toast.error(error)
            console.log(error)
        }
    }
    return (
        <div>
            <Navbar />
            <div className='w-full px-10'>
                <table className='w-full border border-collapse mt-10'>
                    <thead>
                        <tr>
                            <th className='w-1/4 border px-5 py-2 bg-gray-200 text-start'>Name</th>
                            <th className='w-1/4 border px-5 py-2 bg-gray-200 text-start'>Email</th>
                            <th className='w-1/4 border px-5 py-2 bg-gray-200 text-start'>Mobile No.</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                list.map((agent) => (
                                    <tr key={agent.email}>
                                        <td className='border px-5 py-2'>{agent.name}</td>
                                        <td className='border px-5 py-2'>{agent.email}</td>
                                        <td className='border px-5 py-2'>{agent.phone}</td>
                                    </tr>
                                ))
                            }
                    </tbody>
                </table>
                <div className="flex justify-end mt-5">
                    <button onClick={() => setOpenModal(true)} className="bg-pink-300 px-10 py-2 rounded-xl font-semibond mb-5">Add Agent</button>
                    <button onClick={() => navigate('/csv')} className="bg-pink-300 px-10 py-2 rounded-xl font-semibond mb-5 ml-3">Distribution Table</button>
                </div>
            </div>
            {
                openModal ? (
                    <div className="fixed inset-0 bg-gray-400/55 bg-opacity-40 flex items-center justify-center z-50">
                        <div className="relative bg-white w-[500px] py-5 px-5 rounded-xl shadow-2xl">
                            <h2 className="text-xl text-center font-semibold mb-4">Add Agent</h2>
                            <button onClick={() => setOpenModal(false)} className='absolute top-5 right-3 text-red-500 rounded-2xl px-2 py-1 font-bold  text-sm'>X</button>
                            <form onSubmit={onSubmit} className='flex flex-col px-5 space-y-4'>
                                <input onChange={handleChange} className='border border-gray-200 px-4 py-2' type="text" name='name' placeholder='Enter name' required value={agentData.name || ""} />
                                <input onChange={handleChange} className='border border-gray-200 px-4 py-2' type="email" name='email' placeholder='Enter email' required value={agentData.email || ""} />
                                <input onChange={handleChange} className='border border-gray-200 px-4 py-2' type="tel" name='phone' placeholder='Enter phone' required value={agentData.phone || ""} />
                                <button type='submit' className='bg-pink-300 px-10 py-2 rounded-xl font-semibond mb-5'>Add</button>
                            </form>
                        </div>
                    </div>
                ) : null
            }

        </div>
    )
}

export default Dashboard
