import React from 'react'
import ContactHero from './components/contsctHero'
import ContactSection from '../_components/contact'
import ContactSection1 from './components/contact'
import Footer from '../_components/footer'

const page = () => {
  return (
    <div>
        <ContactHero/>
        <ContactSection1/>
        <ContactSection/>
        <Footer/>
    </div>
  )
}

export default page