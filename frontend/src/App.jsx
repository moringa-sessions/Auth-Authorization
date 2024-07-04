import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Layout from "./Layout";
import NoPage from './pages/NoPage';
import Login from './pages/Login';
import Register from './pages/Register';

import Dashboard from './pages/Dashboard';
import { UserProvider } from './pages/context/UserContext';
import { TaskProvider } from './pages/context/TaskContext';

function App() {

  return (     
     <BrowserRouter>
     <UserProvider>
      <TaskProvider>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      </TaskProvider>
    </UserProvider>
    </BrowserRouter>
  )
}

export default App
