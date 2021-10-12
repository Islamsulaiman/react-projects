import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  let { cocktails } = useGlobalContext();
  console.log(cocktails);
  return (
    <div>
      <h2>Cocktail list</h2>
      <br />
      <section>
        {cocktails.map((drink) => {
          return <Cocktail key={drink.id} drink={drink} />;
        })}
      </section>
    </div>
  );
};

export default CocktailList;
