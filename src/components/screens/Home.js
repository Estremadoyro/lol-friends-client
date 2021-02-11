import React, { useEffect } from "react";
import axios from "axios";

const Home = () => {
  const func = async () => {
    const request = axios.get("/leaderboard/challenger");
    const result = request.data;
  console.log(result);
  };

  useEffect(() => { 
    func(); 
  }, [])

  return <>Home</>;
};

export default Home;
