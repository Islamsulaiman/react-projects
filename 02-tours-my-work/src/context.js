import React, { useEffect, useReducer, useContext, useState } from "react";
import { createContext } from "react";

const context = createContext();

const AppContext = ({ children }) => {
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
