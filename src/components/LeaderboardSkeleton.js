import React from "react";
import Skeleton from "react-loading-skeleton";

export const LeaderboardSkeleton = () => {
  return Array.from(Array(25)).map((_, index) => (
    <tr key={index}>
      <td className="align-middle" style={{ textAlign: "left" }}>
        <span
          className={`badge rank-badge-${
            index < 3 ? index + 1 : "default"
          } mx-2`}
        >
          <Skeleton />
        </span>
        <Skeleton width={100} />
      </td>
      <td className="align-middle">
        <Skeleton width={40} />
      </td>
      <td className="align-middle">
        <Skeleton />
      </td>
      <td className="align-middle">
        <Skeleton width={40} />
      </td>
      <td className="align-middle">
        <Skeleton />
      </td>
    </tr>
  ));
};
