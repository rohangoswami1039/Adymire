import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'
import './OTPVerification.css'

const OTPVerification = () => {
  const [otp, setOtp] = useState(['', '', '', ''])
  const [timer, setTimer] = useState(59)
  const [loginType, setLoginType] = useState('staff')
  const navigate = useNavigate()

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1)
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [timer])

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Auto-focus next input
    if (value && index < 3) {
      const nextInput = document.getElementById(`otp-${index + 1}`)
      if (nextInput) nextInput.focus()
    }
  }

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`)
      if (prevInput) prevInput.focus()
    }
  }

  const handleResend = () => {
    setTimer(59)
    setOtp(['', '', '', ''])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (otp.every((digit) => digit !== '')) {
      navigate('/admin/dashboard')
    }
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  }

  return (
    <div className="otp-page">
      <div className="otp-left">
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
      <div className="otp-right">
        <div className="otp-card">
          <h1 className="otp-title">
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
          <h2 className="verify-title">Verify OTP</h2>
          <form className="otp-form" onSubmit={handleSubmit}>
            <div className="otp-input-group">
              <label className="otp-label">OTP</label>
              <div className="otp-inputs">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className={`otp-input ${digit ? 'filled' : ''}`}
                  />
                ))}
              </div>
            </div>
            <div className="otp-actions">
              <span className="timer">{formatTime(timer)}</span>
              <button
                type="button"
                className="resend-link"
                onClick={handleResend}
                disabled={timer > 0}
              >
                Resend OTP
              </button>
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

export default OTPVerification


