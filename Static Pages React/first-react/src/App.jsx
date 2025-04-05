import ShowAxiosData from "./Components/ShowAxiosData";
import ShowData from "./Components/ShowData";
import UseContext from "./Components/UseContext";
import UseReducer from "./Components/UseReducer";

function App() {
  return (
    <>
      {/* Test Context */}
      <UseContext />

      {/* Test Reducer */}
      <UseReducer />

      {/* Test Custom Hook */}
      <ShowData />

      {/* Get Data With axios */}
      <ShowAxiosData />
      
    </>
  );
}

export default App;
