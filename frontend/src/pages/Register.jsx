import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './context/UserContext'


function Register() 
{

  const {register} = useContext(UserContext)



  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [repeatPassword, setRepeatPassword] = useState()
  const [name, setName] = useState()

  console.log(email, password, repeatPassword, name);
  
  function handleSubmit(e){
    e.preventDefault()

    register(name, email, password)
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
            <h2 class="fs-6 fw-normal text-center text-secondary mb-4">REGIESTER NEW ACCOUNT</h2>
            <form onSubmit={handleSubmit} >
              <div class="row gy-2 overflow-hidden">
                <div class="col-12">
                  <div class="form-floating mb-3">
                    <input type="text" value={name || ""} onChange={(e)=> setName(e.target.value)} class="form-control" name="firstName" id="firstName" placeholder="First Name" required />
                    <label for="firstName" class="form-label">Name</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-floating mb-3">
                    <input type="email"  value={email || ""} onChange={(e)=> setEmail(e.target.value)} class="form-control" placeholder="name@example.com" required />
                    <label class="form-label">Email</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-floating mb-3">
                    <input type="password" value={password || ""} onChange={(e)=> setPassword(e.target.value)} class="form-control" name="password" id="password" placeholder="Password" required />
                    <label  class="form-label">Password</label>
                  </div>
                </div>

                <div class="col-12">
                  <div class="form-floating mb-3">
                    <input type="password" value={repeatPassword || ""} onChange={(e)=> setRepeatPassword(e.target.value)} class="form-control" name="password" id="password" placeholder="Confirm Password" required />
                    <label  class="form-label">Password</label>
                  </div>
                </div>
                
                <div class="col-12">
                  <div class="d-grid my-3">
                    <button class="btn btn-primary btn-lg" type="submit">Signup</button>
                  </div>
                </div>
                <div class="col-12">
                  <p class="m-0 text-secondary text-center">Already have an account? <Link to="/login" class="link-primary text-decoration-none">Login</Link></p>
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

export default Register