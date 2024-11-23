import ButtonRow from "./ButtonRow.jsx";
import CellTable from "./CellTable.jsx";

export default function GameBoard({board, clickHandler, inactiveCols, winningCells}) {
  return <div className="grid grid-cols-7 grid-rows-7 max-w-2xl m-auto aspect-square p-3">
    <ButtonRow clickHandler={clickHandler} inactiveCols={inactiveCols}/>
    <CellTable board={board} winningCells={winningCells}/>
</div>
}