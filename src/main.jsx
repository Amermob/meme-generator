import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Meme from './Meme.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Meme />
  </StrictMode>,
)
