import React from 'react'
import './WhyChooseUs.css'

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: '⏰',
      title: '100% Delivery Time',
      description: 'We guarantee on-time delivery for all projects.',
    },
    {
      icon: '🤝',
      title: 'Client Trust',
      description: 'Building lasting relationships with our clients.',
    },
    {
      icon: '💰',
      title: '100% Secure Payment',
      description: 'Safe and secure payment processing for all transactions.',
    },
  ]

  return (
    <section className="why-choose-us">
      <div className="container">
        <h2 className="section-title">Why You Chose US</h2>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">{benefit.icon}</div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs

