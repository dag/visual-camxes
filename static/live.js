$(function() {
  $("#text").keyup(function() {
    $.getJSON("/", { text: $("#text").val(), json: true }, function(json) {
      $("#boxes").html(json.html);
      if (json.grammatical) {
        $("#text").removeClass("ungrammatical");
        $("#text").addClass("grammatical");
      } else {
        $("#text").addClass("ungrammatical");
        $("#text").removeClass("grammatical");
      }
    });
  });
});
