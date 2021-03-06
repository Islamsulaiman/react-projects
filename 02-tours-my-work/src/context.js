import React, { useEffect, useReducer, useContext, useState } from "react";
import { createContext } from "react";

const endLoading = "END_LOADING";
const emptyData = "EMPTY_DATA";
const readMore = "READ_MORE";

// context object instead of prop drilling
const context = createContext();

// fetch data from url
const url = "https://course-api.com/react-tours-project";

//object that control all of my state using useReducer
const controller = {
  isLoading: true,
  isEmptyData: false,
  isReadMore: false,
};

//function to control useReducer states
const reducer = (state, action) => {
  switch (action.type) {
    case endLoading:
      return (controller.isLoading = false);
    case emptyData:
      return (controller.isEmptyData = true);
    case readMore:
      return (controller.isReadMore = action.payload); // this will flip the preexisting value to the opposite
    default:
      return state;
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

  const clearList = () => {
    setData([]);
    dispatch({ type: emptyData });
  };

  const deleteItem = (id) => {
    let newData = data.filter((item) => {
      return item.id != id;
    });
    setData(newData);
  };

  const toReadMore = (id) => {
    let value = !controller.isReadMore;
    dispatch({ type: readMore, payload: value });
  };

  return (
    <>
      <context.Provider
        value={{ data, controller, clearList, deleteItem, toReadMore }}
      >
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
