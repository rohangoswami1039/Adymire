import React, { useState } from 'react'
import './HowWeWork.css'

const HowWeWork = () => {
  const [activeStep, setActiveStep] = useState('Marketing')

  const steps = [
    { number: '01', label: '' },
    { number: '02', label: 'Design' },
    { number: '03', label: 'Develop' },
    { number: '04', label: 'Marketing' },
  ]

  return (
    <section className="how-we-work">
      <div className="container">
        <h2 className="section-title">How We Work</h2>
        <div className="work-content">
          <div className="work-steps">
            {steps.map((step, index) => {
              const isActive = activeStep === step.label
              return (
                <div
                  key={index}
                  className={`work-step ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveStep(step.label || `step${index + 1}`)}
                >
                  <div className="step-number">{step.number}</div>
                  {step.label && <div className="step-label">{step.label}</div>}
                </div>
              )
            })}
            <button className="btn-get-started">Get Started</button>
          </div>
          <div className="work-image">
            <div className="work-image-placeholder">
              <div className="person-icon">👤</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowWeWork

