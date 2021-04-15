import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "../../styles/LeaderboardInfo.css";

export const LeaderboardInfoSkeleton = () => {
  return (
    <div className="container mx-auto leaderboard-info-container">
      <span className="badge  rounded-pill">
        <SkeletonTheme color="#928afc">
          <Skeleton width={100} height={13} />
        </SkeletonTheme>
      </span>
      <span className="badge   rounded-pill mx-2">
        <SkeletonTheme color="#928afc">
          <Skeleton width={60} height={13} />
        </SkeletonTheme>
      </span>
      <span className="badge   rounded-pill">
        <SkeletonTheme color="#928afc">
          <Skeleton width={90} height={13} />
        </SkeletonTheme>
      </span>
    </div>
  );
};
