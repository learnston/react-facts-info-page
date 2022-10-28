import React from 'react'
import reactLogo from '../assets/react-logo.png'

function Navbar() {
  return (
    <nav className="navbar">
      <img src={reactLogo} className="logo" alt="" />
      <span className="logo--text">ReactFacts</span>
      <span className="nav--text">React Course - Project 1</span>
    </nav>
  )
}

export default Navbar
