import React from "react";

import "../styles/HomeNews.css";
export const HomeNews = () => {
  return (
    <>
      <div className="card-group my-4">
        <div className="card">
          <img
            className="card-img-top"
            src="https://1.bp.blogspot.com/-4yVqkMwApNs/YGNYsH7CGDI/AAAAAAAB3jI/ZEceu-94V5Asj1VnvRQpeWudvVSPvhqXACLcBGAsYHQ/w640-h150/asdfgasgsadf.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="fw-bold">
              3/30 PBE Update: Gwen, the Hallowed Seamstress, New Skins, Chromas
              & More!
            </h5>
            <p className="card-text">
              The PBE has been updated! As we start the 11.8 PBE cycle, today's
              patch includes our latest champion, Gwen, the Hallowed Seamstress,
              her release skin Space Groove Gwen, new Blackfrost & Dragonslayer
              skins, chromas, and much more!
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card">
          <img
            className="img-fluid"
            src="https://1.bp.blogspot.com/-7qqEqkhCC5M/YGNPJZRFJkI/AAAAAAAB3i4/E2BX_h-RBR0_mab9J4RFoxivI9ZRR-mkQCLcBGAsYHQ/w640-h208/dktyjtruadtfy.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="fw-bold">PATCH 11.7 & TFT NOTES</h5>
            <p className="card-text">
              Continue reading for a full look the patch notes & previews,
              including Space Groove Blitz & Crank, Lulu + Prestige, Lux, Nasus,
              Nunu & Willump, Rumble, and Samira!
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
