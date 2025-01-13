import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyle } from './styled/Global.styled.js'
import { GameProvider } from './providers/GameProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <GameProvider>
      <App />
    </GameProvider>
  </StrictMode>,
)
