$(document).ready(function(){ 
  //Scrolls to div with id #whatever
  $('a[href*=#]:not([href=#])').click(function() {
    var herodiv = $("html, body");

    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('#' + this.hash.slice(1));
      if (target.length) {
        herodiv.animate({
          scrollTop: (target.offset().top + herodiv.scrollTop())
        }, 500);
        return false;
      }
    }
  });
});

