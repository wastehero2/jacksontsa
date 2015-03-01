$(document).ready(function(){
  $("#intro").height($(window).innerHeight());

  $(window).resize($.debounce(500, true, function(e){
    $("#intro").height($(window).innerHeight());
  }));
});