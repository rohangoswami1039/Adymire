import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import VideoWalkthrough from '../components/VideoWalkthrough'
import AgencyHelps from '../components/AgencyHelps'
import CallToAction from '../components/CallToAction'
import SpecializedIndustries from '../components/SpecializedIndustries'
import WhatWeDo from '../components/WhatWeDo'
import SampleVideo from '../components/SampleVideo'
import HowWeWork from '../components/HowWeWork'
import ClientReviews from '../components/ClientReviews'
import WhyChooseUs from '../components/WhyChooseUs'
import PaymentSystem from '../components/PaymentSystem'
import BookingForm from '../components/BookingForm'

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <Hero />
      <VideoWalkthrough />
      <AgencyHelps />
      <CallToAction />
      <SpecializedIndustries />
      <WhatWeDo />
      <SampleVideo />
      <HowWeWork />
      <ClientReviews />
      <WhyChooseUs />
      <PaymentSystem />
      <BookingForm />
    </div>
  )
}

export default Home


