jQuery.noConflict();

(function($) {
  if ( $(window).width() >= 992 ) {
    var maxHeight = 0;
    $('.homepage-card-blurb').each(function() {
      if ($(this).height() > maxHeight) {
        maxHeight = $(this).height();
      }
    });
    $('.homepage-card-blurb').height(maxHeight);
  }
}(jQuery))
