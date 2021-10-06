import React from "react";
import { useGlobalContext } from "./context";

const Tour = ({ id, name, info, image, price }) => {
  let { deleteItem, controller, toReadMore } = useGlobalContext();
  return (
    <>
      <section>
        <img src={image} alt={name} />
      </section>
      <section>
        <h3>{name}</h3>
        <h4>{price}</h4>
        <p>{`${controller.isReadMore ? info : info.substring(0, 200)}...`}</p>
        <button
          type='button'
          onClick={() => {
            toReadMore(id);
          }}
        >
          {controller.isReadMore ? "Read Less..." : "Read More..."}
        </button>
      </section>
      <button
        type='button'
        onClick={() => {
          deleteItem(id);
        }}
      >
        Remove Item
      </button>
    </>
  );
};

export { Tour };
