import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'

import './index.css'
import App from './App'
import theme from './config/theme'

ReactDOM.render((
    <MuiThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MuiPickersUtilsProvider>
    </MuiThemeProvider>
  ),
  document.getElementById('root'),
)
