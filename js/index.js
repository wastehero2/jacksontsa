$(document).ready(function(){
  $("#intro").height($(window).innerHeight());

  $(window).resize($.debounce(500, true, function(e){
    $("#intro").height($(window).innerHeight());
  }));


  $('.img-holder').imageScroll({
    coverRatio: 1,
    container: $('body')
  });
});