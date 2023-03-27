import { ThemeProvider } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppTema } from './components/AppTema'
import './index.css'
import AppRoutes from './routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={AppTema}>      
      <AppRoutes />
    </ThemeProvider>
  </React.StrictMode>,
)
