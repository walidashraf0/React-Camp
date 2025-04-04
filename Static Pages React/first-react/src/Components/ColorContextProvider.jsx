import React, { Children, createContext } from "react";

const ColorContext = createContext();

const ColorContextProvider = ({ children }) => {
  return <ColorContext.Provider value={"White"}>{children}</ColorContext.Provider>;
};

export default ColorContextProvider;
export { ColorContext };
