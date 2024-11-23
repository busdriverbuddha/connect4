import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Turns from "./components/Turns";
import { WINNING_STATES } from "./winningStates.js";

const INITIAL_BOARD = Array.from({ length: 6 }, () => Array(7).fill(''));

function findOpenRow(board, colIndex) {
  for (let i = board.length - 1; i >= 0; i--) {
    if (board[i][colIndex] === "") {
      return i;
    }
  }
  return -1;
}

function getInactiveCols(board) {
  const inactiveCols = [];
  for (let colIndex = 0; colIndex < 7; colIndex++) {
    if (findOpenRow(board, colIndex) === -1) {
      inactiveCols.push(colIndex);
    }
  }
  return inactiveCols;
}

function getWinner(board) {
  for (const winningState of WINNING_STATES) {
    const [row1, col1] = winningState[0];
    let value1 = board[row1][col1];
    let isWin = false;
    if (value1 !== "") {
      isWin = true;
      for (const [row, col] of winningState.slice(1)) {
        let value2 = board[row][col];
        if (value1 !== value2) {
          isWin = false;
          break;
        }
      }
    }
    if (isWin) {
      return {winner: value1, cells: winningState};
    }
  }
  return {winner: "", cells: []};
}

function App() {
  const [currentPlayer, setCurrentPlayer] = useState('blue');
  const [gameTurns, setGameTurns] = useState([]);

  function handleClick(colNumber) {
    colNumber = +colNumber;
    if (isNaN(colNumber)) {
      return;
    }
    if (findOpenRow(board, colNumber) !== -1) {
      setGameTurns((prevGameTurns) => {
        return [
          ...prevGameTurns,
          { player: currentPlayer, colIndex: colNumber }
        ];
      })
      setCurrentPlayer((prevCurrentPlayer) => {
        return prevCurrentPlayer === 'blue' ? 'red' : 'blue';
      });
    }
  };

  function deriveGameBoard(gameTurns) {
    let gameBoard = [...INITIAL_BOARD.map(array => [...array])];
    for (const turn of gameTurns) {
      const { player, colIndex } = turn;
      let row = findOpenRow(gameBoard, colIndex);
      if (row !== -1) {
        gameBoard[row][colIndex] = player;
      }
    }
    return gameBoard;
  }

  const board = deriveGameBoard(gameTurns);
  const result = getWinner(board);
  const winner = result.winner;
  const winningCells = result.cells;
  const inactiveCols = winner == "" ? getInactiveCols(board) : [...Array(7).keys()];

  return (
    <>
      <GameBoard board={board} clickHandler={handleClick} inactiveCols={inactiveCols} winningCells={winningCells}/>
      <Turns gameTurns={gameTurns} currentPlayer={currentPlayer} winner={winner}/>
    </>
  )
}

export default App
