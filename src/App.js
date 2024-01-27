import styled from 'styled-components';
import React, {useState} from 'react';


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
        {Array.from({ length: 200 }).map((_, index) => (
          <Square key={index} isclicked={clickedSquares.includes(index)} 
            onClick={() => handleSquareClick(index)}>{index}</Square>
        ))}
      </Board>
    </MainDiv>
  );
}

const MainDiv = styled.div`
  background-color: #FFFCF7;
  height: 100vh;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Board = styled.div`
  background-color: #D1C952;
  border-radius: 10px;
  padding: 10px;
  border-width: 10px;
  height: 78vh;
  width: 90vw;
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  grid-template-rows: repeat(10, 1fr); /* Added for rows */
  grid-gap: 5px; /* Added colon */
  
  @media (max-width: 768px) {
    width: 95vw;
  }
`;

const Square = styled.div`
  background-color: ${({ isclicked }) => (isclicked ? 'green' : 'white')};
  border-radius: 5px;
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default App;
