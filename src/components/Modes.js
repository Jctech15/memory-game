import TimedMode from "./TimedMode";
import Theme from "./Theme";

export default function Modes({ gameStart }) {
  return (
    <div id="Modes">
      <h1>Game Modes</h1>
      <TimedMode gameStart={gameStart} />
      {gameStart ? null : <Theme />}
    </div>
  );
}
