import React from 'react'
import react from '../react-logo.png'

function Header() {
  return (
    <header>
      <nav className="nav">
        <img className="logo" src={react} alt="logo" />
        <ul className="nav-items">
          <li className="links">Pricing</li>
          <li className="links">About</li>
          <li className="links">Contact</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
