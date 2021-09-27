import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTour }) => {
  let [allInfo, setAllInfo] = useState(false);
  // let { id, name, info, image, price } = tour;

  return (
    <>
      <img src={image} alt={name} />
      <footer>
        <p>{name}</p>
        <p>{price}</p>
        <p>
          {allInfo ? info : `${info.substring(0, 200)}...`}
          <button
            onClick={() => {
              setAllInfo(!allInfo);
            }}
          >
            {allInfo ? "Read less" : "Read more"}
          </button>
        </p>

        <button onClick={() => removeTour(id)}>Not interested</button>
      </footer>
    </>
  );
};

export default Tour;
