$(document).ready(function () {
  $("#moreBtn").click(function () {
    $("#view").css({ display: "block", transition: "all 1.2 ease 1.2;" });
    let less = $("#veiw");
    if (less != $("#moreBtn")) {
      $("#moreBtn").hide();
    }
  });
  $("#lessBtn").click(function () {
    $("#view").css({ display: "none", transition: "all 1.2 ease 1.2;" });
    let less = $("#veiw");
    if (less != $("#moreBtn")) {
      $("#moreBtn").show();
    }
  });
});
