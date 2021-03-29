import React from "react";

export const WRPerc = (props) => {
  const wr = Math.round((props.wins / (props.wins + props.losses)) * 100, 0);

  const blue = "rgb(55 164 235)";
  const red = "rgb(251 99 132)";
  const golden = "#CCA43D";

  return (
    <>
      <span
        style={
          wr >= 60
            ? { color: golden }
            : wr >= 50
            ? { color: blue }
            : { color: red }
        }
        className="fw-bold"
      >
        {wr}%
      </span>
    </>
  );
};
