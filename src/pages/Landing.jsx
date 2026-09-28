import React, { useEffect } from 'react'
import Navbar from '../components/common/Navbar'
import Hero from '../components/landingcomponents/Hero'
import useAuth from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import Features from '../components/landingcomponents/Features'
import FamousTrips from '../components/landingcomponents/FamousTrips'
import OurMission from '../components/landingcomponents/OurMission'
import Testimonials from '../components/landingcomponents/Testimonials'
import Footer from '../components/landingcomponents/Footer'

const Landing = () => {

  const navigate = useNavigate();

  const { token } = useAuth();

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [token])


  return (
    <div>
      <Navbar />
      <Hero/>
      <Features />
      <FamousTrips />
      <OurMission />
      <Testimonials />
      <Footer />

    </div>
  )
}

export default Landing