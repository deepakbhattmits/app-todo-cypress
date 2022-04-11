import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { Router } from './components/router'
const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(
  <Router>
    <App />
  </Router>,
)
