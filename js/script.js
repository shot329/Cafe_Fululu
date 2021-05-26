// Nav
//========================//
$('.burger-btn').click(function() {
  $('.header-nav').fadeToggle(300);
  $(this).toggleClass('cross');

});

if ($(window).width() < 768) {
  $('.header-item').click(function() {
    $('.burger-btn').toggleClass('cross');
    $('.header-nav').fadeToggle(300);
  });
}