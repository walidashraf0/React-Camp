import React, { useEffect, useState } from "react";
import axios from "axios";

const ShowAxiosData = () => {
  const [data, setData] = useState([]);
  const axiosData = async () => {
    const res = await axios.get(
      "https://v2.jokeapi.dev/joke/Programming,Dark?blacklistFlags=sexist&amount=10"
    );
    // console.log(res.data.jokes[0].delivery);
    setData(res.data.jokes);
  };

  useEffect(() => {
    axiosData();
  }, [])
  return (
    <>
      <h1>ShowAxiosData</h1>
      {data.map((joke, key) => (
        <p key={key}>{joke.delivery}</p>
      ))}
    </>
  );
};

export default ShowAxiosData;
