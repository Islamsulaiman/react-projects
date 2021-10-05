import React, { useEffect, useReducer, useContext, useState } from "react";
import { createContext } from "react";

// context object instead of prop drilling
const context = createContext();

// fetch data from url
const url = "https://course-api.com/react-tours-project";

//object that control all of my state using useReducer
const controller = {
  isLoading: true,
};

//function to control useReducer states
const reducer = (state, action) => {};

const AppContext = ({ children }) => {
  const [data, setData] = useState([]);
  const [state, dispatch] = useReducer(reducer, controller);

  let dataFetched = async () => {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setData(data);
    dispatch({ type: "END_LOADING" });
  };

  return (
    <>
      <context.Provider value='hello'>
        <h4>Children</h4>
        {children}
      </context.Provider>
    </>
  );
};

const useGlobalContext = () => {
  return useContext(context);
};

export { useGlobalContext };
export { AppContext, context };
