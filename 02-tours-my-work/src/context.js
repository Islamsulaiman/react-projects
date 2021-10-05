import React, { useEffect, useReducer, useContext, useState } from "react";
import { createContext } from "react";

const endLoading = "END_LOADING";

// context object instead of prop drilling
const context = createContext();

// fetch data from url
const url = "https://course-api.com/react-tours-project";

//object that control all of my state using useReducer
const controller = {
  isLoading: true,
};

//function to control useReducer states
const reducer = (state, action) => {
  switch (action.type) {
    case endLoading:
      return (controller.isLoading = false);
  }
};

const AppContext = ({ children }) => {
  const [data, setData] = useState([]);
  const [state, dispatch] = useReducer(reducer, controller);

  // fetch the data and change dependent values
  let dataFetched = async () => {
    try {
      let response = await fetch(url);
      let data = await response.json();
      setData(data);
      dispatch({ type: endLoading });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dataFetched();
  }, []);

  return (
    <>
      <context.Provider value={{ data }}>
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
