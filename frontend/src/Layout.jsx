import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from './pages/context/UserContext';

export default function Layout() 
{

   const {currentUser, logout} = useContext(UserContext)

  return (
    <div>

<nav class="navbar navbar-expand-lg bg-light pt-4">
  <div class="container">
    <a class="navbar-brand " href="#"><h3>TManager</h3></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <Link to="/" class="nav-link active fs-5" >Home</Link>
        </li>
        {
          currentUser ?
          <>
           <li class="nav-item">
              <Link to="/dashboard" class="nav-link active fs-5">Dashboard</Link>
            </li>
            <li class="nav-item">
                <p onClick={()=>logout()} class="nav-link active fs-5">Logout</p>
            </li>
        </>
          :
          <>
          <li class="nav-item">
            <Link to="/register" class="nav-link active fs-5">Register</Link>
          </li>
          <li class="nav-item">
            <Link to="/login" class="nav-link active fs-5">Login</Link>
          </li>
          </>
        }
      </ul>
    </div>
  </div>
</nav>
    
  <div className='bg-gray-100 text-lg container mx-auto min-h-[90vh]'>
    <Outlet />
    {/* render current route selected */}
  </div>
   
{/* <div>
  FOOTER
</div> */}


    </div>
  )
}
