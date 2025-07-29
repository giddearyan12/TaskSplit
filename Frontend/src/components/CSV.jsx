import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import Navbar from './Navbar';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
const CSV = () => {
    const url = `http://localhost:3000`;
    const [openModal, setOpenModal] = useState(false);
    const [agentData, setAgentData] = useState({})
    const [file, setFile] = useState(null)
    const navigate = useNavigate();
    const [list, setList] = useState([])

    const handleChange = (e) => {
        setFile(e.target.files[0])
    }
  


    const getTasks = async () => {
        try {
            const response = await axios.get(`${url}/api/gettasks`);
            setList(response.data.tasks);
            console.log(response.data)
        } catch (error) {
            toast.error(error)
        }
    }

    useEffect(() => {
        getTasks();
    }, [])
      const handleUpload = async (e) => {
        e.preventDefault()
        if (!file) {
            toast.warn('Select File');
            return;
        }
        console.log(file)
        const formData = new FormData();
        formData.append('file', file);

        try {
            await axios.post(`${url}/api/upload`, formData);
            toast.success('File Uploaded Successfully');
            setOpenModal(false);
            setFile(null);
            gettasks();
        } catch (error) {
            console.log(error);
            toast.error('Upload failed');
        }
    };

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
                            <th className='w-1/4 border px-5 py-2 bg-gray-200 text-start'>Agent</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map((task, index) => (
                                <tr key={index}>
                                    <td className='border px-5 py-2'>{task.firstName}</td>
                                    <td className='border px-5 py-2'>{task.phone}</td>
                                    <td className='border px-5 py-2'>{task.notes}</td>
                                    <td className='border px-5 py-2'>{task.agentId.name}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <div className="flex justify-end mt-5">
                    <button onClick={() => setOpenModal(true)} className="bg-pink-300 px-10 py-2 rounded-xl font-semibond mb-5">Add File</button>
                    <button onClick={() => navigate('/dashboard')} className="bg-pink-300 px-10 py-2 rounded-xl font-semibond mb-5 ml-3">Agents Table</button>

                </div>
            </div>
            {
                openModal ? (
                    <div className="fixed inset-0 bg-gray-400/55 bg-opacity-40 flex items-center justify-center z-50">
                        <div className="relative bg-white w-[500px] py-5 px-5 rounded-xl shadow-2xl">
                            <h2 className="text-xl text-center font-semibold mb-4">Add Agent</h2>
                            <button onClick={() => setOpenModal(false)} className='absolute top-5 right-3 text-red-500 rounded-2xl px-2 py-1 font-bold  text-sm'>X</button>
                            <form onSubmit={handleUpload} className='flex flex-col px-5 space-y-4'>
                                <input onChange={handleChange} className='border border-gray-200 px-4 py-2' accept='.csv' type="file" name='file' />
                                <button type='submit' className='bg-pink-300 px-10 py-2 rounded-xl font-semibond'>Add</button>
                            </form>
                        </div>
                    </div>
                ) : null
            }

        </div>
    )
}

export default CSV
