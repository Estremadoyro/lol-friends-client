import $ from "jquery";

$(function () {
  $(".btn-group").on("click", ".btn", function () {
    $(this)
      .addClass("league-selected")
      .removeClass("league-not-selected")
      .siblings()
      .removeClass("rank-selected")
      .addClass("rank-not-selected ");
  });
});
