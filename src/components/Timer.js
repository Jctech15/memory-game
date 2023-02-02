export default function Timer(props) {
  return (
    <div className="Timer">
      {props.timer === "none" ? null : <h2> {props.timer} Seconds</h2>}
    </div>
  );
}
