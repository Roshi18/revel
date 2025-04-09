import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Features1 from '../components/features1'
import CTA from '../components/cta'
import Features2 from '../components/features2'
import Pricing from '../components/pricing'
import Steps from '../components/steps'
import Testimonial from '../components/testimonial'
import Contact from '../components/contact'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Spotless Hungry Crocodile</title>
      </Helmet>
      <Navbar></Navbar>
      <Hero
        image2Src="https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxjbG90aGVzfGVufDB8fHx8MTc0MzkzODU3N3ww&amp;ixlib=rb-4.0.3&amp;w=1500"
        image7Src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGNsb3RoZXN8ZW58MHx8fHwxNzQzOTM4NTc3fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image8Src="https://images.unsplash.com/photo-1643185450492-6ba77dea00f6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGNvc21ldGljc3xlbnwwfHx8fDE3NDM5Mzg2NDZ8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image1Src="https://images.unsplash.com/photo-1598528738936-c50861cc75a9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQxfHxjb3NtZXRpY3N8ZW58MHx8fHwxNzQzOTM4NjYyfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
      ></Hero>
      <Features1></Features1>
      <CTA></CTA>
      <Features2></Features2>
      <Pricing></Pricing>
      <Steps></Steps>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Footer content3="2025 Revel shopping"></Footer>
    </div>
  )
}

export default Home
