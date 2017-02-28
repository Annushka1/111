$(document).ready(function() {

// бургер

  $('.burger').on('click', function(){
    $('.main-nav').addClass('open');
    $('.close').fadeIn();
  });

  $('.close').on('click', function(){
    $('.main-nav').removeClass('open');
    $('.close').hide();
  });

  $('.close').hide();

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
    $('.menu-order-bye1').fadeIn();
  });
 $('.callback_closer').on('click', function(){
    $('.menu-order-bye1').fadeOut();
  });

  $('.btn-basket').on('click', function(){
    $('.menu-order-bye2').fadeIn();
  });
 $('.callback_closer').on('click', function(){
    $('.menu-order-bye2').fadeOut();
  });

 //maskinput

   $(".form-buy__input").mask("(999) 999-9999");

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
// $('.close-nav').hide();
//  $('.burger').on('click', function(){
//     $('.main-nav').fadeIn();
//     $('.close-nav').fadeIn();
//   });
//  $('.close-nav').on('click', function(){
//     $(this).fadeOut();
//     $('.main-nav').fadeOut();
//   });

 //табы
var tabs = document.querySelectorAll('.menu-tabs .tab a');
var contents = document.querySelectorAll('.content-item');

function changeTab(event) {
  event.preventDefault()
  for (var i=0; i<tabs.length; i++){
    tabs[i].parentNode.classList.remove('selected-tab');
  }
  event.target.parentNode.classList.add('selected-tab');
  for (var i=0; i<contents.length; i++) {
    contents[i].classList.remove('selected-content');
  }
  var link = event.target.getAttribute('href');
  document.querySelector(link).classList.add('selected-content');
}


for (var i=0; i<tabs.length; i++){
  tabs[i].addEventListener('click', changeTab);
}

});