import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import CopywriteFooter from './components/footer/copywriteFooter.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <CopywriteFooter />
  </React.StrictMode>,
)
