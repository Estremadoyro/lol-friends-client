import React from "react";

export const UpdatedRank = (props) => {
  const rankUp = "fas fa-caret-square-up rank-up mx-2";
  const rankDown = "fas fa-caret-square-down rank-down mx-2";
  const rankSame = "far fa-minus-square rank-same mx-2";

  const updateRank = () => {
    if (props.rankUpdate === "new") {
      return <i className="fas fa-bahai rank-new"></i>;
    } else {
      if (props.rankOffset > 0) {
        switch (props.rankUpdate) {
          case "up":
            return (
              <>
                <span className="position-new">{props.rankOffset}</span>
                <i className={rankUp}></i>
              </>
            );
          case "down":
            return (
              <>
                <span className="position-new">-{props.rankOffset}</span>
                <i className={rankDown}></i>
              </>
            );
          default:
            return;
        }
      } else {
        return (
          <>
            <i className={rankSame}></i>
          </>
        );
      }
    }
  };
  return <>{updateRank()}</>;
};
