import { Routes, Route } from "react-router-dom"
import Home from "./components/Home.jsx"
import { useState, useEffect } from "react";
import Login from "./components/Login"
import { ToastContainer, toast } from 'react-toastify';
import Dashboard from "./components/Dashboard.jsx";
import CSV from "./components/CSV.jsx";
import { useAuthUser } from "./authUser.jsx";

const App = () => {
  const {authUser, setAuthUser} = useAuthUser();
  return (
    <div>
    <Routes>
      <Route path="/" element={authUser?<Dashboard/>:<Home/>}/>
      <Route path="/login" element={authUser?<Dashboard/>:<Login/>}/>
      <Route path="/dashboard" element={authUser?<Dashboard/>:<Home/>}/>
      <Route path="/csv" element={authUser?<CSV/>:<Home/>}/>

    </Routes>
    <ToastContainer/>
    
    
    </div>
  )
}

export default App
