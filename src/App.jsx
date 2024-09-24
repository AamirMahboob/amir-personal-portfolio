import { useTheme } from '@mui/material/styles'
import { Typography } from '@mui/material'
import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'

const App = () => {
  const theme = useTheme()
  return (
   <>
     <Header />
     <Hero />
   </>
  
  )
}

export default App
