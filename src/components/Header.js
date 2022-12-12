import { useEffect } from "react";

export default function Header({ handleNewGame, wins }) {
  useEffect(() => {
    document.title = `${wins} wins`;
  }, [wins]);

  return (
    <header className="header">
      <h3>{wins} wins</h3>
      <h2>Memory Game</h2>
      <button onClick={handleNewGame}>New Game</button>
    </header>
  );
}
