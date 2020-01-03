// Script for background to fill screen
$(function() {
  $(window).on('load resize', function() {
    $('.fill-screen').css('height, window.innerHeight');
  });

  // Smooth scrolling
  $('nav a').bind('click', function() {
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $($(this).attr('href')).offset().top,
        },
        1500,
        'easeInOutExpo'
      );
    event.preventDefault();
  });
});
