import React from "react";
import CoffeList from "../../../components/CoffeList";

function SecondSection() {
  return (
    <section className="flex flex-col gap-16">
      <h2 className="font-baloo text-base-title text-3xl font-bold lg:text-5xl">
        Nossos cafés
      </h2>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col gap-16 lg:grid lg:grid-cols-4 lg:gap-4">
          <CoffeList />
        </div>
      </div>
    </section>
  );
}

export default SecondSection;
