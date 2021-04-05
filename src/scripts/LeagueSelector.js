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

$(window).on("resize", function () {
  if ($(window).width() < 370) {
    $(".btn-group").addClass("btn-group-sm");
  } else {
    $(".btn-group").removeClass("btn-group-sm");
  }
});
