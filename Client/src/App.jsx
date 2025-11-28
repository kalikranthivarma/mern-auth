import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'
import Navbar from './Navbar.jsx'
import Dashboard from './Dashboard.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'



export default function App() {
  return (
    <div>
   
      <Navbar />
      <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/login" element={<Login/>}/>
           <Route path="/register" element={<Register/>}/>
           <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard/>
            </ProtectedRoute>
           } />
      </Routes>
       
    </div>
  )
}
