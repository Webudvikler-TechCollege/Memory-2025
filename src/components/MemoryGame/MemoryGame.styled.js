import styled from "styled-components"
import CardBg from '../../assets/images/cardbgs/abstrakt-tile.jpg'

export const MemoryGameStyled = styled.div`

  .scoreboard {
    display: flex;
    color: white;
    justify-content: space-between;
  }

  .gameboard {
    display: grid;
    grid-template-columns: repeat(7, 3fr);
    grid-gap: 0.5rem;
    perspective: 1000px;
    aspect-ratio: 1/1;
    width: 55vw;
    height: 70vh;

    > div {
      border: solid 1px #fff !important;
      position: relative;
      transition: transform 0.6s;
      transform-style: preserve-3d;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      border: solid 1px #000;
      max-height: 120px;;
      max-width: 200px;

      div,
      img {
        position: absolute;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;

      }

    &.flipped {
        transform: rotateX(-180deg);
      }	  

    }

    img {
      pointer-events: none;
      cursor: pointer;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .flip-card-front {
      transform: rotateX(180deg);
      background-color: black;
    }

    .flip-card-back {
      height: 100%;
      width: 100%;
      background-image: url(${CardBg});
      cursor: pointer;

      &:hover {
        background-color: darkviolet;
      }
    }

  }
`
