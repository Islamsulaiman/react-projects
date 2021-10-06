import React, { useRef } from "react";
import { useGlobalContext } from "./context";

const Tour = ({ id, name, info, image, price }) => {
  let { deleteItem, controller, toReadMore } = useGlobalContext();

  let color = useRef();

  const changeColor = () => {
    color.current.style.color = "red"; // to change the color of the text when the correspoding button is pressed
  };
  return (
    <>
      <section>
        <img src={image} alt={name} />
      </section>
      <section>
        <h3>{name}</h3>
        <h4>{price}</h4>
        <p ref={color} style={{ color: "black" }}>{`${
          controller.isReadMore ? info : info.substring(0, 200)
        }...`}</p>
        <button
          type='button'
          onClick={() => {
            toReadMore(id);
          }}
        >
          {controller.isReadMore ? "Read Less..." : "Read More..."}
        </button>
        <button
          type='button'
          onClick={() => {
            changeColor();
          }}
        >
          Change Color
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
