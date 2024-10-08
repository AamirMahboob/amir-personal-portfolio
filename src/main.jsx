import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from '@mui/material'
import theme from './theme/theme.js'
import './App.css'
createRoot(document.getElementById('root')).render(
 
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
)
