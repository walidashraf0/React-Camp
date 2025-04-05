import React, { useContext } from "react";
import { ColorContext } from "./ColorContextProvider";

const UseContext = () => {
  const value = useContext(ColorContext);

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        {/* Test Context  */}
        <h1>Test Context</h1>
        <h4>Color Is: {value} </h4>
      </div>
    </>
  );
};

export default UseContext;
