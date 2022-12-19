export default function Timer() {
  return (
    <section className="Timer">
      <h3>Timer</h3>
      <legend>Select a Coutdown method!</legend>
      <ul id="timer">
        <li className="timer-selection">
          <input type="radio" value="notimer" name="time" defaultChecked />
          None
        </li>
        <li className="timer-selection">
          <input type="radio" value="30seconds" name="time" />
          30 Seconds
        </li>
        <li className="timer-selection">
          <input type="radio" value="45seconds" name="time" />
          45 Seconds
        </li>
      </ul>
    </section>
  );
}
