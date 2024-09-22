import { useTheme } from '@mui/material/styles'
import { Typography } from '@mui/material'
import React from 'react'
import Header from './components/Header'

const App = () => {
  const theme = useTheme()
  return (
   <>
     <Header />
   </>
  
  )
}

export default App
