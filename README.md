# Adymire Digital Agency & Solutions

A modern, responsive website built with React and Vite, matching the Adymire Digital Agency design with complete admin and payment flows.

## Features

- **Modern Design**: Clean, professional layout with a yellow, beige, and green color scheme
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Components**: Service tabs, video thumbnails, and booking form
- **Complete Admin Flow**: Login → OTP Verification → Dashboard
- **Payment Flow**: Search → Redirect → Process Payment
- **All Sections Included**:
  - Header with navigation
  - Hero section
  - Video walkthrough
  - Agency services (Design, Development, Grow)
  - Call to action (Book a call & WhatsApp)
  - Specialized industries
  - Services showcase
  - Sample videos
  - How we work process
  - Client reviews
  - Why choose us benefits
  - Payment system
  - Booking form

## Routes

### Public Pages
- `/` - Home page with all main sections
- `/payment/search` - Payment search page
- `/payment/redirect` - Payment redirect/loading page
- `/payment/process` - Payment processing page

### Admin Pages
- `/admin/login` - Admin/Staff login page
- `/admin/otp` - OTP verification page
- `/admin/dashboard` - Admin dashboard with metrics and charts

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/       # Reusable React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Logo.jsx
│   │   └── ...
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── AdminLogin.jsx
│   │   ├── OTPVerification.jsx
│   │   ├── AdminDashboard.jsx
│   │   ├── PaymentSearch.jsx
│   │   ├── PaymentRedirect.jsx
│   │   └── PaymentProcess.jsx
│   ├── App.jsx          # Main app with routing
│   ├── App.css          # App styles
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies
└── vite.config.js       # Vite configuration
```

## Color Scheme

- **Primary Yellow**: `#f4c430`
- **Light Beige**: `#fff9e6`
- **Green**: `#4caf50`
- **White**: `#fff`
- **Text Dark**: `#333`
- **Text Gray**: `#666`

## Features by Page

### Home Page
- Complete landing page with all sections
- Interactive service tabs
- Video thumbnails
- Client testimonials
- Booking form

### Admin Login
- Admin/Staff login tabs
- Email/Phone and password fields
- Forgot password link
- Navigates to OTP verification

### OTP Verification
- 4-digit OTP input fields
- Auto-focus between fields
- 60-second countdown timer
- Resend OTP functionality
- Navigates to dashboard on completion

### Admin Dashboard
- Sidebar navigation
- Key metrics cards (Projects, Revenue, Running/Completed)
- Monthly and yearly revenue charts
- Currency switcher (INR/USD)
- Time filter (Monthly/Yearly)
- User profile dropdown
- Theme toggle (light/dark)

### Payment Search
- Search payment by transaction ID
- Payment method logos
- Secure payment gateway display

### Payment Redirect
- Loading spinner animation
- Auto-redirects to payment process
- Payment method display

### Payment Process
- Payment details display
- Customer information
- Service description
- Payment amount breakdown
- Pay button
- Payment method options

## Customization

All components are modular and can be easily customized. Each component has its own CSS file for styling.

## License

This project is open source and available for use.
