import { createContext, useContext, useEffect, useState } from "react"

const GameContext = createContext()

const GameProvider = ({ children }) => {
  const [numMoves, setNumMoves] = useState(0)

  return (
    <GameContext.Provider value={{ numMoves, setNumMoves }}>
      {children}
    </GameContext.Provider>
  )
}

const useGame = () => useContext(GameContext);

export { GameProvider, useGame }