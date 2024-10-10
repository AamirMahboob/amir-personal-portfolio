import { useTheme } from '@mui/material/styles'
import { Typography } from '@mui/material'
import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Aboutme from './components/Aboutme'
import Footer from './components/Footer'
import Skills from './components/Skills'
import Testimonial from './components/Testimonial'

const App = () => {
  const theme = useTheme()
  return (
   <>
     <Header />
     <Hero />
     {/* <Aboutme /> */}
     {/* <Skills /> */}
     <Testimonial />
     <Footer />
   </>
  
  )
}

export default App
