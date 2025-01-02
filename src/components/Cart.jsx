import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { useCart } from "../context/CartContext";
import { ShoppingCart, Trash } from "@phosphor-icons/react";
import { Link, useNavigate } from "react-router-dom";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    cartTotal,
  } = useCart();

  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };
  return (
    <Sheet>
      <SheetTrigger>
        <div className="flex items-center bg-yellow-light text-yellow rounded-md p-2">
          <ShoppingCart size={32} />
        </div>
      </SheetTrigger>
      <SheetContent className="bg-base-white MenuWidthcontrol">
        <SheetHeader>
          <SheetTitle className="font-baloo text-2xl">Meu Carrinho</SheetTitle>
          <SheetDescription className="font-Roboto text-base">
            Aqui estão os itens que você selecionou:
          </SheetDescription>
        </SheetHeader>
        <div className="mt-4">
          {cartItems.length > 0 ? (
            <>
              {cartItems.map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between items-center py-5 mb-2 gap-5 border-b border-base-button"
                >
                  <img src={item.image} width={80} alt="Foto do café" />
                  <div className="flex flex-col justify-start items-start w-full gap-2">
                    <div className="flex justify-between w-full">
                      <span className="font-Roboto text-base font-medium">
                        {item.name}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="font-Roboto text-base font-bold">
                          R$ {item.total.toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-center items-center gap-5">
                      <div className="flex bg-base-button text-purple font-Roboto font-medium text-lg py-1 px-3 rounded-md gap-3">
                        <div
                          className={`${
                            item.quantity <= 1
                              ? "cursor-not-allowed"
                              : "cursor-pointer"
                          }`}
                          onClick={() =>
                            item.quantity > 1 && decreaseQuantity(item.name)
                          }
                        >
                          -
                        </div>
                        <div>{item.quantity}</div>
                        <div
                          className={`${
                            item.quantity >= 15
                              ? "cursor-not-allowed"
                              : "cursor-pointer"
                          }`}
                          onClick={() =>
                            item.quantity < 15 && increaseQuantity(item.name)
                          }
                        >
                          +
                        </div>
                      </div>
                      <button
                        className="flex justify-center items-center gap-2 text-red-500 bg-base-button rounded-lg p-2 hover:text-red-700"
                        onClick={() => removeFromCart(item.name)}
                      >
                        <Trash className="fill-purple" size={20} />
                        <span className="font-Roboto font-normal text-sm text-base-text">
                          REMOVER
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex flex-col gap-3 mt-4  pt-2 font-bold text-lg font-Roboto w-full">
                <div className="flex justify-between">
                  <span className="font-Roboto text-base-text font-normal">
                    Total de itens
                  </span>
                  <span className="font-Roboto text-base-text font-normal">
                    R$ {cartTotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-Roboto text-base-text font-normal">
                    Entrega
                  </span>
                  <span className="font-Roboto text-base-text font-normal">
                    R$ 3,50
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-Roboto text-base-title font-bold text-2xl">
                    Total:
                  </span>
                  <span className="font-Roboto text-base-title font-bold text-2xl">
                    R$ {(cartTotal + 3.5).toFixed(2)}
                  </span>
                </div>
              </div>
              <button
                onClick={handleCheckout}
                className="bg-yellow rounded-md w-full py-4 text-white font-Roboto text-base mt-5"
              >
                CONFIRMAR PEDIDO
              </button>
            </>
          ) : (
            <p className="font-Roboto text-base">Seu carrinho está vazio!</p>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default Cart;
