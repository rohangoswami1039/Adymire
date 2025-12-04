import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'
import './PaymentSearch.css'

const PaymentSearch = () => {
  const [searchQuery, setSearchQuery] = useState('#895421325223')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    // Navigate to redirect page first, then to payment processing
    navigate('/payment/redirect')
  }

  return (
    <div className="payment-search-page">
      <header className="payment-header">
        <div className="header-container">
          <Logo />
          <nav className="payment-nav">
            <a href="/">Welcome</a>
            <a href="/">About me</a>
            <a href="/">My services</a>
            <a href="/">Portfolio</a>
            <a href="/payment/search" className="active">Payments</a>
          </nav>
          <div className="header-actions">
            <button className="btn-whatsapp">💬 Chat on whatsapp</button>
            <button className="btn-call">📞 Book Free Call</button>
            <button className="btn-login">Login</button>
            <button className="btn-signup">SignUP</button>
          </div>
        </div>
      </header>
      <main className="payment-main">
        <div className="payment-card">
          <div className="payment-logo">
            <div className="logo-icon-large">
              <div className="logo-circle-large"></div>
              <div className="logo-v-large"></div>
              <div className="logo-line-large"></div>
            </div>
          </div>
          <h2 className="payment-title">Search Payment info</h2>
          <form className="search-form" onSubmit={handleSearch}>
            <div className="search-input-wrapper">
              <input
                type="text"
                className="search-input"
                placeholder="#895421325223"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="search-icon">🔍</span>
            </div>
            <button type="submit" className="btn-search">
              Search Payment
            </button>
          </form>
          <div className="payment-separator">
            <div className="separator-line"></div>
            <span className="separator-text">Secure payment gatway</span>
            <div className="separator-line"></div>
          </div>
          <div className="payment-methods">
            <div className="payment-method">stripe</div>
            <div className="payment-method">tether</div>
            <div className="payment-method">PayPal</div>
            <div className="payment-method">ESCROW.COM.</div>
            <div className="payment-method">VISA</div>
            <div className="payment-method">MasterCard</div>
            <div className="payment-method">Obitcoin</div>
          </div>
        </div>
      </main>
      <footer className="payment-footer">
        <a href="/privacy">privacy policy</a>
        <a href="/refund">Refund policy</a>
      </footer>
    </div>
  )
}

export default PaymentSearch


