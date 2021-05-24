import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Footer } from "../Footer";
import SearchSummonerBar from "../SearchSummonerBar";
import { HomeLogo } from "../HomeLogo";
import { HomeNews } from "../HomeNews";
import { SummonerPreviewCard } from "../summoner-preview-card/SummonerPreviewCard";
import { SummonerPreviewSkeleton } from "../skeletons/SummonerPreviewSkeleton";
import Emoji from "../../misc/Emoji";

import "../../scripts/SummonerPreviewCard";

const Home = ({ player, loading, error }) => {
  return (
    <>
      <div className="container d-flex flex-column" style={{ maxWidth: "800px" }}>
        <HomeLogo />
        <SearchSummonerBar />
        {error && (
          <div className="alert alert-danger my-2 text-center" role="alert">
            {error} <Emoji symbol="😥" label="sheep" />
          </div>
        )}
        {loading && <SummonerPreviewSkeleton />}
        {!loading && player ? <SummonerPreviewCard player={player.player} /> : null}
        <p className="text-muted text-center mt-4">
          Summoner Preview cards are currently being developed, checkout{" "}
          <a href="https://github.com/Estremadoyro/lol-friends-client/wiki/LoL-Friends-(Wiki)" target="blank_">
            {" "}
            wiki{" "}
          </a>{" "}
          for the PS preview.{" "}
        </p>
        <h3 className="fw-bold text-center">News</h3>
        <HomeNews />
      </div>
      <Footer />
    </>
  );
};
Home.propTypes = {
  player: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};
const mapStateToProps = (state) => ({
  player: state.summonerReducer.player,
  loading: state.summonerReducer.loading,
  error: state.alertReducer.alert,
});

export default connect(mapStateToProps)(Home);
