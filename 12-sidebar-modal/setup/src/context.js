import React, { useState, useContext } from "react";

const context = React.createContext();

function PassContext({ children }) {
  return <context.Provider value='hello'>{children}</context.Provider>;
}

const useGlobalExport = () => {
  return useContext(context);
};

export { PassContext, useGlobalExport };
