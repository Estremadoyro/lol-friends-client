import React from "react";
import { Footer } from "../Footer";
import { SearchSummonerBar } from "../SearchSummonerBar";
import { HomeLogo } from "../HomeLogo";
import { HomeNews } from "../HomeNews";
import { SummonerCard } from "../SummonerCard";
const Home = () => {
  return (
    <>
      <div className="container d-flex flex-column" style={{ maxWidth: "800px" }}>
        <HomeLogo />
        <SearchSummonerBar />
        <SummonerCard />
        <HomeNews />
      </div>
      <Footer />
    </>
  );
};

export default Home;
