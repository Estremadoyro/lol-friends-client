import $ from "jquery";

$(function () {
  $(".dropdown-menu").on("click", "li a", function () {
    $(".btn:first-child").text($(this).text());
    $(".btn:first-child").val($(this).text());
  });
});
