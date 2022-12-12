export default function Card({ image, selected, onClick }) {
  return (
    <div className="card">
      <div className={selected && "selected"}>
        <img className="card-face" src={image} alt="" onClick={onClick} />
        <img
          className="card-back"
          src={`/assets/cartoon-paw.jpg`}
          alt=""
          onClick={onClick}
        />
      </div>
    </div>
  );
}
