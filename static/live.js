$(function() {
  $("#text").keyup(function() {
    $.getJSON("/", { text: $("#text").val(), json: true }, function(json) {
      $("#boxes").html(json.html);
    });
  });
});
