export default function Turns({gameTurns, currentPlayer, winner}) {
  return <div className="mx-auto mt-3 py-7 bg-slate-900 text-slate-100 text-center">
    {
      gameTurns.map((turn, index) => {
        const { player, colIndex } = turn;
        return <p key={`turn-${index}`}>{player} played column {colIndex + 1}</p>
      }) }

      {winner == "" ? <p>It's {currentPlayer}'s turn!</p> : <p>{winner} wins!</p>}
    </div>
}