import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles.css'
import UpdateStatusWidget from './widget/UpdateStatusWidget'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <UpdateStatusWidget />,
)
