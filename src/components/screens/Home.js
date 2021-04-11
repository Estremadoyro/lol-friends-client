import React from "react";
import { connect } from "react-redux";

import { Footer } from "../Footer";
import SearchSummonerBar from "../SearchSummonerBar";
import { HomeLogo } from "../HomeLogo";
import { HomeNews } from "../HomeNews";
import { SummonerPreviewCard } from "../SummonerPreviewCard";
import { SummonerPreviewSkeleton } from "../skeletons/SummonerPreviewSkeleton";

const Home = ({ player, loading, error }) => {
  return (
    <>
      <div
        className="container d-flex flex-column"
        style={{ maxWidth: "800px" }}
      >
        <HomeLogo />
        <SearchSummonerBar />
        {error && <h3>{error}</h3>}
        {loading && <SummonerPreviewSkeleton />}
        {!loading && player ? (
          <SummonerPreviewCard player={player.player} />
        ) : null}
        <SummonerPreviewSkeleton />
        <HomeNews />
      </div>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  player: state.searchSummonerReducer.player,
  loading: state.searchSummonerReducer.loading,
  error: state.alertReducer.alert,
});

export default connect(mapStateToProps)(Home);
