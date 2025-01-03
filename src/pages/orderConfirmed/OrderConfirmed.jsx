import illustration from "../../../public/assets/illustration.png";
import { useCart } from "../../context/CartContext";
import { MapPin, Timer, DollarSign } from "lucide-react";
import React from "react";

function OrderConfirmed() {
  const { formData, paymentMethod } = useCart();
  console.log("====================================");
  console.log(formData);
  console.log("====================================");
  return (
    <main className="pt-10">
      <h2 className="font-baloo text-yellow-dark text-3xl font-bold">
        Uhu! Pedido confirmado
      </h2>
      <span className="font-Roboto text-base text-base-text">
        Agora é só aguardar que logo o café chegará até você
      </span>
      <section className="flex mt-10">
        <div className="flex flex-col justify-center gap-5 w-1/2 gradient-border p-10">
          <div className="flex items-center gap-3 font-Roboto text-base text-base-text">
            <MapPin
              className="text-white bg-purple rounded-full p-2"
              size={32}
            />
            <div className="flex flex-col">
              <span>
                Entrega em <span className="font-semibold">{formData.rua}</span>
              </span>
              <span>
                {formData.bairro} -{" "}
                <span>
                  {formData.cidade} - {formData.uf}
                </span>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 font-Roboto text-base text-base-text">
            <Timer
              className="text-white bg-yellow rounded-full p-2"
              size={32}
            />
            <div className="flex flex-col">
              <span>Previsão de entrega</span>
              <span className="font-semibold">20 min - 30 min</span>
            </div>
          </div>
          <div className="flex items-center gap-3 font-Roboto text-base text-base-text">
            <DollarSign
              className="text-white bg-yellow-dark rounded-full p-2"
              size={32}
            />
            <div className="flex flex-col">
              <span>Pagamento na entrega</span>
              <span className="font-semibold">{paymentMethod}</span>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-end w-1/2">
          <img src={illustration} alt="Homem andando de moto" />
        </div>
      </section>
    </main>
  );
}

export default OrderConfirmed;
