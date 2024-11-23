import Cell from "./Cell.jsx";

export default function CellTable({board, winningCells}) {
  function isWinningCell(row, col) {
    for (const [winningRow, winningCol] of winningCells) {
      if (row == winningRow && col == winningCol) {
        return true;
      }
    }
    return false;
  }

  return <>
    { board.map(
      (row, rowIndex) => row.map(
        (cell, cellIndex) => <Cell key={`${rowIndex}-${cellIndex}`} rowIndex={rowIndex} cellIndex={cellIndex} value={cell} highlight={isWinningCell(rowIndex, cellIndex)}/>
      )
    )}
  </>
}