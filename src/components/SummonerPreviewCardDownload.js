import React, { useEffect, useState } from "react";
import "../scripts/SummonerPreviewCard";
import $ from "jquery";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import "../styles/SummonerCardDownload.css";
import Loader from "react-loader-spinner";
export const SummonerPreviewCardDownload = ({ player }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const card = $(".summoner-card-desktop")[0];
    $("#summoner-download-btn").on("click", () => {
      setLoading(true);
      html2canvas(card, {
        useCORS: true,
        proxy: "nodejs",
        allowTaint: true,
        onclone: (document) => {
          document.getElementById("summoner-card-id").style.marginBottom = 0;
          document.getElementById("summoner-card-desktop-id").style.width = 700;
        },
      }).then((canvas) => {
        canvas.toBlob((blob) => {
          saveAs(blob, `${player.nameLower}-${player.region}.png`);
          setLoading(false);
        });
      });
    });
  }, []);

  return (
    <>
      <button className="desktop-btn-download" id="summoner-download-btn" disabled={loading}>
        {!loading ? (
          <i className="fas fa-download"></i>
        ) : (
          <Loader type="ThreeDots" color="#fff" width={50} height={20} />
        )}
      </button>
    </>
  );
};
