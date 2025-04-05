import React, { useReducer } from "react";
import reducerTest from "../Reducers/ReducerTest";

const intialState = {
  count: 0,
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducerTest, intialState);

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        {/* Test Reducer  */}
        <h1>Test Reducer</h1>
        <p>Value Is: {state.count} </p>
        <button onClick={() => dispatch({ type: "Plus" })}>+</button>
        <button onClick={() => dispatch({ type: "Minus" })}>-</button>
        <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
      </div>
    </>
  );
};

export default UseReducer;
