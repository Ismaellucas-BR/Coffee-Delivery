import Data from "../../data/Coffes.json";

function CoffeCard() {
  return Data.map((coffe) => (
    <div
      key={coffe.name}
      className="bg-base-card rounded-tl-lg rounded-br-lg p-3 rounded-r-3xl rounded-l-[30px]"
    >
      <img src={coffe.image} alt={coffe.name} />
      <span className="rounded-full bg-yellow-light text-yellow-dark px-2 py-1 font-Roboto font-bold text-[0.5rem]">
        {coffe.tag}
      </span>
      <h2>{coffe.name}</h2>
    </div>
  ));
}

export default CoffeCard;
