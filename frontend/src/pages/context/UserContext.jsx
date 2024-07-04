import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();


export const UserProvider = ({children}) => {
    const nav = useNavigate();

    const [authToken, setAuthtoken] = useState(()=> localStorage.getItem('token')? localStorage.getItem('token') : null);

   const [currentUser, setCurrentUser] = useState(null);

   console.log('====================================');
   console.log(authToken);
   console.log('====================================');

// Register User
    const register = (name, email, password) => {
        fetch('http://localhost:8080/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password 
            })
        })
        .then(res => res.json())
        .then(res => {
            console.log(res);
        if(res.success)
            {
                nav('/login')
            alert(res.success)
        }
        else if(res.error){
            alert(res.error)
        }
        else{
            alert("Something went wrong")
        }
            
        })

    }


// Login User
    const login =  (email, password) => {
        fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password 
            })
        })
        .then(res => res.json())
        .then(res => {
            console.log(res);
        if(res.access_token)
            {
                setAuthtoken(res.access_token)
                localStorage.setItem('token', res.access_token)

                console.log(res);
                nav('/dashboard')
            alert("Login success")
        }
        else if(res.error){
            alert(res.error)
        }
        else{
            alert("Something went wrong")
        }
            
        })
        
    }

// Logout User
  function logout(){


        fetch('http://localhost:8080/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            }}
            )
            .then(res => res.json())
            .then(res => {
                console.log(res);
                if(res.success){
                    setAuthtoken(null)
                    localStorage.removeItem('token')
                    nav('/login')
                }
            
                else{
                    alert("Something went wrong")
                }
            })
  }


  useEffect(() => {
    if(authToken){
        fetch('http://localhost:8080/current_user', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${authToken}`
            }
        
        })
        .then(res => res.json())
        .then(res => {
            setCurrentUser(res)
        })

        
    }
    else{
        setCurrentUser(null)
    }
  }, [authToken])



  const contextData ={
    currentUser,
    register,
    login,
    logout
  }


  return (
    <UserContext.Provider value={contextData}>
        {children}
    </UserContext.Provider >
  )


}