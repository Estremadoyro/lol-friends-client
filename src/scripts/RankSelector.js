import $ from "jquery";

$(function () {
  $(".btn-group").on("click", ".btn", function () {
    $(this)
      .addClass("rank-selected")
      .removeClass("rank-not-selected")
      .siblings()
      .removeClass("rank-selected")
      .addClass("rank-not-selected ");
  });
});
