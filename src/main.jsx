import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Qrcde from './Qrcde.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Qrcde />
  </StrictMode>,
)
