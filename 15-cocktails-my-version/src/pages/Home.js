import React from "react";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

const Home = () => {
  return (
    <div>
      <SearchForm />
      <h2>Cocktail list</h2>
      <CocktailList />
    </div>
  );
};

export default Home;
