import React from "react";
import { useGlobalContext } from "./context";

const Tour = ({ name, info, image, price }) => {
  return (
    <>
      <section>
        <img src={image} alt={name} />
      </section>
      <section>
        <h3>{name}</h3>
        <h4>{price}</h4>
        <p>{info}</p>
      </section>
      <button type='button'>Remove Item</button>
    </>
  );
};

export { Tour };
