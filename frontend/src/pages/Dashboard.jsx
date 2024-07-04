import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'

function Dashboard() 
{
  const {currentUser} = useContext(UserContext)
  return (
    <div>
      <h2>Dashboard</h2>
      <h3>Welcome {currentUser && currentUser.name}</h3>
      <h3>Email : {currentUser && currentUser.email}</h3>

    </div>
  )
}

export default Dashboard