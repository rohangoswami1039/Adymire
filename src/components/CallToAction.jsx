import React from 'react'
import './CallToAction.css'

const CallToAction = () => {
  return (
    <section className="call-to-action">
      <div className="container">
        <div className="cta-content">
          <div className="cta-left">
            <div className="cta-emoji">😊</div>
            <p className="cta-text">Tell Sure to Connect</p>
          </div>
          <div className="cta-right">
            <h2 className="cta-title">Book a call & Chat on Whatsapp</h2>
            <div className="cta-buttons">
              <button className="btn-call">
                <span className="btn-icon">📞</span>
                Book a call
              </button>
              <button className="btn-whatsapp">
                <span className="btn-icon">💬</span>
                Chat on Whatsapp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction

