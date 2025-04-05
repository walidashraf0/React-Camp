import ShowData from "./Components/ShowData";
import UseContext from "./Components/UseContext";
import UseReducer from "./Components/UseReducer";
import useFetchData from "./CustomHooks/useFetchData";

function App() {
  return (
    <>
      {/* Test Context */}
      <UseContext />

      {/* Test Reducer */}
      <UseReducer />

      {/* Test Custom Hook */}
      <ShowData />
      
    </>
  );
}

export default App;
