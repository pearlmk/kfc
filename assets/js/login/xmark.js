$(document).ready(function () {
  $("#input").focus(function () {
    $("#xMark").css("display", "block");
  });
  $("#xMark").click(function () {
    $("#input").val(function () {
      $(this).empty();
    });
  });
});
