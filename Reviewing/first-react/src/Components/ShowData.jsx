import React from "react";
import useFetchData from "../CustomHooks/useFetchData";

const ShowData = () => {
  const [state] = useFetchData("https://jsonplaceholder.typicode.com/posts");

  return (
    <>
      <h1>Test Custom Hook:</h1>
      {state.map((item, key) => (
        <p key={key}>{item.title}</p>
      ))}
    </>
  );
};

export default ShowData;
