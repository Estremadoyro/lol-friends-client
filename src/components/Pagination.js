import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ReactPaginate from "react-paginate";

const Pagination = ({
  players,
  playersPerPage,
  setPageNumber,
  region,
  league,
}) => {
  const pageCount = Math.ceil(players.length / playersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    setPageNumber(0);
  }, [region, league]);
  return (
    <>
      <nav className="mt-1">
        <ReactPaginate
          previousLabel={"Back"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousLinkClassName={"page-link"}
          nextLinkClassName={"page-link"}
          disabledClassName={"page-item disabled"}
          activeClassName={"page-item active"}
        />
      </nav>
    </>
  );
};

Pagination.propTypes = {
  region: PropTypes.string.isRequired,
  league: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  region: state.regionReducer.region,
  league: state.leagueReducer.league,
});

export default connect(mapStateToProps)(Pagination);
