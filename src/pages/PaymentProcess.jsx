import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'
import './PaymentProcess.css'

const PaymentProcess = () => {
  const navigate = useNavigate()

  const handlePayment = () => {
    // Handle payment processing
    alert('Payment processing...')
  }

  return (
    <div className="payment-process-page">
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
      <main className="payment-process-main">
        <div className="payment-process-card">
          <div className="payment-logo">
            <div className="logo-icon-large">
              <div className="logo-circle-large"></div>
              <div className="logo-v-large"></div>
              <div className="logo-line-large"></div>
            </div>
          </div>
          <h2 className="payment-title">Search Payment info</h2>
          <div className="payment-details">
            <div className="payment-greeting">Hey!</div>
            <div className="payment-name">
              Daniel Robinason
              <span className="verified-icon">✓</span>
            </div>
            <div className="payment-service">
              Service - Website & App Devlopement
            </div>
            <div className="payment-info-grid">
              <div className="payment-info-item">
                <span className="info-label">Half payment</span>
                <span className="info-value">1/2</span>
              </div>
              <div className="payment-info-item">
                <span className="info-label">Total</span>
                <span className="info-value">$ 8000</span>
              </div>
            </div>
            <div className="payment-amount">
              Payable - $ 400
            </div>
            <button className="btn-pay" onClick={handlePayment}>
              Pay $8000
            </button>
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
      <footer className="payment-footer">
        <a href="/privacy">privacy policy</a>
        <a href="/refund">Refund policy</a>
      </footer>
    </div>
  )
}

export default PaymentProcess


