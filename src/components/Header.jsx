import React from "react";
import Logo from "/assets/Logo.png";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";

function Header() {
  return (
    <header className="flex justify-center items-center w-full h-[6.5rem] bg-white">
      <section className="flex justify-between items-center w-full max-w-[1440px] ">
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div className="flex gap-3">
          <div className="flex items-center bg-purple-light rounded-md p-2 text-purple-dark font-Roboto font-normal">
            <MapPin size={32} />
            <span>
              Recife - <span>PE</span>
            </span>
          </div>
          <div className="flex items-center bg-yellow-light text-yellow rounded-md p-2">
            <ShoppingCart size={32} />
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
