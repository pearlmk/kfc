$(document).ready(function(){
    $("#search, #searchTwo").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#item li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });
 