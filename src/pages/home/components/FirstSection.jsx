import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import CoffeImage from "/assets/Imagem.png";

function FirstSection() {
  return (
    <section className="flexDirectionUniversal w-full gap-5 ">
      <div className="flexDirectionUniversal gap-4">
        <div className="flexDirectionUniversal">
          <h1 className="font-baloo text-base-title text-3xl font-bold lg:text-5xl">
            Encontre o café perfeito <br /> para qualquer hora do dia
          </h1>
          <h2 className="font-Roboto text-base-title font-normal mt-2">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
        </div>
        <div className="flexDirectionUniversal gap-3">
          <div>
            <div className="flexDirectionUniversal gap-3 lg:gap-10">
              <div className="flex items-center gap-2 ">
                <Package
                  size={32}
                  className="bg-base-text fill-base-white rounded-full p-2"
                />
                <span className="text-base-text font-Roboto font-normal text-base">
                  Embalagem mantém o café intacto
                </span>
              </div>

              <div className="flex items-center gap-2 ">
                <Coffee
                  size={32}
                  className="bg-purple fill-base-white rounded-full p-2"
                />
                <span className="text-base-text font-Roboto font-normal text-base">
                  O café chega fresquinho até você
                </span>
              </div>
            </div>
          </div>

          <div className="flexDirectionUniversal gap-3 lg:gap-10">
            <div className="flex items-center gap-2 ">
              <ShoppingCart
                size={32}
                className="bg-yellow-dark fill-base-white rounded-full p-2"
              />
              <span className="text-base-text font-Roboto font-normal text-base">
                Compra simples e segura
              </span>
            </div>
            <div className="flex items-center gap-2 ">
              <Timer
                size={32}
                className="bg-yellow fill-base-white rounded-full p-2"
              />
              <span className="text-base-text font-Roboto font-normal text-base">
                Entrega rápida e rastreada
              </span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img src={CoffeImage} alt="Imagem de copo de café" />
      </div>
    </section>
  );
}

export default FirstSection;
