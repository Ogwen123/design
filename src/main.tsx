import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App"
import './index.css'
import { CssBaseline } from "@mui/material"
import { createTheme } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

import { BrowserRouter } from 'react-router-dom'

const theme = createTheme({

})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ThemeProvider>
)
