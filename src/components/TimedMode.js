import { useEffect, useState } from "react";
import Timer from "./Timer";

export default function TimedMode({ gameStart, handleLoseGame }) {
  const [timer, setTimer] = useState(null);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (gameStart) {
      if (timer === 0) {
        handleLoseGame();
        setTimer(seconds);
      }
      let ticker = setInterval(() => tick(), 1000);
      return () => {
        clearInterval(ticker);
      };
    } else {
      setTimer(seconds);
    }
  }, [gameStart, tick, timer]);

  function onChangeValue(e) {
    setTimer(e.target.value);
    setSeconds(e.target.value);
  }

  function tick() {
    setTimer((seconds) => seconds - 1);
  }

  return (
    <section className="TimedMode">
      <h3>Timer</h3>
      {timer ? <Timer timer={timer} /> : null}
      {gameStart ? null : (
        <div>
          <legend>Select a Coutdown method!</legend>
          <ul id="TimedMode" onChange={onChangeValue}>
            <li className="timer-selection">
              <input type="radio" value={null} name="time" checked={!timer} />
              None
            </li>
            <li className="timer-selection">
              <input
                type="radio"
                value="30"
                name="time"
                checked={timer === "30"}
              />
              30 Seconds
            </li>
            <li className="timer-selection">
              <input
                type="radio"
                value="45"
                name="time"
                checked={timer === "45"}
              />
              45 Seconds
            </li>
          </ul>
        </div>
      )}
    </section>
  );
}
