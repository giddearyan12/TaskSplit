import { Routes, Route } from "react-router-dom"
import Home from "./components/Home.jsx"
import Login from "./components/Login"
import Navbar from "./components/Navbar.jsx"

const App = () => {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    
    </div>
  )
}

export default App
