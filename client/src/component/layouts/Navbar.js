import React,{ Fragment } from 'react'

export const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <a href="index.html">Mess Management</a>
      </h1>
      <ul>
        <li><a href="profiles.html">Profile</a></li>
        <li><a href="register.html">Register</a></li>
        <li><a href="login.html">Login</a></li>
      </ul>
    </nav>
  )
}
