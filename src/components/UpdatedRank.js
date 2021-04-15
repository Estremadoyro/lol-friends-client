import React from "react";

export const UpdatedRank = ({ rankUpdate, rankOffset }) => {
  const rankUp = "fas fa-caret-square-up ms-1";
  const rankDown = "fas fa-caret-square-down ms-1";
  const rankSame = "far fa-minus-square rank-same mx-1";

  const rankOffsetDown = rankOffset.toString().substring(1);

  const updateRank = () => {
    if (rankUpdate === "new") {
      return <span className="badge rounded-pill rank-new">New !</span>;
    } else {
      if (rankOffset !== 0) {
        switch (rankUpdate) {
          case "up":
            return (
              <>
                <span className="badge rounded-pill rank-up">
                  <span className="position-new me-1">{rankOffset}</span>
                  <i className={rankUp}></i>
                </span>
              </>
            );
          case "down":
            return (
              <>
                <span className="badge rounded-pill rank-down">
                  <span className="position-new me-1">{rankOffsetDown}</span>
                  <i className={rankDown}></i>
                </span>
              </>
            );
          default:
            return;
        }
      } else {
        return (
          <>
            <span className="badge rounded-pill rank-same">
              <i className={rankSame}></i>
            </span>
          </>
        );
      }
    }
  };
  return <>{updateRank()}</>;
};
