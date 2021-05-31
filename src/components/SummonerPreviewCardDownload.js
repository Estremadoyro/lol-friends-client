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
    const card = $("#summoner-card-desktop-id")[0];
    $("#summoner-download-btn").on("click", () => {
      setLoading(true);
      html2canvas(card, {
        useCORS: true,
        proxy: "nodejs",
        allowTaint: true,
        backgroundColor: null,
        foreignObjectRendering: false,
        onclone: (document) => {
          document.getElementById("summoner-card-row").style.height = "10px";
          // document.getElementById("summoner-card-id").style.marginBottom = 0;
          // document.getElementById("summoner-card-id").style.marginTop = 0;
          // document.getElementById("summoner-card-desktop-id").style.width = 700;
          // document.getElementById("summoner-card-id").setAttribute("style", "margin: 0px !important");
          // document.getElementById("summoner-card-desktop-id").setAttribute("style", "width: 700px !important");
          // document.getElementById("summoner-card-desktop-id").setAttribute("style", "margin-top: 10px !important");
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
