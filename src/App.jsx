import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AdminLogin from './pages/AdminLogin'
import OTPVerification from './pages/OTPVerification'
import AdminDashboard from './pages/AdminDashboard'
import PaymentSearch from './pages/PaymentSearch'
import PaymentRedirect from './pages/PaymentRedirect'
import PaymentProcess from './pages/PaymentProcess'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/otp" element={<OTPVerification />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/payment/search" element={<PaymentSearch />} />
          <Route path="/payment/redirect" element={<PaymentRedirect />} />
          <Route path="/payment/process" element={<PaymentProcess />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

