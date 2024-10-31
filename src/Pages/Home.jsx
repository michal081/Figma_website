import React from 'react'
import Hero from '../InnerPage/Hero'
import Feature from '../InnerPage/Feature'
import Constant from '../InnerPage/Constant'
import Gallery from '../InnerPage/Gallery'
import Partners from '../InnerPage/Partners'
import Testimonial from '../InnerPage/Testimonal'
import Try from '../InnerPage/Try'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Feature/>
      <Constant/>
      <Gallery/>
      <Partners/>
      <Testimonial/>
      <Try/>
    </div>
  )
}

export default Home
