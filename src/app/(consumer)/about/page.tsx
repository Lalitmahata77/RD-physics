import React from 'react'
import WhatWeDo from './components/WhatWeDo'
import AboutUs from './components/sample'
import Footer from '../_components/footer'
import LearningFeatures from '../_components/features'

const page = () => {
  return (
    <div>
        <AboutUs/>
        <WhatWeDo/>
        <LearningFeatures/>
        <Footer/>
    </div>
  )
}

export default page