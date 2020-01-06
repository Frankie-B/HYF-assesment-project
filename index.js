// Script for background to fill screen
$(function() {
  $(window).on('load resize', function() {
    $('.fill-screen').css('height, window.innerHeight');
  });

  //  Smooth scroll feature
  $('nav a, .down-button a').bind('click', function() {
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

// Function for back to top feature
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#up-arrow').fadeIn();
    } else {
      $('#up-arrow').fadeOut();
    }
  });
  $('#up-arrow').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 600);
    return false;
  });
});
