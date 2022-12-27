import { useState } from "react";
import Timer from "./Timer";

export default function TimedMode() {
  const [seconds, setSeconds] = useState(null);

  function onChangeValue(e) {
    setSeconds(e.target.value);
    console.log(e.target.value);
  }

  return (
    <section className="TimedMode">
      <h3>Timer</h3>
      {seconds ? <Timer seconds={seconds} /> : null}
      <legend>Select a Coutdown method!</legend>
      <ul id="TimedMode" onChange={onChangeValue}>
        <li className="timer-selection">
          <input type="radio" value={null} name="time" checked={!seconds} />
          None
        </li>
        <li className="timer-selection">
          <input
            type="radio"
            value="30"
            name="time"
            checked={seconds === "30"}
          />
          30 Seconds
        </li>
        <li className="timer-selection">
          <input
            type="radio"
            value="45"
            name="time"
            checked={seconds === "45"}
          />
          45 Seconds
        </li>
      </ul>
    </section>
  );
}
