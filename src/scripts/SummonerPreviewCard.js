// import $ from "jquery";
// import html2canvas from "html2canvas";
// $(function () {
//   console.log("owowow");
//   var summonerCard = $(".summoner-card-desktop");
//   var getCanvas;

//   $(".summoner-preview-btn").on("click", function () {
//     console.log("owo");
//     html2canvas(summonerCard, {
//       onrendered: function (canvas) {
//         $("previewImage").append(canvas);
//         getCanvas = canvas;
//       },
//     });
//   });
//   $(".summoner-download-btn").on("click", function () {
//     console.log("nigga");
//     var imgData = getCanvas.toDataURL("image/png");
//     var newData = imgData.replace(/^data:image\/png/, "data:application/octet-stream");
//     $("#summoner-card-btn").attr("download", "wdd2.png").attr("href", newData);
//   });
// });
