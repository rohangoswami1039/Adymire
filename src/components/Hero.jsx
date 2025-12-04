import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-welcome">Welcome to Adymire</p>
          <h1 className="hero-title">Digital Agency & Solutions</h1>
          <p className="hero-subtitle">Let's Grow Your Business Together</p>
          <div className="hero-actions">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">Watch Video</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-placeholder">
            <div className="person-icon">👤</div>
            <div className="wave-bg"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

