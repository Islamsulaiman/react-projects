import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ drink }) => {
  let { id, name, img, alcohol, glass, ingredient } = drink;
  const width = { width: "400px" };
  return (
    <div>
      <section>
        <img style={width} src={img} alt={name} />
      </section>
      <section>
        <div>{name}</div>
        <div>{alcohol}</div>
        <Link to={`/cocktail/${id}`} className='btn'>
          Details
        </Link>
      </section>
    </div>
  );
};

export default Cocktail;
