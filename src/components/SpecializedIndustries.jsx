import React from 'react'
import './SpecializedIndustries.css'

const SpecializedIndustries = () => {
  const industries = [
    { icon: '🎓', label: 'Education Sector' },
    { icon: '🏠', label: 'Real Estate' },
    { icon: '☁️', label: 'Social Media Growth' },
    { icon: '☀️', label: 'AI Solutions' },
    { icon: '💿', label: 'Software' },
    { icon: '🛍️', label: 'Online Sales' },
    { icon: '🛒', label: 'Ecommerce Growth' },
    { icon: 'ℹ️', label: 'More Industries' },
  ]

  return (
    <section className="specialized-industries">
      <div className="container">
        <h2 className="section-title">Our Specialized industries</h2>
        <p className="section-subtitle">We help grow your specialized industries.</p>
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div key={index} className="industry-card">
              <div className="industry-icon">{industry.icon}</div>
              <p className="industry-label">{industry.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SpecializedIndustries

