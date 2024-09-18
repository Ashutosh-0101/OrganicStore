import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import { ContextDemo } from './Context/Context.jsx'

createRoot(document.getElementById('root')).render(
  <ContextDemo>
    <App />
  </ContextDemo>
)
