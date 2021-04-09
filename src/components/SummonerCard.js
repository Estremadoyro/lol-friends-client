import React from "react";

export const SummonerCard = () => {
  return (
    <div className="col mx-auto my-4">
      <div className="card">
        <div className="row">
          <div className="col-md-4 col-xs-12 text-center my-2">
            <img src="https://cdn.communitydragon.org/9.3.1/profile-icon/29" className="img-fluid ms-2" />
          </div>
          <div className="col-md-8 col-xs-12">
            <div className="card-body">
              <div className="card-title fw-bold">Louis Litt</div>
              <div className="card-text">Level: 2340</div>
              <div className="card-text">Region: Latin America South</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
