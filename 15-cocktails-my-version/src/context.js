import React, { useState, useContext, useEffect } from "react";
import { useCallback, useMemo } from "react";
import { useFetch } from "./components/useFetch";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  let [cocktails, setCocktails] = useState([]);
  let [searchTerm, setSearchTerm] = useState("a");
  let [loading, setLoading] = useState(true);

  let fetchData = useCallback(async () => {
    setLoading(true);
    try {
      let res = await fetch(`${url}${searchTerm}`);
      let resData = await res.json();
      setLoading(false);
      setCocktails(resData);
    } catch (error) {
      console.log(error);
    }
  }, [url, searchTerm]);

  useEffect(() => {
    fetchData();
  }, [searchTerm, fetchData]);
  console.log(cocktails);
  return (
    <AppContext.Provider
      value={{ loading, cocktails, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
