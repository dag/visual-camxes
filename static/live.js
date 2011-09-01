(function($) {

var ajaxRequest = null;

$(document).ready(function() {
  
  $("#text").keyup(function() {

    if (ajaxRequest) ajaxRequest.abort();

    var jboText = $("#text").val(),
    ajaxRequest = $.getJSON("", { text: jboText, json: true }, function(json) {
      $("#boxes").html(json.html);
      
      if (json.grammatical) {
        $("#text").removeClass("ungrammatical");
        $("#text").addClass("grammatical");

        if (typeof(window.history) !== "undefined") {
          var link = $("<a/>")[0];
          link.href = window.location.href;
          link.search = "?text=" + escape(jboText);

          var title = jboText + " -- visual camxes";
          history.replaceState(null, title, link.href);
        }
      } else {
        $("#text").addClass("ungrammatical");
        $("#text").removeClass("grammatical");
      }
    });
  });
});

})(jQuery);
