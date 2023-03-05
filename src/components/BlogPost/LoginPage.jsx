import React from 'react'

export const LoginPage = () => {
  return (
    <form className='login'>
        <h1>Login</h1>
        <input type='text' placeholder='username' autoCapitalize='false'></input>
        <input type='password' placeholder='password' autoCapitalize='false'></input>
        <button>Login</button>
    </form>
  )
}
