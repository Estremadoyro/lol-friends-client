import React from "react";
import ReactPaginate from "react-paginate";

export const Pagination = ({ players, playersPerPage, setPageNumber }) => {
  const pageCount = Math.ceil(players.length / playersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <>
      <nav className="mt-1">
        <ReactPaginate
          previousLabel={"Back"}
          // previousClassName={"fas fa-arrow-circle-left"}
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
