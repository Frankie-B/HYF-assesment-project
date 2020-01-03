// Script for background to fill screen
$(function() {
  $(window).on('load resize', function() {
    $('.fill-screen').css('height, window.innerHeight');
  });

  // scrollspy
  $(body).scrollspy({ target: '.nav' });
});

// Funtion to initalise scrollspy funtionality
// $(function() {
//   var $nav = $('#nav');

//   $('#sticky-navigation').scrollspy({
//     min: $nav.offset().top,
//     onEnter: function(element, position) {
//       $nav.addClass('fixed');
//     },
//     onLeave: function(element, position) {
//       $nav.removeClass('fixed');
//     },
//   });
// });
