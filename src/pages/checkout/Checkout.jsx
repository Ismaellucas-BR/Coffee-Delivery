import {
  MapPin,
  Trash,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from "@phosphor-icons/react";
import React from "react";
import { useCart } from "../../context/CartContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Checkout() {
  const {
    cartItems,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    paymentMethod,
    submitForm,
  } = useCart();

  const [formData, setFormData] = useState({
    cep: "",
    rua: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    uf: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (formData.cep && formData.rua && formData.numero) {
      // Verifica campos obrigatórios
      submitForm(formData); // Submete os dados do formulário
      navigate("/order_confimed"); // Redireciona para a página de confirmação
    } else {
      alert("Por favor, preencha todos os campos obrigatórios!");
    }
  }
  console.log("Dados do formulário enviados:", formData);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-start gap-10 w-full pt-10 pb-20"
    >
      <div className="flex flex-col gap-5 w-3/5">
        <h2 className="font-baloo text-xl font-bold">Complete seu pedido</h2>
        {/*address zone start*/}
        <div className="flex flex-col bg-base-card p-10 rounded-lg gap-5">
          <div
            className="flex
          "
          >
            <div className="text-yellow-dark">
              <MapPin size={32} />
            </div>
            <div>
              <div>
                <p className="font-Roboto font-normal text-lg">
                  Endereço de Entrega
                </p>
              </div>
              <div>
                <p className="font-Roboto font-normal text-base">
                  Informe o endereço onde deseja receber seu pedido
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <input
              type="text"
              name="cep"
              className="inputForm w-[12.5rem]"
              placeholder="CEP"
              value={formData.cep}
              onChange={handleChange}
            />
            <input
              type="text"
              className="inputForm w-[35rem]"
              name="rua"
              placeholder="Rua"
              value={formData.rua}
              onChange={handleChange}
            />
            <div className="divInputForm flex gap-3">
              <input
                type="text"
                className="inputForm w-[12.5rem]"
                placeholder="Número"
                name="numero"
                value={formData.numero}
                onChange={handleChange}
              />
              <div className="relative">
                <input
                  type="text"
                  className="inputForm w-[21.75rem]"
                  placeholder="Complemento"
                  name="complemento"
                  value={formData.complemento}
                  onChange={handleChange}
                />

                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none">
                  Opcional
                </span>
              </div>
            </div>
            <div className="divInputForm flex gap-3">
              <input
                type="text"
                className="inputForm w-[12.5rem]"
                placeholder="Bairro"
                name="bairro"
                value={formData.bairro}
                onChange={handleChange}
              />
              <input
                type="text"
                className="inputForm w-[17.25rem]"
                placeholder="Cidade"
                name="cidade"
                value={formData.cidade}
                onChange={handleChange}
              />
              <input
                type="text"
                className="inputForm w-[3.75rem]"
                placeholder="UF"
                name="uf"
                value={formData.uf}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        {/*address zone end*/}
        {/*Payment zone start*/}
        <div className="flex flex-col bg-base-card p-10 rounded-lg gap-5">
          <div
            className="flex
          "
          >
            <div>
              <CurrencyDollar className="fill-purple" size={32} />
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <p className="font-Roboto font-normal text-lg">Pagamento</p>
                <p className="font-Roboto font-normal text-base">
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={(event) => handleButtonClick(event, "credit-card")}
                  className={`flex justify-center items-center gap-1 bg-base-button text-base-text rounded-md h-[3.25rem] px-3 w-[11.25rem] active:border active:border-purple ${
                    paymentMethod === "credit-card"
                      ? "border-purple"
                      : "border-transparent"
                  }`}
                >
                  <CreditCard className="fill-purple" size={22} />
                  <span className="uppercase font-Roboto font-normal text-xs ">
                    Cartão de crédito
                  </span>
                </button>
                <button
                  type="button"
                  onClick={(event) => handleButtonClick(event, "debit-card")}
                  className="flex justify-center items-center gap-1 bg-base-button text-base-text rounded-md h-[3.25rem] px-3 w-[11.25rem] active:border active:border-purple"
                >
                  <Bank className="fill-purple" size={22} />
                  <span className="uppercase font-Roboto font-normal text-xs ">
                    cartão de débito
                  </span>
                </button>
                <button
                  type="button"
                  onClick={(event) => handleButtonClick(event, "cash")}
                  className="flex justify-center items-center gap-1 bg-base-button text-base-text rounded-md h-[3.25rem] px-3 w-[11.25rem] active:border active:border-purple"
                >
                  <Money className="fill-purple" size={22} />
                  <span className="uppercase font-Roboto font-normal text-xs ">
                    Dinheiro
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Payment zone end*/}
      <div className="w-2/5">
        <h2 className="font-baloo text-xl font-bold">Cafés selecionados</h2>
        <div className="mt-4 bg-base-card p-10 rounded-tl-lg rounded-tr-[80px] rounded-br-lg rounded-bl-[80px]">
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
                type="submit"
                className="bg-yellow rounded-md w-full py-4 text-white font-Roboto text-base mt-5"
              >
                CONFIRMAR PEDIDO
              </button>
            </>
          ) : (
            <p className="font-Roboto text-base">Seu carrinho está vazio!</p>
          )}
        </div>
      </div>
    </form>
  );
}

export default Checkout;
