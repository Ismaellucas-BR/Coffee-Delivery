import Data from "../../data/Coffes.json";
import CoffeCard from "./CoffeCard";

function CoffeList() {
  return Data.map((coffe) => <CoffeCard key={coffe.name} coffe={coffe} />);
}

export default CoffeList;
