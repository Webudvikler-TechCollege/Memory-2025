import { useGame } from "../../providers/GameProvider.jsx";
import { HeaderStyled } from "./Header.styled.js"
import { Timer } from "../Timer/Timer.jsx";

export const Header = () => {
  const { numMoves } = useGame();

  return (
    <HeaderStyled>
      <h1>The Flip Game</h1>
    </HeaderStyled>
  )
}
