import styled, { keyframes } from 'styled-components';

import React, {useState} from 'react';
import colors from './styles/colors';

function App() {
  const [clickedSquares, setClickedSquares] = useState([]);

  const handleSquareClick = (index) => {
    setClickedSquares((prevClickedSquares) => {
      if (prevClickedSquares.includes(index)) {
        // If square is already clicked, remove it from the array
        return prevClickedSquares.filter((squareIndex) => squareIndex !== index);
      } else {
        // If square is not clicked, add it to the array
        return [...prevClickedSquares, index];
      }
    });
  };

  return (
    <MainDiv>
      <Board>
        {Array.from({ length: 16 }).map((_, index) => (
          <Square key={index} isclicked={clickedSquares.includes(index)} 
            onClick={() => handleSquareClick(index)}></Square>
        ))}
      </Board>
    </MainDiv>
  );
}

const rippleAnimation = keyframes`
  0% {
    background-color: ${colors.green};
    transform: scale(1);
  }
  50% {
    background-color: ${colors.white}; /* Cambia a otro color al medio de la animación */
    transform: scale(0.9);
  }
  100% {
    background-color: ${colors.green};
    transform: scale(1);
  }
`;


const MainDiv = styled.div`
  background-color: #FFFCF7;
  height: 100vh;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Board = styled.div`
  background-color: ${colors.yellow};
  border-radius: 10px;
  padding: 10px;
  border-width: 10px;
  height: 78vh;
  width: 78vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr); /* Added for rows */
  grid-gap: 5px; /* Added colon */
  
  @media (max-width: 768px) {
    width: 95vw;
  }
`;
const Square = styled.div`
  background-color: ${({ isclicked }) => (isclicked ? colors.green : 'white')};
  border-radius: 5px;
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease; /* Agrega una transición suave */
  
  &:active {
    animation: ${rippleAnimation} 0.3s ease;
  }
`;


export default App;
