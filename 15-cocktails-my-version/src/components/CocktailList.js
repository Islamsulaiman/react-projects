import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  let { cocktails } = useGlobalContext();
  return (
    <div>
      <h2>Cocktail list</h2>
    </div>
  );
};

export default CocktailList;
