import React from "react";
import { Footer } from "../Footer";
import { SearchSummonerBar } from "../SearchSummonerBar";
import { HomeLogo } from "../HomeLogo";
import { HomeNews } from "../HomeNews";
const Home = () => {
  return (
    <>
      <div className="container d-flex justify-content-center">
        <div className="col">
          <HomeLogo />
          <SearchSummonerBar />
          <HomeNews />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
