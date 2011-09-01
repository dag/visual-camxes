(function($) {

var ajaxRequest = null;

$(document).ready(function() {
  $("#text").keyup(function() {

    if (ajaxRequest) ajaxRequest.abort();

    ajaxRequest = $.getJSON("", { text: $("#text").val(), json: true }, function(json) {
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

})(jQuery);
