import { ColorModeScript } from '@chakra-ui/react'
import * as React from 'react'
import ReactDOM from 'react-dom'
import { Main } from './main/index'

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
)
