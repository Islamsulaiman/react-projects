import React from "react";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
import { useGlobalContext } from "../context";
import Loading from "../components/Loading";

const Home = () => {
  let { loading } = useGlobalContext();
  return (
    <div>
      <SearchForm />
      {loading ? <Loading /> : <CocktailList />}
    </div>
  );
};

export default Home;
