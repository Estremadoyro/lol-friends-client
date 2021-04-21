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

const Home = ({ player, loading, error }) => {
  return (
    <>
      <div
        className="container d-flex flex-column"
        style={{ maxWidth: "800px" }}
      >
        <HomeLogo />
        <SearchSummonerBar />
        {error && (
          <div className="alert alert-danger my-2 text-center" role="alert">
            {error} <Emoji symbol="😥" label="sheep" />
          </div>
        )}
        {loading && <SummonerPreviewSkeleton />}
        {!loading && player ? (
          <SummonerPreviewCard player={player.player} />
        ) : null}

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
  player: state.searchSummonerReducer.player,
  loading: state.searchSummonerReducer.loading,
  error: state.alertReducer.alert,
});

export default connect(mapStateToProps)(Home);
