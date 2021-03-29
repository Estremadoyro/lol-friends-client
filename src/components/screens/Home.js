import React from "react";
import { Footer } from "../Footer";
import { SearchSummonerBar } from "../SearchSummonerBar";
import { HomeLogo } from "../HomeLogo";
const Home = () => {
  return (
    <>
      <div className="container d-flex justify-content-center">
        <div className="col">
          <HomeLogo />
          <SearchSummonerBar />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
