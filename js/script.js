$(document).ready(function() {

  $('.burger').on('click', function(){
    $('.main-nav').slideToggle();
  });

$('img.animated').hover(
 function() {
   $(this).addClass('shake'); // Добавляем класс bounce
  },
  function() {
   $(this).removeClass('shake'); // Убираем класс
 })

 $('.btn-red').on('click', function(){
    $('.menu-order').fadeIn();
  });
 $('.callback_closer').on('click', function(){
    $('.menu-order').fadeOut();
  });

   $("#phone").mask("(999) 999-9999");

});