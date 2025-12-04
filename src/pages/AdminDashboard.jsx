import React, { useState } from 'react'
import Logo from '../components/Logo'
import './AdminDashboard.css'

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [currency, setCurrency] = useState('INR')
  const [timeFilter, setTimeFilter] = useState('yearly')
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`admin-dashboard ${darkMode ? 'dark' : ''}`}>
      <header className="dashboard-header">
        <div className="header-left">
          <Logo />
        </div>
        <div className="header-center">
          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input type="text" placeholder="Search features" className="search-input" />
          </div>
        </div>
        <div className="header-right">
          <div className="user-profile">
            <div className="user-avatar">YG</div>
            <span className="user-name">Yashveer giri</span>
            <span className="dropdown-arrow">▼</span>
          </div>
        </div>
      </header>
      <div className="dashboard-container">
        <aside className="dashboard-sidebar">
          <nav className="sidebar-nav">
            <button
              className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
              onClick={() => setActiveTab('dashboard')}
            >
              <span className="nav-icon">🏠</span>
              Dashboard
            </button>
            <button
              className={`nav-item ${activeTab === 'payment' ? 'active' : ''}`}
              onClick={() => setActiveTab('payment')}
            >
              <span className="nav-icon">🏦</span>
              Payment
            </button>
            <button
              className={`nav-item ${activeTab === 'users' ? 'active' : ''}`}
              onClick={() => setActiveTab('users')}
            >
              <span className="nav-icon">👥</span>
              All Users Management
            </button>
            <button
              className={`nav-item ${activeTab === 'invoices' ? 'active' : ''}`}
              onClick={() => setActiveTab('invoices')}
            >
              <span className="nav-icon">📄</span>
              Invoices
            </button>
            <button
              className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
              onClick={() => setActiveTab('settings')}
            >
              <span className="nav-icon">⚙️</span>
              Settings
            </button>
          </nav>
          <div className="theme-toggle">
            <button
              className={`toggle-btn ${darkMode ? 'dark' : 'light'}`}
              onClick={() => setDarkMode(!darkMode)}
            >
              <span className="toggle-icon">☀️🌙</span>
            </button>
          </div>
        </aside>
        <main className="dashboard-main">
          <div className="dashboard-header-section">
            <h1 className="dashboard-title">DashBoard</h1>
            <button className="filter-btn">Filter Last 30 Days</button>
          </div>
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-icon">👤</div>
              <div className="metric-content">
                <div className="metric-label">Total Projects Get</div>
                <div className="metric-value">10</div>
              </div>
            </div>
            <div className="metric-card">
              <div className="metric-header">
                <div className="currency-selectors">
                  <button
                    className={`currency-btn ${currency === 'INR' ? 'active' : ''}`}
                    onClick={() => setCurrency('INR')}
                  >
                    INR ▼
                  </button>
                  <button
                    className={`currency-btn ${currency === 'USD' ? 'active' : ''}`}
                    onClick={() => setCurrency('USD')}
                  >
                    USD ▼
                  </button>
                </div>
              </div>
              <div className="metric-icon">💰</div>
              <div className="metric-content">
                <div className="metric-label">Total Revenue</div>
                <div className="metric-value">
                  {currency === 'INR' ? '₹ 20,000' : '$ 240'}
                </div>
              </div>
            </div>
            <div className="metric-card">
              <div className="metric-icon">👤</div>
              <div className="metric-content">
                <div className="metric-label">Running Projects</div>
                <div className="metric-value">07</div>
              </div>
            </div>
            <div className="metric-card">
              <div className="metric-icon">👤</div>
              <div className="metric-content">
                <div className="metric-label">Completed Projects</div>
                <div className="metric-value">03</div>
              </div>
            </div>
          </div>
          <div className="charts-section">
            <div className="chart-card">
              <h3 className="chart-title">Monthly Data</h3>
              <div className="chart-placeholder monthly-chart">
                <div className="chart-bars">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((day) => (
                    <div key={day} className="chart-bar" style={{ height: `${Math.random() * 60 + 20}%` }}></div>
                  ))}
                </div>
                <div className="chart-labels">
                  <span>january</span>
                  <div className="day-labels">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((day) => (
                      <span key={day}>{String(day).padStart(2, '0')}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="chart-card">
              <div className="chart-header">
                <h3 className="chart-title">Total Revenue</h3>
                <div className="chart-controls">
                  <div className="currency-selectors">
                    <button
                      className={`currency-btn ${currency === 'INR' ? 'active' : ''}`}
                      onClick={() => setCurrency('INR')}
                    >
                      INR ▼
                    </button>
                    <button
                      className={`currency-btn ${currency === 'USD' ? 'active' : ''}`}
                      onClick={() => setCurrency('USD')}
                    >
                      USD ▼
                    </button>
                  </div>
                  <div className="time-filters">
                    <button
                      className={`time-btn ${timeFilter === 'monthly' ? 'active' : ''}`}
                      onClick={() => setTimeFilter('monthly')}
                    >
                      Monthly
                    </button>
                    <button
                      className={`time-btn ${timeFilter === 'yearly' ? 'active' : ''}`}
                      onClick={() => setTimeFilter('yearly')}
                    >
                      Yearly
                    </button>
                  </div>
                </div>
              </div>
              <div className="chart-placeholder yearly-chart">
                <div className="chart-bars">
                  {[2021, 2022, 2023, 2024, 2025].map((year) => (
                    <div key={year} className="chart-bar" style={{ height: `${Math.random() * 70 + 20}%` }}></div>
                  ))}
                </div>
                <div className="chart-labels">
                  <div className="y-axis">
                    <span>1cr</span>
                    <span>2Cr</span>
                    <span>10cr</span>
                  </div>
                  <div className="x-axis">
                    {[2021, 2022, 2023, 2024, 2025].map((year) => (
                      <span key={year}>{year}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default AdminDashboard


