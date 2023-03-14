import Square from "./Square";

const WinnerModal = ({ winner, resetGame }) => {
  if (winner === null) return null;

  const winnerText = winner === false ? "Draw" : `Winner: ${winner}`;

  return (
    <>
      <section className="winner">
        <div className="text">
          <h2>{winnerText}</h2>

          {winner && (
            <header className="win">{<Square>{winner}</Square>}</header>
          )}

          <footer>
            <button onClick={resetGame}> Play again</button>
          </footer>
        </div>
      </section>
    </>
  );
};

export default WinnerModal;
