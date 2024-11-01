// import { useTheme } from '@mui/material/styles'
// import { Typography } from '@mui/material'
// import React from 'react'
// import Header from './components/Header'
// import Hero from './components/Hero'
// import Aboutme from './components/Aboutme'
// import Footer from './components/Footer'
// import Skills from './components/Skills'
// import Testimonial from './components/Testimonial'
// import Projects from './components/Projects'

// const App = () => {
//   const theme = useTheme()
//   return (
//    <>
//      <Header />
//      <Hero />
//      {/* <Aboutme /> */}
//      {/* <Skills /> */}
//      <Projects />
//      <Testimonial />
//      <Footer />
//    </>
  
//   )
// }

// export default App
import { useTheme } from '@mui/material/styles'
import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Aboutme from './components/Aboutme'
import Footer from './components/Footer'
import Skills from './components/Skills'
import Testimonial from './components/Testimonial'
import Projects from './components/Projects'
import SkillsSection from './components/SkillsSection'
import Experience from './components/Experience'
import SignIn from './admin/signin'

const App = () => {
  const theme = useTheme()

  return (
    <>
      
      {/* <SignIn /> */}
      <Header />
       
        <Hero />
     
       
        <Aboutme />
        <Experience />
        <SkillsSection />
 
        <Projects /> 
     
        <Testimonial />
      
      <Footer />
    </>
  )
}

export default App
