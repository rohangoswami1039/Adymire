import React, { useState } from 'react'
import './WhatWeDo.css'

const WhatWeDo = () => {
  const [activeService, setActiveService] = useState('Designing')

  const services = [
    'Designing',
    'Development',
    'Marketing',
    'Animation',
    'Video Editing',
    'AI Automation',
    'Interior Design',
    '3D Home Design',
  ]

  const serviceDescriptions = {
    Designing: {
      description: 'We create fresh and unique designs that enhance user experience. Our expert team ensures every design is tailored to your business needs.',
      tools: ['Figma', 'Adobe XD', 'Sketch'],
    },
    Development: {
      description: 'Professional web and app development services using the latest technologies and best practices.',
      tools: ['React', 'Node.js', 'Python'],
    },
    Marketing: {
      description: 'Comprehensive digital marketing strategies to grow your business and reach your target audience.',
      tools: ['Google Ads', 'Facebook Ads', 'SEO'],
    },
    Animation: {
      description: 'Creative animation services to bring your brand to life and engage your audience.',
      tools: ['After Effects', 'Premiere Pro', 'Blender'],
    },
    VideoEditing: {
      description: 'Professional video editing services for marketing, social media, and corporate content.',
      tools: ['Premiere Pro', 'Final Cut Pro', 'DaVinci Resolve'],
    },
    AIAutomation: {
      description: 'AI-powered automation solutions to streamline your business processes and increase efficiency.',
      tools: ['Python', 'TensorFlow', 'OpenAI'],
    },
    InteriorDesign: {
      description: 'Modern interior design services to create beautiful and functional spaces.',
      tools: ['AutoCAD', 'SketchUp', '3ds Max'],
    },
    '3DHomeDesign': {
      description: '3D home design and visualization services for architects and homeowners.',
      tools: ['Blender', '3ds Max', 'Maya'],
    },
  }

  const currentService = serviceDescriptions[activeService.replace(/\s+/g, '')] || serviceDescriptions.Designing

  return (
    <section className="what-we-do" id="services">
      <div className="container">
        <h2 className="section-title">What We Do (Services)</h2>
        <div className="services-content">
          <div className="services-list">
            {services.map((service) => (
              <button
                key={service}
                className={`service-btn ${activeService === service ? 'active' : ''}`}
                onClick={() => setActiveService(service)}
              >
                {service}
              </button>
            ))}
          </div>
          <div className="service-details">
            <div className="service-description-box">
              <p className="service-description">{currentService.description}</p>
            </div>
            <div className="tools-box">
              <h3 className="tools-title">Tools We Use</h3>
              <div className="tools-list">
                {currentService.tools.map((tool, index) => (
                  <div key={index} className="tool-item">
                    <span className="tool-icon">🔧</span>
                    <span className="tool-name">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo

