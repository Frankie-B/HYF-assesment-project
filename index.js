// Script for background to fill screen
$(function() {
  $(window).on('load resize', function() {
    $('.fill-screen').css('height, window.innerHeight');
  });
});
