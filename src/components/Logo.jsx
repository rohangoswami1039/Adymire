import React from 'react'
import './Logo.css'

const Logo = ({ size = 'medium' }) => {
  return (
    <div className={`logo logo-${size}`}>
      <div className="logo-icon">
        <div className="logo-circle"></div>
        <div className="logo-v">
          <div className="logo-v-shape"></div>
        </div>
        <div className="logo-line"></div>
      </div>
      <span className="logo-text">Adymire</span>
    </div>
  )
}

export default Logo

