import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import Painel from './components/painel/Painel.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Painel/>
  </StrictMode>,
)
