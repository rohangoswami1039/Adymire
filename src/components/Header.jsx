import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo-link">
          <Logo />
        </Link>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="header-actions">
          <Link to="/payment/search" className="btn-get-started">Get Started</Link>
          <Link to="/admin/login" className="btn-login">Login</Link>
          <button className="btn-signup">Sign Up</button>
        </div>
      </div>
    </header>
  )
}

export default Header

