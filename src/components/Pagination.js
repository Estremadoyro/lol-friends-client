import React, { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useSettingsContext } from "../contexts/SettingsContext";

export const Pagination = ({ players, playersPerPage, setPageNumber }) => {
  const { region, league } = useSettingsContext();
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
