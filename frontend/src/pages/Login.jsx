import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './context/UserContext'


export default function Login() 
{

  const {login} = useContext(UserContext)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()


    console.log(email, password);
    
    function handleSubmit(e){
        e.preventDefault()

        login(email, password)

    }

  return (
 <section class="bg-light py-3 py-md-5">
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
        <div class="card border border-light-subtle rounded-3 shadow-sm">
          <div class="card-body p-3 p-md-4 p-xl-5">
            <div class="text-center mb-3">
            </div>
            <h2 class="fs-6 fw-normal text-center text-secondary mb-4">LOGIN</h2>
            <form onSubmit={handleSubmit} >
              <div class="row gy-2 overflow-hidden">
                <div class="col-12">
                  <div class="form-floating mb-3">
                    <input type="email"  value={email || ""} onChange={(e)=> setEmail(e.target.value)} class="form-control" placeholder="name@example.com" required />
                    <label class="form-label">Email</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-floating mb-3">
                    <input type="password" value={password || ""} onChange={(e)=> setPassword(e.target.value)} class="form-control" name="password" placeholder="Password" required />
                    <label  class="form-label">Password</label>
                  </div>
                </div>
                
                <div class="col-12">
                  <div class="d-grid my-3">
                    <button class="btn btn-primary btn-lg" type="submit">Login</button>
                  </div>
                </div>
                <div class="col-12">
                  <p class="m-0 text-secondary text-center">Dont have an account? <Link to="/register" class="link-primary text-decoration-none">Sign Up</Link></p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}
