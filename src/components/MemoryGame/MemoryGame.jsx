import { MemoryGameStyled } from "./MemoryGame.styled";
import { useEffect, useState } from "react";
import { useGame } from "../../providers/GameProvider";
import { Timer } from "../Timer/Timer";
import { data } from '../../data/17goals'
import Modal from "../Modal/Modal";

// Henter kort
const numCards = 17; // Antal kort = sværhedsgrad
const sliced_data = data.slice(0, numCards) // Juster array til antal kort
const cards = sliced_data.concat(sliced_data) // Dublet af array
cards.sort(() => Math.random() - 0.5); // Random sortering

export const MemoryGame = () => {
  const [flippedInCards, setFlippedInCards] = useState([]); // State array med forsøg
  const [matchedPairs, setMatchedPairs] = useState([]); // State array med matches
  const { numMoves, setNumMoves } = useGame(0); // State var med antal træk
  const [isRunning, setIsRunning] = useState(false); // Starte var til timer
  const [resetTrigger, setResetTrigger] = useState(false); // State var til timer
  const [isModalOpen, setIsModalOpen] = useState(false); // State var til modal

  // Modal funktioner
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Click handler function
  const handleCardClick = index => {
    // Aktiverer timer var
    if (!isRunning) {
      setIsRunning(true);
    }

    // Afbryder funktion hvis kort allerede er vendt
    if(flippedInCards.includes(index) || matchedPairs.includes(cards[index])) {
      return;
    }

    // Lægger en til antal træk
    setNumMoves((prev) => prev + 1);

    // Sætter array med aktuelt forsøg
    if (flippedInCards.length < 2 && !flippedInCards.includes(index)) {
      setFlippedInCards(prev => [...prev, index]);
    }
  }

  useEffect(() => {
    // Hvis forsøg tæller to kort
    if (flippedInCards.length === 2) {
      // Trækker begge kort ud af forsøg
      const [firstCard, secondCard] = flippedInCards;
      // Tilføj match hvis de er ens
      if (cards[firstCard] === cards[secondCard]) {
        setMatchedPairs(prev => [...prev, cards[firstCard]]);
      }
      // Nulstil forsøg efter 1 sekund
      setTimeout(() => {
        setFlippedInCards([]);
      }, 1000);

    }
  }, [flippedInCards, cards]) // Måler på cards og forsøgsarray

  // Stop timeren, når alle par er fundet
  useEffect(() => {
    // Viser endgame modal hvis antal match og kort er ens
    if (matchedPairs.length === numCards) {
      setIsRunning(false);
      setIsModalOpen(true)
    }
  }, [matchedPairs]);

  // Reset spillet (eksempelvis ved knaptryk)
  const resetGame = () => {
    setFlippedInCards([]);
    setMatchedPairs([]);
    setNumMoves(0);
    setIsRunning(false);
    closeModal(),
    setResetTrigger((prev) => !prev); // Trigger reset i Timer-komponenten
  };

  // Funktion der måler på array index om kort er flipped
  const isCardFlipped = index => flippedInCards.includes(index) ||
    matchedPairs.includes(cards[index]);
  
  return (
    <>
      <MemoryGameStyled>
        <div className="scoreboard">
          <p><Timer
            isRunning={isRunning}
            resetTrigger={resetTrigger} // Reset timeren
          /></p>
          <p>Antal moves: {numMoves}</p>
        </div>

        <div className="gameboard">
          {
            cards.map((card, index) => {
              return (
                <div key={index} onClick={() => handleCardClick(index)} className={`flip-card-inner ${isCardFlipped(index) ? 'flipped' : ''}`}>
                  <img className="flip-card-front" src={card.image} />
                  <div className="flip-card-back"></div>
                </div>
              )
            })
          }
        </div>
      </MemoryGameStyled>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Tillykke!</h2>
        <p>Du har vendt alle match.</p>
        <p>Din score er: <br />
        Antal moves: {numMoves}<br />
        </p>
        <button onClick={() => resetGame()}>Luk</button>
      </Modal>
    </>
  )
}
