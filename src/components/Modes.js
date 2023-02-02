import TimedMode from "./TimedMode";
import Theme from "./Theme";

export default function Modes({
  gameStart,
  handleLoseGame,
  handleChangeTheme,
}) {
  return (
    <div id="Modes">
      <h1>Game Modes</h1>
      <TimedMode gameStart={gameStart} handleLoseGame={handleLoseGame} />
      {gameStart ? null : <Theme handleChangeTheme={handleChangeTheme} />}
    </div>
  );
}
