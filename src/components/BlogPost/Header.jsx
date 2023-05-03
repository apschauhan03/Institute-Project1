import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  const [username,setUsername] = useState(null)
  useEffect(()=>{
    fetch('http://localhost:4000/profile',{
      credentials:'include',
    }).then(response=>{
      response.json().then(userInfo=>{
        setUsername(userInfo.username)
      })
    })
  },[])

  function logout(){
    fetch('http://localhost:4000/logout',{
      credentials:'include',
      method:'POST',
    })
    setUsername(null)
  }

  return (
    <header>
        <Link to="/blogs" className="logo">OUR BLOGS</Link>
        <nav>
          {username && (
            <>
            <Link to='/create'>Create new post</Link>
            <Link onClick={logout}>Logout</Link>
            </>
          )}
          {!username && (
            <>
             {/* <Link to='/login'>Login</Link>
             <Link to='/register'>register</Link> */}
            </>
          )}
        </nav>
      </header>
  )
}
