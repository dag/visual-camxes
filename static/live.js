$(function() {
  $("#text").keyup(function() {
    $.get("/", { text: $("#text").val() }, function(data) {
      $("#boxes").html(data);
    });
  });
});
