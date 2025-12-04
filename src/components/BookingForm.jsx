import React, { useState } from 'react'
import './BookingForm.css'

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    companyName: '',
    service: '',
    timeline: '',
    budget: '',
    projectDetails: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
  }

  return (
    <section className="booking-form" id="contact">
      <div className="container">
        <h2 className="section-title">Booking form fields</h2>
        <form className="form-grid" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="form-input form-textarea"
              rows="4"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="form-input"
              required
            >
              <option value="">What services do you need?</option>
              <option value="designing">Designing</option>
              <option value="development">Development</option>
              <option value="marketing">Marketing</option>
              <option value="animation">Animation</option>
              <option value="video-editing">Video Editing</option>
              <option value="ai-automation">AI Automation</option>
            </select>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="timeline"
              placeholder="When do you need it?"
              value={formData.timeline}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="budget"
              placeholder="Budget range"
              value={formData.budget}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-group form-group-full">
            <textarea
              name="projectDetails"
              placeholder="Project details and brief"
              value={formData.projectDetails}
              onChange={handleChange}
              className="form-input form-textarea"
              rows="5"
              required
            />
          </div>
          <div className="form-group form-group-full">
            <button type="submit" className="btn-submit">
              Submit Booking
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default BookingForm

