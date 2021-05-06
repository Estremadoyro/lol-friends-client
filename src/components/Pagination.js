import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ReactPaginate from "react-paginate";

/**
  * @typedef Props
  * @type {object}
  * @property {number} pageCount
  * @property {string} region
  * @property {string} region
  * @property {function} onPageChange
  * @property {object[]} players
  *
  * @param {Props}
  */
const Pagination = ({
  pageCount,
  onPageChange,
  region,
  league,
}) => {

  const changePage = ({ selected }) => {
    onPageChange(selected);
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
