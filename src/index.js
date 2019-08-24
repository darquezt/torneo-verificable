import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core'

import './index.css'
import App from './App'
import theme from './config/theme'

ReactDOM.render((
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MuiThemeProvider>
  ),
  document.getElementById('root'),
)
