import React from 'react'
import './PaymentSystem.css'

const PaymentSystem = () => {
  const paymentMethods = [
    { name: 'PayPal', icon: '💳' },
    { name: 'Stripe', icon: '💳' },
    { name: 'Visa', icon: '💳' },
    { name: 'MasterCard', icon: '💳' },
    { name: 'Apple Pay', icon: '📱' },
    { name: 'Google Pay', icon: '📱' },
    { name: 'Bitcoin', icon: '₿' },
  ]

  return (
    <section className="payment-system">
      <div className="container">
        <div className="payment-content">
          <div className="payment-info">
            <h2 className="section-title">Easy Payment System</h2>
            <p className="payment-description">
              We Accept PayPal, Stripe, Visa, MasterCard, Apple Pay, Google Pay, and Bitcoin for transactions.
            </p>
            <div className="payment-logos">
              {paymentMethods.map((method, index) => (
                <div key={index} className="payment-logo">
                  <div className="logo-icon">{method.icon}</div>
                  <span className="logo-name">{method.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="payment-graphic">
            <div className="phone-mockup">
              <div className="phone-header">
                <h3 className="phone-title">We Accept Payment methods</h3>
              </div>
              <div className="phone-content">
                <div className="phone-logo">ADYMIRE</div>
                <div className="phone-bird">🐦</div>
              </div>
              <div className="phone-dots">
                <span className="dot"></span>
                <span className="dot active"></span>
                <span className="dot"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PaymentSystem

