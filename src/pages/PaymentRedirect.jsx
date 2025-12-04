import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'
import './PaymentRedirect.css'

const PaymentRedirect = () => {
  const navigate = useNavigate()

  useEffect(() => {
    // Redirect after 3 seconds
    const timer = setTimeout(() => {
      navigate('/payment/process')
    }, 3000)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="payment-redirect-page">
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
      <main className="redirect-main">
        <div className="redirect-card">
          <div className="redirect-logo">
            <div className="logo-icon-large">
              <div className="logo-circle-large"></div>
              <div className="logo-v-large"></div>
              <div className="logo-line-large"></div>
            </div>
          </div>
          <h2 className="redirect-title">Please Wait..</h2>
          <h3 className="redirect-subtitle">We are redirecting</h3>
          <div className="loading-spinner">
            <div className="spinner"></div>
          </div>
          <div className="payment-separator">
            <div className="separator-line"></div>
            <span className="separator-text">Secure payment gatway</span>
            <div className="separator-line"></div>
          </div>
          <div className="payment-methods">
            <div className="payment-method stripe">stripe</div>
            <div className="payment-method tether">tether</div>
            <div className="payment-method paypal">PayPal</div>
            <div className="payment-method escrow">ESCROW.COM.</div>
            <div className="payment-method visa">VISA</div>
            <div className="payment-method bitcoin">bitcoin</div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default PaymentRedirect


