import React from "react";
import { Footer } from "../Footer";
import { SearchSummonerBar } from "../SearchSummonerBar";
import { HomeLogo } from "../HomeLogo";
import { HomeNews } from "../HomeNews";
const Home = () => {
  return (
    <>
      {/* <div className="container d-flex h-100 justify-content-center"> */}
      <div
        className="container d-flex flex-column"
        style={{ maxWidth: "800px" }}
      >
        <HomeLogo />
        <SearchSummonerBar />
        <HomeNews />
      </div>
      <Footer />
    </>
  );
};

export default Home;
