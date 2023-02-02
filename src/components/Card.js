export default function Card({
  image,
  selected,
  onClick,
  cardBack = "/assets/cartoon-paw.jpg",
}) {
  return (
    <div className="card">
      <div className={selected && "selected"}>
        <img className="card-face" src={image} alt="" onClick={onClick} />
        <img className="card-back" src={cardBack} alt="" onClick={onClick} />
      </div>
    </div>
  );
}
