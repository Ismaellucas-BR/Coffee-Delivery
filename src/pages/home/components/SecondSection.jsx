import React from "react";
import CoffeCard from "../../../components/CoffeCard";

function SecondSection() {
  return (
    <section>
      <h2 className="font-baloo text-base-title text-3xl font-bold lg:text-5xl">
        Nossos cafés
      </h2>
      <div className="flex flex-col gap-4">
        <CoffeCard />
      </div>
    </section>
  );
}

export default SecondSection;
