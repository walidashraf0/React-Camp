import { useContext, useReducer } from "react";
import { ColorContext } from "./Components/ColorContextProvider";
import reducerTest from "./Reducers/ReducerTest";

const intialState = {
  count: 0,
};

function App() {
  const [state, dispatch] = useReducer(reducerTest, intialState);
  const value = useContext(ColorContext);
  return (
    <>
    {/* Test Context  */}
      <h1>Color Is: {value} </h1>

      
      {/* Test Reducer  */}
      <p>Value Is: {state.count} </p>
      <button onClick={() => dispatch({type: "Plus"})}>+</button>
      <button onClick={() => dispatch({type: "Minus"})}>-</button>
      <button onClick={() => dispatch({type: "Reset"})}>Reset</button>
    </>
  );
}

export default App;
