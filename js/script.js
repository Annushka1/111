$(document).ready(function() {

// бургер

  // $('.burger').on('click', function(){
  //   $('.main-nav').slideToggle();
  // });

// трясущиеся иконки

$('img.animated').hover(
 function() {
   $(this).addClass('shake'); // Добавляем класс bounce
  },
  function() {
   $(this).removeClass('shake'); // Убираем класс
 })

// модалка

 $('.btn-red').on('click', function(){
    $('.menu-order').fadeIn();
  });
 $('.callback_closer').on('click', function(){
    $('.menu-order').fadeOut();
  });

 //maskinput

   $("#phone").mask("(999) 999-9999");

//галерея (3-4 страница)

$('.mini_photos').click( function() {
  var new_src=$(this).attr('src');
  $('.main_photo').attr('src',new_src);
});

//requisites

$(".btn-requisites").click(function () {
      $(".requisites-text").fadeToggle();
    });

//burger
$('.close-nav').hide();
 $('.burger').on('click', function(){
    $('.main-nav').fadeIn();
    $('.close-nav').fadeIn();
  });
 $('.close-nav').on('click', function(){
    $(this).fadeOut();
    $('.main-nav').fadeOut();
  });

});