import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'
import './AdminLogin.css'

const AdminLogin = () => {
  const [loginType, setLoginType] = useState('admin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Navigate to OTP page after login attempt
    navigate('/admin/otp')
  }

  return (
    <div className="admin-login-page">
      <div className="login-left">
        <div className="logo-container">
          <div className="logo-box">
            <div className="logo-icon-large">
              <div className="logo-circle-large"></div>
              <div className="logo-v-large"></div>
              <div className="logo-line-large"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="login-right">
        <div className="login-card">
          <h1 className="login-title">
            <span className="title-adymire">Adymire</span>{' '}
            <span className="title-admin">Admin</span>
          </h1>
          <div className="login-tabs">
            <button
              className={`tab ${loginType === 'admin' ? 'active' : ''}`}
              onClick={() => setLoginType('admin')}
            >
              Admin Login
            </button>
            <button
              className={`tab ${loginType === 'staff' ? 'active' : ''}`}
              onClick={() => setLoginType('staff')}
            >
              Staff Login
            </button>
          </div>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Mobile Number Or Email</label>
              <input
                type="text"
                placeholder="mobile no or email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
                required
              />
            </div>
            <div className="forgot-password">
              <a href="#" className="forgot-link">Forgot Password</a>
            </div>
            <button type="submit" className="btn-continue">
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin


