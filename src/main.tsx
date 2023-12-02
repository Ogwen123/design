//import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App"
import './index.css'
import font from "./assets/montserrat.ttf"

import { CssBaseline } from "@mui/material"
import { createTheme } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

import { BrowserRouter } from 'react-router-dom'

const theme = createTheme({
    palette: {
        background: {
            default: "#f5f5f5"
        },
        text: {
            primary: "#000"
        }
    },
    typography: {
        fontFamily: "Montserrat, sans-serif",
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                "@font-face": {
                    fontFamily: "Montserrat",
                    src: `url(${font})`
                }
            }
        }
    }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ThemeProvider>
)
