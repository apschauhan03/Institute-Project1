import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
        <Link to="/blogs" className="logo">
          BLOGS
        </Link>
        <nav>
          <Link to='/login'>Login</Link>
          <Link to='/register'>register</Link>
        </nav>
      </header>
  )
}
