import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// PURANA: import App from './App.jsx'
// NAYA (Ye line change karo):
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Naya Component render karo */}
    <App />
  </StrictMode>,
)
