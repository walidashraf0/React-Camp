import { useContext } from "react";
import { ColorContext } from "./Components/ColorContextProvider";

function App() {
  const value = useContext(ColorContext);
  return (
    <>
      <h1>Color Is: {value} </h1>
    </>
  );
}

export default App;
