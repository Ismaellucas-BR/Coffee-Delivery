import { useState } from "react";
import { ShoppingCart } from "@phosphor-icons/react";
import { useCart } from "../context/CartContext"; // Importe o contexto

function CoffeCard({ coffe }) {
  const { addToCart } = useCart(); // Acessa a função para adicionar itens ao carrinho
  const [QuantityOfProduct, setQuantityOfProduct] = useState(1);
  const [totalValue, setTotalValue] = useState(Number(coffe.price));

  function IncriseQuantity() {
    setQuantityOfProduct((prevQuantity) => {
      const newQuantity = prevQuantity + 1;
      setTotalValue(Number(coffe.price) * newQuantity);
      return newQuantity;
    });
  }

  function DecreaseQuantity() {
    setQuantityOfProduct((prevQuantity) => {
      if (prevQuantity > 1) {
        const newQuantity = prevQuantity - 1;
        setTotalValue(Number(coffe.price) * newQuantity);
        return newQuantity;
      }
      return prevQuantity;
    });
  }

  function handleAddToCart() {
    addToCart(coffe, QuantityOfProduct, totalValue); // Adiciona ao carrinho
  }

  return (
    <div
      key={coffe.name}
      className="relative flex flex-col justify-center items-center bg-base-card rounded-tl-lg rounded-br-lg px-10 pb-10 rounded-r-3xl rounded-l-[30px] gap-3 pt-20"
    >
      <img
        src={coffe.image}
        alt={coffe.name}
        className="absolute top-[-2rem] left-1/2 transform -translate-x-1/2"
      />
      <div className="flex gap-2">
        {coffe.tag.map((tag, i) => (
          <span
            key={i}
            className="rounded-full bg-yellow-light text-yellow-dark px-2 py-1 font-Roboto font-semibold text-xs"
          >
            {tag}
          </span>
        ))}
      </div>

      <h2 className="font-baloo text-xl font-bold">{coffe.name}</h2>
      <span className="rounded-full  text-base-label px-2 py-1 font-Roboto font-normal text-base text-center">
        {coffe.description}
      </span>
      <div className="flex justify-between w-full mt-5 gap-5">
        <div className="flex justify-center items-center w-16 gap-1">
          <span className="font-Roboto text-base font-normal">R$</span>
          <span className="font-baloo text-2xl font-bold">
            {totalValue.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-center items-center gap-3 h-8">
          <div className="flex bg-base-button text-purple font-Roboto font-medium text-lg py-1 px-3 rounded-md gap-3">
            {QuantityOfProduct <= 1 ? (
              <div className="cursor-not-allowed">-</div>
            ) : (
              <div className="cursor-pointer" onClick={DecreaseQuantity}>
                -
              </div>
            )}
            <div>{QuantityOfProduct}</div>
            <div
              className={`${
                QuantityOfProduct >= 15
                  ? "cursor-not-allowed"
                  : "cursor-pointer"
              }`}
              onClick={QuantityOfProduct < 15 ? IncriseQuantity : null}
            >
              +
            </div>
          </div>

          <div
            className="bg-purple-dark rounded-md p-2 text-base-white h-8 cursor-pointer"
            onClick={handleAddToCart}
          >
            <ShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoffeCard;
