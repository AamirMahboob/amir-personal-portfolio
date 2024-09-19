import { useTheme } from '@mui/material/styles'
import { Typography } from '@mui/material'
import React from 'react'

const App = () => {
  const theme = useTheme()
  return (
    <div>
      <Typography  
        sx={{
          color: theme.palette.primary.main, // Access the primary color correctly
        }}
      >
          Hello, React! This is a simple React application.
      </Typography>
    </div>
  )
}

export default App
