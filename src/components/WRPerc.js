import React from "react";

export const WRPerc = (props) => {
  let wr;
  if (!props.winrate) {
    wr = Math.round((props.wins / (props.wins + props.losses)) * 100, 0);
  } else {
    wr = props.winrate;
  }
  const blue = "rgb(55 164 235)";
  const red = "rgb(251 99 132)";
  const golden = "#CCA43D";

  return (
    <>
      <span
        style={
          wr >= 65
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
