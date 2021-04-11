import React from "react";
import Skeleton from "react-loading-skeleton";

export const SummonerPreviewSkeleton = () => {
  return (
    <div className="col mx-auto my-4">
      <div className="card">
        <div className="row">
          <div className="col-md-4 col-xs-12 text-center my-2">
            {/* <img src={player.profileIconUrl} className="img-fluid ms-2" /> */}
            <Skeleton width={130} height={130} className="ms-2" />
          </div>
          <div className="col-md-8 col-xs-12">
            <div className="card-body text-center">
              <div className="card-title fw-bold">
                <Skeleton width={200} />
              </div>
              <div className="card-text">
                <Skeleton width={200} />
              </div>
              <div className="card-text">
                <Skeleton width={200} />
              </div>
              <div className="card-text">
                <Skeleton width={200} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
