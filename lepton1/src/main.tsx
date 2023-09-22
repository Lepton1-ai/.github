import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import CountVisit from './CountVisit.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <CountVisit />
  </React.StrictMode>,
)
